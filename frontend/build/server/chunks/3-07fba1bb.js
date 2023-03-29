import { p as public_env } from './shared-server-fa63418b.js';

const load = async ({ fetch }) => {
  const res = await fetch(public_env.PUBLIC_DIR + `/api/gallery`);
  const data = await res.json();
  return data;
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-179cdb83.js')).default;
const file = '_app/immutable/entry/gallery-page.svelte.ee5e6269.js';
const universal_id = "src/routes/gallery/+page.ts";
const imports = ["_app/immutable/entry/gallery-page.svelte.ee5e6269.js","_app/immutable/chunks/index.464477ab.js","_app/immutable/entry/gallery-page.ts.a18041cb.js","_app/immutable/chunks/public.8bedac22.js","_app/immutable/chunks/_page.291a4c62.js"];
const stylesheets = ["_app/immutable/assets/_page.d722fea9.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=3-07fba1bb.js.map
