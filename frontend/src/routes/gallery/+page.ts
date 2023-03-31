import type { PageLoad } from './$types';
import { DIR } from '$lib/services/config.js';

export const load: PageLoad = async ({ fetch }) => {
  const data = await fetch(DIR + `/api/gallery`)
    .then(res => res.json());

  return data;
};
