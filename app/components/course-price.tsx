import { InputMaybe } from '~/utils/graphql.types';

export default function CoursePrice({
	accessDays,
	price,
}: {
	accessDays: InputMaybe<any[]> | undefined;
	price: InputMaybe<any[]> | undefined;
}) {
	return (
		<div className="flex items-center mb-[13px]">
			{price ? (
				<p className="text-[#0f62fe] font-semibold text-16">
					{'$' + price}
				</p>
			) : (
				<p className="text-[#76c720] font-semibold text-16">
					Free Course
				</p>
			)}
			<p className="text-[#697077] text-[12px] border-l border-[#dfe3e6] pl-[10px] ml-[10px]">
				{accessDays ? accessDays + '-day access' : 'Unlimited access'}
			</p>
		</div>
	);
}
