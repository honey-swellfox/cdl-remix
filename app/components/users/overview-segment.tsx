import { Link, useFetcher, useParams } from '@remix-run/react';
import { useEffect } from 'react';
import { getCourseInfoFromUrl } from '~/utils/helpers';
import IconChecked from '../ui/icons/icon-checked';

export default function OverviewSegment({
	link,
	segment,
}: {
	link: any;
	segment: any;
}) {
	const params = useParams();
	const { id } = getCourseInfoFromUrl(params.course);

	const fetcher = useFetcher({
		key: `segment-status-${segment.id}`,
	});

	useEffect(() => {
		if (!fetcher.data && fetcher.state == 'idle') {
			fetcher.load(`/resources/segment-status/${id}/${segment.id}}`);
		}
	}, [segment.id]);

	let data = fetcher.data ? fetcher.data : undefined;
	const completed = data !== undefined ? data.completed : false;

	return (
		<div className="flex items-center mb-[10px] last:mb-0">
			<IconChecked isDone={completed} isNext={!completed} />
			<div className="text-[14px] ml-[20px]">
				<Link
					className={`hover:underline ${
						completed
							? 'line-through text-[#697077]'
							: 'text-[#161616]'
					}`}
					to={`${link}/${segment.slug}`}>
					{segment.title}
				</Link>
			</div>
		</div>
	);
}
