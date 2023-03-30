import { p as public_env } from './shared-server-fa63418b.js';

const config = {
  runtime: "edge",
  regions: "all"
};
const load = ({ url }) => {
  return {
    path: url.pathname,
    dir: public_env.PUBLIC_DIR
  };
};

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  config: config,
  load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-398a8b23.js')).default;
const file = '_app/immutable/entry/_layout.svelte.77d30a4d.js';
const universal_id = "src/routes/+layout.ts";
const imports = ["_app/immutable/entry/_layout.svelte.77d30a4d.js","_app/immutable/chunks/index.77db86b9.js","_app/immutable/entry/_layout.ts.c7027e1b.js","_app/immutable/chunks/public.4b55dbf8.js","_app/immutable/chunks/_layout.8df59965.js"];
const stylesheets = ["_app/immutable/assets/_layout.61a7f142.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=0-849f5443.js.map
