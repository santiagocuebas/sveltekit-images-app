import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params: { id } }) => {
	const data = await fetch(`http://localhost:4200/api/gallery/${id}`)
		.then(res => res.json());

	if (data !== null) return data;
	else throw redirect(307, '/');
};