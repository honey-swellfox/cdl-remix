import { redirect } from '@remix-run/node';
import { sessionKey, sessionStorage } from './session.server';
import { safeRedirect } from 'remix-utils/safe-redirect';
import { combineHeaders } from './misc';

export const actionUrl = process.env.CRAFT_ACTION_URL;

export async function requireAnonymous(request: Request) {
	const userId = await getUserId(request);
	if (userId) {
		throw redirect('/my-courses');
	}
}

export async function requireLogin(request: Request) {
	const userId = await getUserId(request);

	if (!userId) {
		throw redirect('/login');
	}

	return userId;
}

export async function getUserId(request: Request) {
	const session = await sessionStorage.getSession(
		request.headers.get('Cookie')
	);

	return session.get(sessionKey);
}

export async function getCurrentUser({
	username,
	pw,
}: {
	username: any;
	pw: any;
}) {
	const response = await fetch(`${actionUrl}/users/session-info`, {
		headers: {
			Accept: 'application/json',
			Authorization: `Basic ${btoa(`${username}:${pw}`)}`,
			'Content-Type': 'application/json',
		},
		credentials: 'include',
	});

	return await response.json();
}

// export async function login(formData: FormData) {
// 	checkEnv();

// 	const response = await fetch(
// 		`http://cdl-training.cs/actions/cdl/frontend/get-login-user-group`,
// 		{
// 			headers: {
// 				Accept: 'application/json',
// 			},
// 			method: 'POST',
// 			body: formData,
// 		}
// 	);

// 	return await response.json();
// }

export function checkEnv() {
	if (!process.env.CRAFT_ACTION_URL) {
		throw new Error('CRAFT_ACTION_URL is required');
	}
}

export async function getUserSession() {
	checkEnv();

	const response = await fetch(
		`${process.env.CRAFT_ACTION_URL}/users/session-info`,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		}
	);

	return await response.json();
}

export async function getCraftCsrfToken() {
	const response = await fetch(
		'http://cdl-training.cs/actions/cdl/users/get-session',
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		}
	);

	return await response.json();
}

export async function logout({ request }: { request: Request }) {
	const session = await sessionStorage.getSession(
		request.headers.get('Cookie')
	);

	return redirect('/login', {
		headers: {
			'Set-Cookie': await sessionStorage.destroySession(session),
		},
	});
}
