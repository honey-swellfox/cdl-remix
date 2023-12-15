import { DataFunctionArgs, MetaFunction, json } from '@remix-run/node';
import {
	isRouteErrorResponse,
	useLoaderData,
	useRouteError,
} from '@remix-run/react';
import { useParams } from '@remix-run/react';

import { COURSE_BY_SLUG_QUERY } from '~/utils/graphql.queries';
import { fetchFromGraphQL } from '~/utils/graphql.server';
import ButtonPreviousPage from '~/components/button-previous-page';
import Container from '~/components/container';
import Layout from '~/components/layout';
import OverviewLesson from '~/components/users/overview-lesson';
import { getCourseInfoFromUrl } from '~/utils/helpers';
import { requireLogin } from '~/utils/auth.server';

export const meta: MetaFunction = ({ data }: any) => {
	const title = data && data.course ? data.course.title : 'Browse Course';

	return [
		{ title: `${title} | CDL Online` },
		{ name: 'description', content: 'Build CDL Online with Remix!' },
	];
};

export const loader = async ({ request, params }: DataFunctionArgs) => {
	await requireLogin(request);

	const { slug } = getCourseInfoFromUrl(params.course);

	const response = await fetchFromGraphQL(COURSE_BY_SLUG_QUERY, {
		slug,
	});

	const course = await response.json();

	return json({ course: course.data.entry });
};

export default function CourseOverview() {
	const { course } = useLoaderData<typeof loader>();

	return (
		<Layout>
			<Container>
				<ButtonPreviousPage title="My Courses" />
				{course ? (
					<>
						<h1 className="text-[20px] sm:text-[28px] lg:text-[32px] lg:max-w-[600px] mb-[16px] text-left">
							{course.title}
						</h1>
						{course.includedLessons.map((lesson: any) => (
							<OverviewLesson
								key={lesson.id}
								lesson={lesson}
								course={course}
							/>
						))}
					</>
				) : (
					''
				)}
			</Container>
		</Layout>
	);
}

export function ErrorBoundary() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		error.statusText = 'Oh no! Something went wrong!';
	}

	return (
		<Container>
			<h1 className="text-[32px] min-h-screen">404 Page Not Found</h1>
		</Container>
	);
}
