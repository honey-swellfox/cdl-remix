import { DataFunctionArgs, json } from '@remix-run/node';
import { Link } from '@remix-run/react';
import Container from '~/components/container';
import Layout from '~/components/layout';
import IconArrowRight from '~/components/ui/icons/icon-arrow-right';
import IconSeat from '~/components/ui/icons/icon-seat';
import IconUserOutline from '~/components/ui/icons/icon-user-outline';
import { requireLogin } from '~/utils/auth.server';

export async function loader({ request }: DataFunctionArgs) {
	await requireLogin(request);

	return json({});
}

export default function BusinessPortalRoute() {
	return (
		<Layout>
			<div className="h-[185px] border-b border-opacity-30 border-black">
				<div className="flex items-center justify-center w-full h-full">
					<h1>Manage Courses</h1>
				</div>
			</div>
			<Container>
				<div className="py-[50px]">
					<div className="shadow-2xl grid">
						<div className="relative overflow-hidden md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-1 w-[380px]">
							<img
								src="https://d1q7zo9dguawuf.cloudfront.net/courses/thumbnails/hazmat-endorsement.jpg"
								alt="Hazmat endorsement course"
								className="object-center absolute top-0 left-0 w-full h-full object-cover z-0"
							/>
						</div>
						<div className="bg-white md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1 grid mine-content grid-col-1">
							<div className="p-[15px] sm:p-[30px]">
								<Link
									to="hazmat-endorsement"
									className="text-mineshaft inline-block text-[20px] font-medium leading-snug mb-[10px]">
									Hazmat Driver Training - ELDT Approved
									Theory - Hazmat Course
								</Link>
								<div className="flex items-center pt-[50px]">
									<Link
										to="hazmat-endorsement"
										className="bg-[#0f62fe] hover:bg-[#0353E9] text-[14px] text-white font-light py-[10px] px-[15px] sm:px-[23px] mr-[20px] transition-colors duration-300 flex items-center">
										<span className="mr-[35px]">
											Manage Students
										</span>
										<IconArrowRight />
									</Link>
									<a
										className="text-[#0f62fe] inline-block text-[14px] hover:underline"
										href="/courses/overview/hazmat-endorsement">
										<span className="flex-shrink-0">
											Preview Course
										</span>
									</a>
								</div>
							</div>
							<div className="flex justify-start items-center px-[15px] sm:px-[30px] border-t border-[#dfe3e6] flex-wrap py-[10px]">
								<div className="text-[#697077] text-[12px] flex items-center mr-[24px]">
									<IconUserOutline />
									<span className="ml-[5px] font-medium">
										8
									</span>
									<span className="ml-[3px]">Registered</span>
								</div>
								<div className="text-[12px] flex items-center mr-[24px] text-[#697077]">
									<IconSeat />
									<span className="ml-[5px] font-medium">
										6
									</span>
									<span className="ml-[3px]">
										Unused Seats (1 Pending Invite)
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Layout>
	);
}
