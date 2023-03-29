const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","imgshare-logo.png","normalize.css","objetive.png"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.5dd53723.js","imports":["_app/immutable/entry/start.5dd53723.js","_app/immutable/chunks/index.464477ab.js","_app/immutable/chunks/singletons.c10d27c9.js","_app/immutable/chunks/control.e7f5239e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.7d0dfede.js","imports":["_app/immutable/entry/app.7d0dfede.js","_app/immutable/chunks/index.464477ab.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-9ab3c091.js'),
			() => import('./chunks/1-473ab27d.js'),
			() => import('./chunks/2-c6dbe90b.js'),
			() => import('./chunks/3-07fba1bb.js'),
			() => import('./chunks/4-53b8337c.js'),
			() => import('./chunks/5-c17bd8f8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/gallery/[id]",
				pattern: /^\/gallery\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[...path]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
