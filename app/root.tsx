import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

import tailwindStylesheetUrl from './styles/tailwind.css';
import fontStylesheetUrl from './styles/fonts.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { EpicProgress } from './components/progress-bar';

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
	{ rel: 'stylesheet', href: fontStylesheetUrl },
	{ rel: 'stylesheet', href: tailwindStylesheetUrl },
];

export default function App() {
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
				<Navbar />

				<Outlet />

				<EpicProgress />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />

				<Footer />
			</body>
		</html>
	);
}
