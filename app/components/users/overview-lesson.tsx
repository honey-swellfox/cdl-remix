import { Link } from '@remix-run/react';
import { useState } from 'react';

import { EntryCriteriaInput } from '~/utils/graphql.types';
import IconArrowRight from '~/components/ui/icons/icon-arrow-right';
import IconBook from '~/components/ui/icons/icon-book';
import IconCaretDown from '~/components/ui/icons/icon-caret-down';
import IconCaretUp from '~/components/ui/icons/icon-caret-up';
import OverviewSegment from './overview-segment';

export default function OverviewLesson({
	lesson,
	course,
}: {
	lesson: any;
	course: EntryCriteriaInput;
}) {
	const [showSegments, setShowSegments] = useState(false);
	const link = `/courses/${course.slug}/${lesson.slug}`;

	return (
		<div className="mb-2">
			{!showSegments ? (
				<button
					className="bg-[#ffffffcc] w-full text-[16px] text-left text-[#16161680] hover:text-[#161616] px-[15px] md:px-[30px] h-[75px] font-semibold flex justify-between items-center opacity-1"
					onClick={() => setShowSegments(!showSegments)}>
					<div className="flex items-center">
						<span className="mr-7">{lesson.title}</span>
					</div>
					<IconCaretDown />
				</button>
			) : (
				<div
					className={`bg-white shadow-2xl opacity-1 h-auto px-[15px] md:px-[30px] xlg:p-[10px] flex flex-col lg:flex-row relative ${
						showSegments ? 'opacity-1' : 'hidden opacity-0'
					}`}>
					<button
						className="absolute top-[10px] -right-[5px] md:right-[10px] p-[20px]"
						onClick={() => setShowSegments(!showSegments)}>
						<IconCaretUp />
					</button>
					<div className="w-full lg:w-2/6 xlg:px-[20px] pb-[30px] pt-[20px] lg:pb-[20px] border-b lg:my-[10px] lg:border-b-0 lg:border-r border-alto">
						<div className="flex items-center mb-[18px]">
							<Link
								className="text-[16px] font-semibold inline-block hover:underline mr-[7px]"
								to={link}>
								{lesson.title}
							</Link>
						</div>
						<div className="mb-[20px]">
							<div className="flex items-center">
								<div className="text-[#697077] text-[11px] xs:text-[12px] flex items-center mr-[13px]">
									<IconBook />
									<span className="ml-[7px]">
										9 modules (1hr)
									</span>
								</div>
							</div>
						</div>
						<Link
							className="bg-[#0f62fe] hover:bg-[#0f62fe]-dark w-[165px] text-[14px] text-white font-light py-[10px] px-[23px] mr-[20px] flex items-center justify-between transition-colors duration-300"
							to={link}>
							<span>Continue</span>
							<IconArrowRight />
						</Link>
					</div>
					<div className="w-full lg:w-4/6 py-[30px] lg:py-[20px] px-0 lg:pl-[40px]">
						{lesson.segments.map((segment: any) => (
							<OverviewSegment
								key={segment.id}
								segment={segment}
								link={link}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
