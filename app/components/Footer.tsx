import { Link } from '@remix-run/react';

export default function Footer() {
	return (
		<footer className="bg-codgray flex items-center h-[125px]">
			<div className="container mx-auto px-[15px] md:px-0 grid grid-cols-1 lg:grid-cols-2 justify-between">
				<div className="lg:col-start-2 lg:col-span-1 lg:row-span-2 mb-[20px] lg:mb-0">
					<div className="flex lg:justify-end h-full">
						<div className="flex justify-between items-center w-[185px] mx-auto lg:mx-0">
							<Link
								to="/courses"
								className="text-white text-[14px] hover:underline font-light">
								Browse Courses
							</Link>
							<Link
								to="/contact-us"
								className="text-white text-[14px] hover:underline font-light">
								Contact Us
							</Link>
						</div>
					</div>
				</div>
				<div className="lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1 mx-auto lg:mx-0 mb-[25px] lg:mb-0">
					<Link to="/">
						<span className="text-[31px] font-semibold text-white">
							CDL
						</span>
						<span className="text-[31px] uppercase font-light text-white opacity-70">
							Online
						</span>
					</Link>
				</div>

				<p className="text-[12px] text-white opacity-70 lg:mt-[10px] text-center lg:text-left">
					Copyright © 2023, CDL Online. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
