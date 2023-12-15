import { Link, Path } from '@remix-run/react';

import CourseDescription from '../course-description';
import CourseThumbnail from '../course-thumbnail';
import { EntryCriteriaInput, Maybe } from '~/utils/graphql.types';
import IconArrowRight from '../ui/icons/icon-arrow-right';
import DownloadCertificate from '../download-certificate';

export default function UserCourse({
	id,
	course,
	completed,
}: {
	id: number;
	course: EntryCriteriaInput[];
	completed: Maybe<boolean>;
}) {
	const userCourse = course[0];
	const { title, description, courseThumbnail, slug } = userCourse;

	const link = `/courses/overview/${id}-${slug}`;

	return (
		<div className="h-[325px] bg-white mb-[30px] shadow-2xl grid">
			<CourseThumbnail courseThumbnail={courseThumbnail} title={title} />

			<div className="p-[15px] sm:p-[30px] bg-white md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1">
				<Link
					className="text-mineshaft inline-block text-[20px] font-medium leading-snug mb-[18px]"
					to={link}>
					{title}
				</Link>
				<div className="flex flex-col justify-between min-h-[128px]">
					{!completed ? (
						<CourseDescription description={description} />
					) : (
						''
					)}

					<div className="flex items-center">
						{!completed ? (
							<Link
								className="flex items-center justify-between bg-[#0f62fe] hover:bg-[#0f62fe]-dark text-[14px] text-white font-light py-[10px] px-[15px] sm:px-[23px] mr-[20px] transition-colors duration-300"
								to={link}>
								<span className="mr-[35px]">Open Course</span>
								<IconArrowRight />
							</Link>
						) : (
							<DownloadCertificate />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
