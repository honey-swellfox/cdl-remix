import { Link } from '@remix-run/react';
import { InputMaybe } from '~/utils/graphql.types';

export default function CourseCard({
	slug,
	title,
	description,
	courseThumbnail,
	accessDays,
}: {
	slug: InputMaybe<InputMaybe<string>> | undefined;
	title: string;
	description: string;
	courseThumbnail: InputMaybe<Array<InputMaybe<any>>>;
	accessDays: InputMaybe<InputMaybe<string>> | undefined;
}) {
	const thumbnail =
		courseThumbnail && courseThumbnail.length
			? courseThumbnail[0]?.url
			: '/img/road.jpg';

	const thumbnailAltText =
		courseThumbnail && courseThumbnail.length
			? courseThumbnail[0]?.altText
			: title;

	return (
		<div className="h-[325px] bg-white mb-[30px] shadow-2xl grid">
			<div className="relative overflow-hidden md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-1 w-[380px]">
				<img
					src={thumbnail}
					alt={thumbnailAltText}
					className="object-center absolute top-0 left-0 w-full h-full object-cover z-0"
				/>
			</div>
			<div className="p-[15px] sm:p-[30px] bg-white md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1">
				<Link
					className="text-mineshaft inline-block text-[20px] font-medium leading-snug mb-[18px]"
					to={slug ? slug : ''}>
					{title}
				</Link>
				<div className="flex flex-col justify-between min-h-[128px]">
					<div className="flex items-center mb-[13px]">
						<p className="text-[#0f62fe] font-semibold text-[16px]">
							$65
						</p>
						<p className="text-[#697077] text-[12px] border-l border-[#dfe3e6] pl-[10px] ml-[10px]">
							{accessDays
								? accessDays + '-day access'
								: 'Unlimited access'}
						</p>
					</div>
					{!description ? (
						''
					) : (
						<div
							className="text-[14px] text-mineshaft mb-[30px]"
							dangerouslySetInnerHTML={{
								__html: description,
							}}
						/>
					)}
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
