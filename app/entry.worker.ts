import * as Sentry from '@sentry/browser';

Sentry.init({
	dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
});

self.onmessage = (message) => {
	// This message will be captured
	Sentry.captureMessage('Message received');

	// This error will also be captured.
	throw new Error();
};
