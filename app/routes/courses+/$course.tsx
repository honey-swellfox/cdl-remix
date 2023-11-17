import { Link, useLoaderData } from '@remix-run/react';
import { DataFunctionArgs, type MetaFunction, json } from '@remix-run/node';

import Layout from '~/components/layout';
import { COURSE_BY_SLUG_QUERY } from '~/utils/graphql.queries';
import { fetchFromGraphQL } from '~/utils/graphql.server';
import CourseCardDetails from '~/components/course-card-details';
import Container from '~/components/container';

export const meta: MetaFunction = ({ data }: any) => {
	const title =
		data && data.data.entry ? data.data.entry.title : 'Browse Course';

	return [
		{ title: `CDL Online | ${title}` },
		{ name: 'description', content: 'Build CDL Online with Remix!' },
	];
};

export const loader = async ({ params }: DataFunctionArgs) => {
	const res = await fetchFromGraphQL(COURSE_BY_SLUG_QUERY, {
		slug: params.course,
	});

	return json(await res.json());
};

export default function CourseEntry() {
	const { data } = useLoaderData<typeof loader>();

	return (
		<Layout>
			<Container>
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
							fillRule="evenodd"
							stroke="#697077"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.2"
							d="M0 0L6 6 12 0"
							transform="rotate(90 3 4)"></path>
					</svg>
					<span>Browse Courses</span>
				</Link>

				{data && data.entry ? (
					<CourseCardDetails {...data.entry} />
				) : (
					''
				)}
			</Container>
		</Layout>
	);
}
