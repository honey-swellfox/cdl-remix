import type { MetaFunction } from '@remix-run/node';
import Container from '~/components/container';
import Layout from '~/components/layout';

export const meta: MetaFunction = () => {
	return [
		{ title: 'CDL Online | Contact Us' },
		{ name: 'description', content: 'Build CDL Online with Remix!' },
	];
};

export default function ContactUs() {
	return (
		<Layout>
			<Container>
				<div className="flex items-center justify-center w-full h-full">
					<h1>Contact Us</h1>
				</div>
			</Container>
		</Layout>
	);
}
