import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { DIR } from '$lib/services/config.js';

export const load: PageLoad = async ({ fetch, params: { id } }) => {
	const data = await fetch(DIR + `/api/gallery/${id}`)
		.then(res => res.json());

	if (data !== null) return data;
	else throw redirect(307, '/');
};
