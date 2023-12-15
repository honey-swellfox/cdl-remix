import { DataFunctionArgs, json } from '@remix-run/node';

export async function loader({ request }: DataFunctionArgs) {
	// console.log({ request });

	const response = await fetch(
		'http://cdl-training.cs/actions/cdl/users/get-session',
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				// 'Content-Type': 'application/json',
				// 'X-Requested-With': 'XMLHttpRequest',
			},
			// method: 'POST',
			// body: formData,
			// body: JSON.stringify(params),
		}
	);

	const data = await response.json();

	return json(data);

	// return new Response(
	// 	'Resource routes are for actions you made with the server (ex. downloading user certificates.)'
	// );
}
