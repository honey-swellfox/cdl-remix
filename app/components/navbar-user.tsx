import { Link, NavLink, useOutletContext } from '@remix-run/react';

import { cssActiveNavLink } from '~/utils/helpers';
import ButtonLogout from './button-logout';

export default function NavbarUser() {
	const { userId, user }: { userId: string | null; user: any } =
		useOutletContext();

	console.log({ user });

	return (
		<header>
			<nav className="flex h-[48px] border-b border-opacity-30 border-black fixed top-0 w-full z-30 bg-[#161616]">
				<div className="container mx-auto px-[15px] md:px-0 flex items-center justify-between h-full">
					<div className="flex justify-center items-center h-full">
						{userId ? (
							<div className="flex items-center mr-[52px]">
								<button className="flex items-center focus:outline-none text-white lg:hidden">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 25 16"
										className="fill-current w-[25px] h-[16px]">
										<path d="M0 0v1h25V0H0zm0 7.5v1h25v-1H0zM0 15v1h25v-1H0z"></path>
									</svg>
								</button>
								<a href="/">
									<span className="text-[18px] font-semibold text-white ml-[20px] lg:ml-0">
										CDL
									</span>
									<span className="text-[18px] uppercase font-light text-[#ffffffb3]">
										Online
									</span>
								</a>
							</div>
						) : (
							<Link to="/" className="flex items-center">
								<img
									className="ml-[20px] lg:ml-0 lg:mr-[52px] w-[140px] lg:w-auto"
									src="/img/logo/cdl-logo.svg"
									alt="CDLOnline logo"
								/>
							</Link>
						)}
						<div className="hidden lg:grid grid-flow-col justify-end gap-[24px] xl:gap-[32px] h-full items-center">
							{userId ? (
								<NavLink
									to="/my-courses"
									className={({ isActive }) =>
										cssActiveNavLink(isActive, false)
									}>
									My Courses
								</NavLink>
							) : (
								''
							)}
							<NavLink
								to="/courses"
								className={({ isActive }) =>
									cssActiveNavLink(isActive, false)
								}>
								Browse Courses
							</NavLink>
							<NavLink
								to="/business-portal"
								className={({ isActive }) =>
									cssActiveNavLink(isActive, false)
								}>
								Business Portal
							</NavLink>
							<NavLink
								to="/my-account"
								className={({ isActive }) =>
									cssActiveNavLink(isActive, false)
								}>
								My Account
							</NavLink>
						</div>
					</div>
					<div className="flex items-center">
						<span className="text-[#f4f4f4] text-[14px] mr-[15px]">
							{user.fullName}
						</span>
						<ButtonLogout />
					</div>
				</div>
			</nav>
		</header>
	);
}
