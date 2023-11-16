import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

import Layout from '~/components/Layout';

export const meta: MetaFunction = () => {
	return [
		{ title: 'CDL Online | Courses' },
		{ name: 'description', content: 'Build CDL Online with Remix!' },
	];
};

export default function CoursesIndex() {
	return (
		<Layout>
			<div className="h-[185px] border-b border-opacity-30 border-black">
				<div className="flex items-center justify-center w-full h-full">
					<h1>Image banner</h1>
				</div>
			</div>
			<div className="container card-wrap mx-auto grid grid-cols-1 px-15 md:px-0 row-gap-30 py-[50px]">
				<div className="h-[325px] bg-white border border-opacity-30 border-black">
					<div className="p-[30px]">
						<Link to="test-course" className="hover:underline">
							Test Course
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
}
