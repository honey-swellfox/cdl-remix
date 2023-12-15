import { useLoaderData } from '@remix-run/react';
import { DataFunctionArgs, type MetaFunction, json } from '@remix-run/node';

import Layout from '~/components/layout';
import { SEGMENT_BY_SLUG_QUERY } from '~/utils/graphql.queries';
import { fetchFromGraphQL } from '~/utils/graphql.server';
import Container from '~/components/container';
import Segment from '~/components/segments/Segment';
import { requireLogin } from '~/utils/auth.server';

export const meta: MetaFunction = ({ data }: any) => {
	const title =
		data && data.data.entry ? data.data.entry.title : 'Browse Course';

	return [
		{ title: `${title} | CDL Online` },
		{ name: 'description', content: 'Build CDL Online with Remix!' },
	];
};

export const loader = async ({ request, params }: DataFunctionArgs) => {
	await requireLogin(request);

	const res = await fetchFromGraphQL(SEGMENT_BY_SLUG_QUERY, {
		slug: params.segment,
	});

	return json(await res.json());
};

export default function SegmentEntry() {
	const { data } = useLoaderData<typeof loader>();

	return (
		<Layout>
			<Container>
				{data.entry ? <Segment entry={data.entry} /> : ''}
			</Container>
		</Layout>
	);
}
