import { cssBundleHref } from '@remix-run/css-bundle';
import { json, type LinksFunction, DataFunctionArgs } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';
import { withSentry } from '@sentry/remix';
import { AuthenticityTokenProvider } from 'remix-utils/csrf/react';

import tailwindStylesheetUrl from './styles/tailwind.css';
import fontStylesheetUrl from './styles/fonts.css';
import Footer from './components/footer';
import { EpicProgress } from './components/progress-bar';
import {
	getCraftCsrfToken,
	getUserId,
	getCurrentUser,
} from './utils/auth.server';
import { csrfCookieStorage, csrfTokenKey } from './utils/csrf.server';

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
	{ rel: 'stylesheet', href: fontStylesheetUrl },
	{ rel: 'stylesheet', href: tailwindStylesheetUrl },
];

export async function loader({ request }: DataFunctionArgs) {
	const csrf = await getCraftCsrfToken();
	const userId = await getUserId(request);
	const user = await getCurrentUser(userId);

	const session = await csrfCookieStorage.getSession(
		request.headers.get('Cookie')
	);

	session.set(csrfTokenKey, csrf.csrfTokenValue);

	return json(
		{ csrf, userId, user },
		{
			headers: {
				'Set-Cookie': await csrfCookieStorage.commitSession(session),
			},
		}
	);
}

function App({ userId, user }: { userId: string | null; user: any }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body>
				<EpicProgress />
				<Outlet context={{ userId, user }} />

				<ScrollRestoration />
				<Scripts />
				<LiveReload />

				<Footer />
			</body>
		</html>
	);
}

function AppWithProviders() {
	const loaderData = useLoaderData<typeof loader>();

	const { csrf, userId, user } = loaderData;

	return (
		<AuthenticityTokenProvider token={csrf.csrfTokenValue}>
			<App userId={userId} user={user} />
		</AuthenticityTokenProvider>
	);
}

export default withSentry(AppWithProviders);
