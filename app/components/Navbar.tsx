import { Link, NavLink } from '@remix-run/react';
import { cssActiveNavLink } from '~/utils/helpers';

export default function Navbar() {
	return (
		<header>
			<nav className="flex h-[60px] border-b border-opacity-30 border-black">
				<div className="container container mx-auto px-[15px] md:px-0 flex items-center justify-between h-full">
					<div className="flex justify-center items-center h-full">
						<Link to="/" className="flex items-center">
							<img
								className="ml-[20px] lg:ml-0 lg:mr-[52px] w-[140px] lg:w-auto"
								src="/img/logo/cdl-logo.svg"
								alt="CDLOnline logo"
							/>
						</Link>
						<div className="hidden lg:grid grid-flow-col justify-end gap-[24px] xl:gap-[32px] h-full items-center">
							<NavLink
								to="/courses"
								className={({ isActive }) =>
									cssActiveNavLink(isActive)
								}>
								Browse Courses
							</NavLink>
							<NavLink
								to="contact-us"
								className={({ isActive }) =>
									cssActiveNavLink(isActive)
								}>
								Contact Us
							</NavLink>
							<NavLink
								to="faq"
								className={({ isActive }) =>
									cssActiveNavLink(isActive)
								}>
								FAQ
							</NavLink>
							<NavLink
								to="my-account"
								className={({ isActive }) =>
									cssActiveNavLink(isActive)
								}>
								My Account
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
