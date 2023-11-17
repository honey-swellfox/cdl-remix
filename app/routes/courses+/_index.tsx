import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { ALL_COURSES_QUERY } from '~/utils/graphql.queries';
import { fetchFromGraphQL } from '~/utils/graphql.server';

import Layout from '~/components/layout';
import { InputMaybe, Scalars } from '~/utils/graphql.types';
import CourseCard from '~/components/course-card';
import { JSX } from 'react/jsx-runtime';

export const meta: MetaFunction = () => {
	return [
		{ title: 'CDL Online | Courses' },
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
			<div className="h-[185px] border-b border-opacity-30 border-black">
				<div className="flex items-center justify-center w-full h-full">
					<h1>Image banner</h1>
				</div>
			</div>
			<div className="container card-wrap mx-auto grid grid-cols-1 px-15 md:px-0 row-gap-30 py-[50px]">
				{data && data.entries
					? data.entries.map(
							(
								entry: JSX.IntrinsicAttributes & {
									slug:
										| InputMaybe<InputMaybe<string>>
										| undefined;
									title: string;
									description: string;
									id:
										| InputMaybe<InputMaybe<Number>>
										| undefined;
									courseThumbnail: InputMaybe<
										Array<InputMaybe<Scalars>>
									>;
									accessDays:
										| InputMaybe<InputMaybe<string>>
										| undefined;
								}
							) => (
								<CourseCard
									key={`course-${entry.id}`}
									{...entry}
								/>
							)
					  )
					: ''}
			</div>
		</Layout>
	);
}
