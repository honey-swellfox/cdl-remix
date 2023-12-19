import { redirect } from '@remix-run/node';
import { sessionUserIdKey, authSessionStorage } from './session.server';
import { safeRedirect } from 'remix-utils/safe-redirect';
import { combineHeaders } from './misc';
import { fetchFromGraphQL } from './graphql.server';
import { USER_QUERY } from './graphql.queries';

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
	const session = await authSessionStorage.getSession(
		request.headers.get('Cookie')
	);

	return session.get(sessionUserIdKey);
}

export async function getCurrentUser(id: string | number | undefined) {
	if (!id) {
		return null;
	}

	const response = await fetchFromGraphQL(USER_QUERY, {
		id,
	});

	const { data } = await response.json();

	return data.user;
}

export async function getUserSession({
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
	const session = await authSessionStorage.getSession(
		request.headers.get('Cookie')
	);

	return redirect('/login', {
		headers: {
			'Set-Cookie': await authSessionStorage.destroySession(session),
		},
	});
}
