import { DataFunctionArgs, json } from '@remix-run/node';
import { NavLink, Outlet, useLocation } from '@remix-run/react';

import Container from '~/components/container';
import Layout from '~/components/layout';
import { requireLogin } from '~/utils/auth.server';

// Important Notes:
// underscore `_` on the file/folder means that the child routes are not nested
// (meaning, is not shown within the parent rout)

const cssActiveLink = (active: Boolean) => {
	return `text-[16px] text-[#161616] text-left py-[18px] relative flex items-center ${
		active ? 'border-b-2 border-[#0F62FE] mb-[-2px] font-medium' : ''
	}`;
};

export const loader = async ({ request }: DataFunctionArgs) => {
	await requireLogin(request);

	return json({});
};

export default function MyAccount() {
	const { pathname } = useLocation();

	return (
		<Layout>
			<Container>
				<h1 className="text-[32px] text-mineshaft text-left font-medium mb-[15px]">
					My Account
				</h1>
				<div className="flex gap-[10px] md:gap-[40px] border-b-2 border-alto">
					<NavLink
						to="edit"
						className={({ isActive }) =>
							cssActiveLink(isActive || pathname == '/my-account')
						}>
						Edit Account
					</NavLink>
					<NavLink
						to="password"
						className={({ isActive }) => cssActiveLink(isActive)}>
						Password
					</NavLink>
					<NavLink
						to="certifications"
						className={({ isActive }) => cssActiveLink(isActive)}>
						Certifications
					</NavLink>
					<NavLink
						to="invoices"
						className={({ isActive }) => cssActiveLink(isActive)}>
						Invoices
					</NavLink>
				</div>
				<div className="py-[50px]">
					<Outlet />
				</div>
			</Container>
		</Layout>
	);
}
