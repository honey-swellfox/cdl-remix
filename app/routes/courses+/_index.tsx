import { json, type MetaFunction } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import { ALL_COURSES_QUERY } from '~/utils/graphql.queries';
import { fetchFromGraphQL } from '~/utils/graphql.server';

import Layout from '~/components/layout';
import { EntryCriteriaInput } from '~/utils/graphql.types';
import CourseCard from '~/components/course-card';
import Hero from '~/components/hero';
import Container from '~/components/container';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Courses | CDL Online' },
		{ name: 'description', content: 'Build CDL Online with Remix!' },
	];
};

export const loader = async () => {
	const res = await fetchFromGraphQL(ALL_COURSES_QUERY);

	return json(await res.json());
};

export default function CoursesIndex() {
	const { data } = useLoaderData<typeof loader>();

	return (
		<Layout>
			<Hero
				title="Browse Courses"
				imgUrl="/img/hero-course-library.jpg"
			/>
			<Container className="container card-wrap mx-auto grid grid-cols-1 px-15 md:px-0 row-gap-30">
				{data && data.entries
					? data.entries.map((entry: EntryCriteriaInput) => (
							<CourseCard
								key={`course-${entry.id}`}
								entry={entry}
							/>
					  ))
					: ''}
				<Outlet />
			</Container>
		</Layout>
	);
}
