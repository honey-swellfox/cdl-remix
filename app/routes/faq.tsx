import type { MetaFunction } from '@remix-run/node';
import Layout from '~/components/Layout';

export const meta: MetaFunction = () => {
	return [
		{ title: 'CDL Online | FAQ' },
		{ name: 'description', content: 'Build CDL Online with Remix!' },
	];
};

export default function FAQ() {
	return (
		<Layout>
			<div className="h-[185px]">
				<div className="flex items-center justify-center w-full h-full">
					<h1>Frequently Asked Questions</h1>
				</div>
			</div>
		</Layout>
	);
}
