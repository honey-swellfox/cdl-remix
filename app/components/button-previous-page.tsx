import { Link } from '@remix-run/react';
import IconArrowLeft from './ui/icons/icon-arrow-left';

export default function ButtonPreviousPage({
	title,
	url = '/my-courses',
}: {
	title?: string;
	url?: string;
}) {
	return (
		<Link
			className="text-[#697077] text-[14px] flex items-center mb-[20px] hover:underline w-120 opacity-60"
			to={url}>
			<IconArrowLeft />
			<span>{title}</span>
		</Link>
	);
}
