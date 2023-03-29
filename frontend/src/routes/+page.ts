import type { PageLoad } from './$types';
import { env } from '$env/dynamic/public';

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(env.PUBLIC_DIR + '/api/index');
  const data = await res.json();

  return data;
};
