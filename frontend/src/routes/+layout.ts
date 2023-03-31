import type { LayoutLoad } from "./$types";

export const config = {
  runtime: 'edge',
  regions: 'all'
}

export const load: LayoutLoad = ({ url }) => {
	return {
		path: url.pathname
	};
};
