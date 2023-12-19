import { Form } from '@remix-run/react';

export default function ButtonLogout() {
	return (
		<Form action="/logout" method="POST">
			<button
				type="submit"
				className="h-full flex items-center text-[#ffffffcc] text-[14px]">
				Logout
			</button>
		</Form>
	);
}
