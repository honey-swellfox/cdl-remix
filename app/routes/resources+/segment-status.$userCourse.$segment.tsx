import { json } from '@remix-run/node';
import { getCraftCsrfToken } from '~/utils/auth.server';
import { csrfTokenKey } from '~/utils/csrf.server';

export async function loader({ params }: { params: any }) {
	const csrf = await getCraftCsrfToken();

	let formData = new FormData();
	formData.append('userCourseId', params.userCourse);
	formData.append('segmentId', params.segment);
	formData.append(csrfTokenKey, csrf.csrfTokenValue);

	const response = await fetch(
		'http://cdl-training.cs/actions/cdl/users/check-segment-status',
		{
			headers: {
				Accept: 'application/json',
			},
			method: 'POST',
			body: formData,
		}
	);

	return json(await response.json());
}
