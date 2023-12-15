import { useOutletContext } from '@remix-run/react';
import NavbarPublic from './navbar-public';
import NavbarUser from './navbar-user';

export default function Navbar() {
	const { userId }: { userId: string | null } = useOutletContext();

	if (!userId) return <NavbarPublic />;

	return <NavbarUser />;
}
