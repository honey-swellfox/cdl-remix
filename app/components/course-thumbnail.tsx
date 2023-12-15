import { InputMaybe } from '~/utils/graphql.types';

export default function CourseThumbnail({
	courseThumbnail,
	title,
}: {
	courseThumbnail: InputMaybe<any[]> | undefined;
	title: InputMaybe<InputMaybe<string>[]> | undefined;
}) {
	const thumbnail =
		courseThumbnail && courseThumbnail.length
			? courseThumbnail[0]?.url
			: '/img/road.jpg';

	const altText =
		courseThumbnail && courseThumbnail.length
			? courseThumbnail[0]?.altText
			: title;

	return (
		<div className="relative overflow-hidden md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-1 w-[380px] md:ml-auto">
			<img
				src={thumbnail}
				alt={altText}
				className="object-center absolute top-0 left-0 w-full h-full object-cover z-0"
			/>
		</div>
	);
}
