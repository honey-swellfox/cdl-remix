import { InputMaybe } from '~/utils/graphql.types';

export default function CourseDescription({
	description,
}: {
	description: InputMaybe<any[]> | undefined;
}) {
	if (!description) return '';

	return (
		<div
			className="text-[14px] text-mineshaft mb-[30px]"
			dangerouslySetInnerHTML={{
				__html: description,
			}}
		/>
	);
}
