import { type MetaFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import Container from '~/components/container';
import Layout from '~/components/layout';
import Navbar from '~/components/navbar';

export const meta: MetaFunction = () => {
	return [
		{ title: 'CDL Online | Homepage' },
		{ name: 'description', content: 'Build CDL Online with Remix!' },
	];
};

export default function Homepage() {
	return (
		<Layout>
			<Container>
				<div className="flex items-center justify-center w-full h-full">
					<h1>Homepage</h1>
				</div>
				<Outlet />
			</Container>
		</Layout>
	);
}
