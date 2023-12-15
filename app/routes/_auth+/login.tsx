import {
	DataFunctionArgs,
	json,
	redirect,
	type MetaFunction,
} from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { AuthenticityTokenInput } from 'remix-utils/csrf/react';

import Container from '~/components/container';
import Layout from '~/components/layout';
import IconArrowRight from '~/components/ui/icons/icon-arrow-right';
import { getCurrentUser, requireAnonymous } from '~/utils/auth.server';
import { sessionStorage } from '~/utils/session.server';

export const meta: MetaFunction = () => {
	return [
		{ title: 'CDL Online | Login' },
		{ name: 'description', content: 'Build CDL Online with Remix!' },
	];
};

export async function loader({ request }: DataFunctionArgs) {
	await requireAnonymous(request);
	return json({});
}

export async function action({ request }: DataFunctionArgs) {
	const formData = await request.formData();

	const url = `${process.env.CRAFT_ACTION_URL}/cdl/frontend/get-login-user-group`;

	const response = await fetch(url, {
		headers: {
			Accept: 'application/json',
		},
		method: 'POST',
		body: formData,
	});

	const data = await response.json();

	if (data.success) {
		const username = formData.get('loginName');
		const pw = formData.get('password');

		const { id } = await getCurrentUser({ username, pw });

		const session = await sessionStorage.getSession(
			request.headers.get('cookie')
		);

		session.set('userId', id);

		return redirect('/my-courses', {
			headers: {
				'Set-Cookie': await sessionStorage.commitSession(session),
			},
		});
	}

	return json(data);
}

export default function Login() {
	const actionData = useActionData<typeof action>();

	return (
		<Layout>
			<Container>
				<div className="flex items-center justify-center w-full h-full">
					<div className="relative mx-auto sm:w-[500px] md:w-full md:grid justify-center">
						<div className="w-full lg:w-[380px] bg-porcelain md:col-start-[2px] md:col-end-3 md:row-start-1 md:row-end-1">
							<img
								src="/img/backgrounds/vehicle-red.png"
								className="object-cover w-full h-[220px] md:h-full"
							/>
						</div>
						<div className="bg-white w-full md:w-[480px] p-[30px] shadow-2xl md:col-start-1 md:col-end-[2px] md:row-start-1 md:row-end-1">
							<h1 className="text-[32px] text-codgray font-normal mb-[10px]">
								Student Sign In
							</h1>
							<p className="text-[16px] text-[#333333b3] font-normal mb-[30px]">
								Login below to access your purchased courses.
							</p>
							<Form className="bg-white w-full" method="POST">
								<AuthenticityTokenInput name="CRAFT_CSRF_TOKEN" />
								<input
									type="hidden"
									name="loginType"
									value="student"
								/>
								<input
									type="hidden"
									name="action"
									value="users/login"
								/>
								<label
									className="cdlform-label block text-[12px] text-codgray font-normal mb-[32px]"
									htmlFor="title">
									Username or Email
									<input
										className="bg-[#00000008]  w-full h-[40px] px-[15px] focus:outline-none focus:shadow-none text-[16px] text-codgray font-normal mt-[10px]"
										type="text"
										name="loginName"
										placeholder="Enter your username or email"
										autoFocus={true}
										required={true}
										autoComplete="username"
									/>
								</label>

								<label
									className="cdlform-label block text-[12px] text-codgray font-normal mb-[32px]"
									htmlFor="title">
									Password
									<input
										className="bg-[#00000008] w-full h-[40px] px-[15px] focus:outline-none focus:shadow-none text-[16px] text-codgray font-normal mt-[10px]"
										type="password"
										name="password"
										placeholder="Enter your password"
										required={true}
										autoComplete="current-password"
									/>
								</label>

								<div className="flex justify-start mb-[25px]">
									<button
										className="login-button px-[22px] py-[10px] flex items-center justify-between focus:outline-none focus:shadow-none bg-[#0f62fe] text-white"
										type="submit">
										<span className="text-[14px] pr-[60px]">
											Sign In
										</span>
										<IconArrowRight />
									</button>
								</div>

								<div className="flex flex-wrap mb-[20px]">
									<label className="flex align-items-start items-center">
										<input
											name="rememberMe"
											type="checkbox"
											value="1"
										/>
										<i></i>
										<span className="px-[10px] mr-[10px] text-[14px]">
											Remember Me
										</span>
									</label>
									<a
										href="/forgot-password"
										className="text-[#0f62fe] text-[14px] hover:underline">
										Forgot Password?
									</a>
								</div>
							</Form>

							<div className="flex flex-wrap mb-[20px] text-[15px]">
								<p className="mr-[10px]">Business Account?</p>
								<a
									href="/login/business"
									className="text-[#0f62fe] hover:underline">
									Login here.
								</a>
							</div>

							{actionData?.error ? (
								<div className="bg-[#f4f4f4] text-[14px] text-[#e20e00] p-[10px]">
									<div className="inline-block">
										<p>Invalid username or password.</p>
									</div>
									<span className="login-link hidden">
										Try signing in as a
										<a
											href="/login/business"
											className="underline px-[2px]">
											Business Partner
										</a>{' '}
										instead.
									</span>
								</div>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</Container>
		</Layout>
	);
}
