import { Link } from '@remix-run/react';

export default function ButtonLogin() {
	console.log('ButtonLogin');
	return (
		<Link
			to="/login"
			className="h-full flex items-center text-[#000000b3] text-[16px] mb-[-3px] ">
			Login
		</Link>
	);
}
