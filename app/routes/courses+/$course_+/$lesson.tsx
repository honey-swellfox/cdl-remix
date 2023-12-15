import { useLoaderData } from '@remix-run/react';
import { DataFunctionArgs, json } from '@remix-run/node';

import Layout from '~/components/layout';
import { LESSON_BY_SLUG_QUERY } from '~/utils/graphql.queries';
import { fetchFromGraphQL } from '~/utils/graphql.server';
import Container from '~/components/container';
import { requireLogin } from '~/utils/auth.server';

export async function loader({ request, params }: DataFunctionArgs) {
	await requireLogin(request);

	const response = await fetchFromGraphQL(LESSON_BY_SLUG_QUERY, {
		slug: params.lesson,
	});

	return json(await response.json());
}

export default function LessonEntry() {
	const { data } = useLoaderData<typeof loader>();

	return (
		<Layout>
			<Container>
				{data.entry ? (
					<h1 className="text-[28px]">Lesson: {data.entry.title}</h1>
				) : (
					''
				)}
			</Container>
		</Layout>
	);
}
