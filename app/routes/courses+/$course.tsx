import { Link, useParams } from '@remix-run/react';
// import type { MetaFunction } from '@remix-run/react';

import Layout from '~/components/Layout';

// export const meta: MetaFunction = () => {
// 	return [
// 		{ title: 'CDL Online | Courses' },
// 		{ name: 'description', content: 'Build CDL Online with Remix!' },
// 	];
// };

export default function CourseEntry() {
	const params = useParams();

	return (
		<Layout>
			<div className="container mx-auto">
				<Link
					className="text-nevada text-[14px] flex items-center mb-[20px] hover:underline w-120 opacity-60"
					to="/courses">
					<svg
						width="8"
						height="14"
						viewBox="0 0 8 14"
						className="fill-current mr-[8px]">
						<path
							fill="none"
							fill-rule="evenodd"
							stroke="#697077"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.2"
							d="M0 0L6 6 12 0"
							transform="rotate(90 3 4)"></path>
					</svg>
					<span>Browse Courses</span>
				</Link>
				<div className="bg-white p-[50px]">
					<h1 className="text-[28px] sm:text-[32px] mb-[25px] text-mineshaft leading-snug">
						{params.course}
					</h1>
				</div>
			</div>
		</Layout>
	);
}
