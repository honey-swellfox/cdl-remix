import { Link, Path } from '@remix-run/react';
import { EntryCriteriaInput } from '~/utils/graphql.types';

import CourseDescription from './course-description';
import CourseThumbnail from './course-thumbnail';
import CoursePrice from './course-price';

export default function CourseCard({ entry }: { entry: EntryCriteriaInput }) {
	const { title, description, courseThumbnail, accessDays, price } = entry;

	const slug = entry.slug as unknown as string | Partial<Path>;

	return (
		<div className="h-[325px] bg-white mb-[30px] shadow-2xl grid">
			<CourseThumbnail courseThumbnail={courseThumbnail} title={title} />

			<div className="p-[15px] sm:p-[30px] bg-white md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1">
				<Link
					className="text-mineshaft inline-block text-[20px] font-medium leading-snug mb-[18px]"
					to={slug ? slug : ''}>
					{title}
				</Link>
				<div className="flex flex-col justify-between min-h-[128px]">
					<CoursePrice accessDays={accessDays} price={price} />
					<CourseDescription description={description} />

					<div className="flex items-center">
						<button className="bg-[#0f62fe] hover:bg-[#0f62fe]-dark text-[14px] text-white font-light py-[10px] px-[15px] sm:px-[23px] mr-[20px] transition-colors duration-300">
							Purchase Course
						</button>
						<Link
							className="text-[#0f62fe] inline-block text-[14px] hover:underline"
							to={slug ? slug : ''}>
							Course Details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
