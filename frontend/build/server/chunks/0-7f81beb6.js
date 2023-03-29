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
const component = async () => (await import('./_layout.svelte-4b6bcaf1.js')).default;
const file = '_app/immutable/entry/_layout.svelte.a9e06c05.js';
const universal_id = "src/routes/+layout.ts";
const imports = ["_app/immutable/entry/_layout.svelte.a9e06c05.js","_app/immutable/chunks/index.464477ab.js","_app/immutable/entry/_layout.ts.ba33fc8f.js","_app/immutable/chunks/public.3a935d9b.js","_app/immutable/chunks/_layout.3343b98b.js"];
const stylesheets = ["_app/immutable/assets/_layout.6007425a.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=0-7f81beb6.js.map
