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
import { getCraftCsrfToken, getUserId } from './utils/auth.server';
import Navbar from './components/navbar';

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
	{ rel: 'stylesheet', href: fontStylesheetUrl },
	{ rel: 'stylesheet', href: tailwindStylesheetUrl },
];

export async function loader({ request }: DataFunctionArgs) {
	const csrf = await getCraftCsrfToken();
	const userId = await getUserId(request);

	return json({ csrf, userId });
}

function App({ userId }: { userId: string | null }) {
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
				<Outlet context={{ userId }} />

				<ScrollRestoration />
				<Scripts />
				<LiveReload />

				<Footer />
			</body>
		</html>
	);
}

function AppWithProviders() {
	const { csrf, userId } = useLoaderData<typeof loader>();

	return (
		<AuthenticityTokenProvider token={csrf.csrfTokenValue}>
			<App userId={userId} />
		</AuthenticityTokenProvider>
	);
}

export default withSentry(AppWithProviders);
