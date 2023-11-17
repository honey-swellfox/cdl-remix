import { InputMaybe } from '~/utils/graphql.types';

export default function CourseCardDetails({
	title,
	description,
	courseThumbnail,
	accessDays,
}: {
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
		<div className="card details shadow-2xl grid mb-[25px] min-h-[445px]">
			<div className="relative overflow-hidden md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-1 w-[512px]">
				<img
					src={thumbnail}
					alt={thumbnailAltText}
					className="object-center absolute top-0 left-0 w-full h-full object-cover z-0"
				/>
			</div>
			<div className="px-[15px] sm:px-[30px] lg:px-[50px] py-[30px] bg-white md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1">
				<h1 className="text-[28px] sm:text-[32px] mb-[25px] text-mineshaft leading-snug">
					{title}
				</h1>
				<div className="flex flex-col justify-between min-h-[128px]">
					<div className="flex items-center mb-[14px]">
						<p className="text-[#0f62fe] font-semibold text-[16px]">
							$150
						</p>
						<p className="text-[#697077] text-[12px] border-l border-[#dfe3e6] pl-[10px] ml-[10px]">
							{accessDays
								? accessDays + '-day access'
								: 'Unlimited access'}
						</p>
					</div>
					<div className="mb-[25px]">
						<div className="flex items-center">
							<div className="text-[#697077] text-[11px] xs:text-[12px] flex items-center mr-[13px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="10"
									height="12"
									viewBox="0 0 10 12"
									className="fill-current">
									<g
										fillRule="evenodd"
										transform="translate(0 -2)">
										<path
											fillRule="nonzero"
											d="M1.5 2C.678 2 0 2.678 0 3.5v9c0 .822.678 1.5 1.5 1.5H10V2H1.5zm0 1H9v8H1.5c-.176 0-.342.037-.5.094V3.5c0-.283.217-.5.5-.5zm1 1.5v1H8v-1H2.5zm-1 7.5H9v1H1.5c-.283 0-.5-.217-.5-.5 0-.283.217-.5.5-.5z"></path>
									</g>
								</svg>
								<span className="ml-[7px]">
									13 lessons (9hrs)
								</span>
							</div>
						</div>
					</div>
					<div
						className="text-[14px] text-mineshaft mb-[30px]"
						dangerouslySetInnerHTML={{
							__html: description,
						}}
					/>
					<div className="flex items-center">
						<button className="bg-[#0f62fe] hover:bg-[#0f62fe]-dark text-[14px] text-white font-light py-[10px] px-[15px] sm:px-[23px] mr-[20px] transition-colors duration-300">
							Purchase Course
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
