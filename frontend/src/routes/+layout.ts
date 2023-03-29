import type { LayoutLoad } from "./$types";
import { env } from '$env/dynamic/public';

export const config = {
  runtime: 'edge',
  regions: 'all'
}

export const load: LayoutLoad = ({ url }) => {
	return {
		path: url.pathname,
		dir: env.PUBLIC_DIR
	};
};
