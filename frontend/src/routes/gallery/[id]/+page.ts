import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { env } from '$env/dynamic/public';

export const load: PageLoad = async ({ fetch, params: { id } }) => {
	const data = await fetch(env.PUBLIC_DIR + `/api/gallery/${id}`)
		.then(res => res.json());

	if (data !== null) return data;
	else throw redirect(307, '/');
};
