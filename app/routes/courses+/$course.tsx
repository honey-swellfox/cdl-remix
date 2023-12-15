import { useLoaderData } from '@remix-run/react';
import { DataFunctionArgs, type MetaFunction, json } from '@remix-run/node';

import Layout from '~/components/layout';
import { COURSE_BY_SLUG_QUERY } from '~/utils/graphql.queries';
import { fetchFromGraphQL } from '~/utils/graphql.server';
import CourseCardDetails from '~/components/course-card-details';
import Container from '~/components/container';
import ButtonPreviousPage from '~/components/button-previous-page';

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
				<ButtonPreviousPage title="Browse Courses" />

				{data && data.entry ? (
					<CourseCardDetails {...data.entry} />
				) : (
					''
				)}
			</Container>
		</Layout>
	);
}
