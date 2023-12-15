import { createCookieSessionStorage } from '@remix-run/node';

export const sessionKey = 'userId';

export const sessionStorage = createCookieSessionStorage({
	cookie: {
		name: 'cdlremix_session',
		// domain: 'http://cdl-training.cs/',
		sameSite: 'none',
		path: '/',
		httpOnly: true,
		maxAge: 60 * 60, // 60 minutes (1 hour)
		secrets: process.env.SECURITY_KEY.split(','),
		secure: true,
	},
});

// we have to do this because every time you commit the session you overwrite it
// so we store the expiration time in the cookie and reset it every time we commit
const originalCommitSession = sessionStorage.commitSession;

Object.defineProperty(sessionStorage, 'commitSession', {
	value: async function commitSession(
		...args: Parameters<typeof originalCommitSession>
	) {
		const [session, options] = args;
		if (options?.expires) {
			session.set('expires', options.expires);
		}
		if (options?.maxAge) {
			session.set(
				'expires',
				new Date(Date.now() + options.maxAge * 1000)
			);
		}
		const expires = session.has('expires')
			? new Date(session.get('expires'))
			: undefined;
		const setCookieHeader = await originalCommitSession(session, {
			...options,
			expires,
		});
		return setCookieHeader;
	},
});
