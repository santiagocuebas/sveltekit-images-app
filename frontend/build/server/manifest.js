const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","imgshare-logo.png","normalize.css","objetive.png"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ca731f83.js","imports":["_app/immutable/entry/start.ca731f83.js","_app/immutable/chunks/index.77db86b9.js","_app/immutable/chunks/singletons.b17132a8.js","_app/immutable/chunks/control.e7f5239e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6f949601.js","imports":["_app/immutable/entry/app.6f949601.js","_app/immutable/chunks/index.77db86b9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-8b1b8f98.js'),
			() => import('./chunks/1-5f408023.js'),
			() => import('./chunks/2-907acfd8.js'),
			() => import('./chunks/3-8d5cc095.js'),
			() => import('./chunks/4-8014ddbc.js'),
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
