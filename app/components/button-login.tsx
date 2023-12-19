import { Link } from '@remix-run/react';

export default function ButtonLogin() {
	return (
		<Link
			to="/login"
			className="h-full flex items-center text-[#000000b3] text-[16px]">
			Login
		</Link>
	);
}
