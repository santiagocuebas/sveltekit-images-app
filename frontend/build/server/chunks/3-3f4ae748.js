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
const component = async () => (await import('./_page.svelte-a40102dd.js')).default;
const file = '_app/immutable/entry/gallery-page.svelte.5125bcae.js';
const universal_id = "src/routes/gallery/+page.ts";
const imports = ["_app/immutable/entry/gallery-page.svelte.5125bcae.js","_app/immutable/chunks/index.77db86b9.js","_app/immutable/entry/gallery-page.ts.581f0700.js","_app/immutable/chunks/public.4b55dbf8.js","_app/immutable/chunks/_page.a34c03ac.js"];
const stylesheets = ["_app/immutable/assets/_page.c4276964.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=3-3f4ae748.js.map
