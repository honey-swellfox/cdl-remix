import { DataFunctionArgs, MetaFunction, json } from '@remix-run/node';
import { useLoaderData, useRouteError } from '@remix-run/react';
import { isRouteErrorResponse } from 'react-router-dom';
import Container from '~/components/container';
import Hero from '~/components/hero';

import Layout from '~/components/layout';
import UserCourse from '~/components/users/user-course';
import { requireLogin } from '~/utils/auth.server';
import { STUDENT_COURSES } from '~/utils/graphql.queries';
import { fetchFromGraphQL } from '~/utils/graphql.server';
import { invariantResponse } from '~/utils/misc';

export const meta: MetaFunction = () => {
	return [
		{ title: 'My Courses | CDL Online' },
		{ name: 'description', content: 'Build CDL Online with Remix!' },
	];
};

export async function loader({ request }: DataFunctionArgs) {
	const userId = await requireLogin(request);

	const res = await fetchFromGraphQL(STUDENT_COURSES, {
		id: userId,
	});

	const { errors, data } = await res.json();

	if (errors) {
		invariantResponse(errors, errors[0].message, {
			status: 404,
		});
	}

	const userCourses = data.user ? data.user.userCourses : null;

	return json({ userCourses });
}

export default function MyCourses() {
	const { userCourses } = useLoaderData<typeof loader>();

	return (
		<Layout>
			<Hero title="My Courses" imgUrl="/img/hero-course-library.jpg" />
			<Container className="card-wrap mx-auto grid grid-cols-1 px-15 md:px-0 row-gap-30">
				{userCourses
					? userCourses.map((userCourse: any) => (
							<UserCourse
								key={`course-${userCourse.id}`}
								{...userCourse}
							/>
					  ))
					: ''}
			</Container>
		</Layout>
	);
}

export function ErrorBoundary() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		error.statusText = 'Oh no! Something went wrong!';
	}
}
