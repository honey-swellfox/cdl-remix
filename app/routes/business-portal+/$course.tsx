import { DataFunctionArgs, json } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import ButtonPreviousPage from '~/components/button-previous-page';
import Container from '~/components/container';
import Layout from '~/components/layout';
import IconSeat from '~/components/ui/icons/icon-seat';
import IconUserOutline from '~/components/ui/icons/icon-user-outline';
import IconUsers from '~/components/ui/icons/icon-users';
import { requireLogin } from '~/utils/auth.server';

export async function loader({ request }: DataFunctionArgs) {
	await requireLogin(request);

	return json({});
}

export default function ManageCourseRoute() {
	return (
		<Layout>
			<Container>
				<ButtonPreviousPage
					title="Manage Courses"
					url="/business-portal"
				/>

				<h1 className="text-[28px] md:text-[32px]">
					Hazmat Driver Training - ELDT Approved Theory - Hazmat
					Course
				</h1>

				<div className="flex justify-between flex-wrap">
					<div className="flex justify-start items-center flex-wrap">
						<div className="text-[#697077] text-[14px] flex items-center mr-[10px] border-rx my-[10px]">
							<IconUserOutline />
							<span className="ml-[7px]">
								8 Registered Students
							</span>
						</div>
						<span className="mr-[10px] border-r border-[#dfe3e6] h-[22px]"></span>
						<div className="text-[14px] flex items-center mr-[10px] border-rx my-[10px] text-[#697077]">
							<IconSeat />
							<span className="ml-[7px]">
								6 Unused Seats (1 Pending Invite)
							</span>
						</div>
						<span className="mr-[10px] border-r border-[#dfe3e6] h-[22px]"></span>
						<button className="text-[#0f62fe] text-[14px] my-[10px] pr-[10px] mr-[10px] border-rx hover:underline">
							<IconUsers />
							Bulk Purchase Seats
						</button>
					</div>
				</div>
				<Outlet />
			</Container>
		</Layout>
	);
}
