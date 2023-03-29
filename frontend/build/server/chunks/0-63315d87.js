const config = {
  runtime: "edge",
  regions: "all"
};
const load = ({ url }) => {
  return {
    path: url.pathname
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
const imports = ["_app/immutable/entry/_layout.svelte.a9e06c05.js","_app/immutable/chunks/index.464477ab.js","_app/immutable/entry/_layout.ts.94ffd362.js","_app/immutable/chunks/_layout.95ae6679.js"];
const stylesheets = ["_app/immutable/assets/_layout.6007425a.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=0-63315d87.js.map
