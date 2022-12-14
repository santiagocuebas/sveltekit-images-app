
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(`http://localhost:4200/api/gallery`);
  const data = await res.json();

  return data;
};
