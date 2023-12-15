import { Link, NavLink, useOutletContext } from '@remix-run/react';
import { cssActiveNavLink } from '~/utils/helpers';
import ButtonLogout from './button-logout';
import ButtonLogin from './button-login';

export default function NavbarPublic() {
	const { userId }: { userId: string | null } = useOutletContext();

	return (
		<header>
			<nav className="flex h-[60px] border-b border-opacity-30 border-black fixed top-0 w-full z-30 bg-white">
				<div className="container mx-auto px-[15px] md:px-0 flex items-center justify-between h-full">
					<div className="flex justify-center items-center h-full">
						<Link to="/" className="flex items-center">
							<img
								className="ml-[20px] lg:ml-0 lg:mr-[52px] w-[140px] lg:w-auto"
								src="/img/logo/cdl-logo.svg"
								alt="CDLOnline logo"
							/>
						</Link>
						<div className="hidden lg:grid grid-flow-col justify-end gap-[24px] xl:gap-[32px] h-full items-center">
							{userId ? (
								<NavLink
									to="/my-courses"
									className={({ isActive }) =>
										cssActiveNavLink(isActive)
									}>
									My Courses
								</NavLink>
							) : (
								''
							)}
							<NavLink
								to="/courses"
								className={({ isActive }) =>
									cssActiveNavLink(isActive)
								}>
								Browse Courses
							</NavLink>
							<NavLink
								to="/faq"
								className={({ isActive }) =>
									cssActiveNavLink(isActive)
								}>
								FAQ
							</NavLink>
							<NavLink
								to="/contact-us"
								className={({ isActive }) =>
									cssActiveNavLink(isActive)
								}>
								Contact Us
							</NavLink>
							<NavLink
								to="/business"
								className={({ isActive }) =>
									cssActiveNavLink(isActive)
								}>
								For Business
							</NavLink>
						</div>
					</div>
					<div>{!userId ? <ButtonLogin /> : <ButtonLogout />}</div>
				</div>
			</nav>
		</header>
	);
}
