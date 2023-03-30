import { p as public_env } from './shared-server-fa63418b.js';

const load = async ({ fetch }) => {
  const res = await fetch(public_env.PUBLIC_DIR + "/api/index");
  const data = await res.json();
  return data;
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-41e83141.js')).default;
const file = '_app/immutable/entry/_page.svelte.30d55bb9.js';
const universal_id = "src/routes/+page.ts";
const imports = ["_app/immutable/entry/_page.svelte.30d55bb9.js","_app/immutable/chunks/index.77db86b9.js","_app/immutable/chunks/ErrorBox.2eda20ba.js","_app/immutable/entry/_page.ts.eadc762d.js","_app/immutable/chunks/public.4b55dbf8.js","_app/immutable/chunks/_page.54dc1e07.js"];
const stylesheets = ["_app/immutable/assets/_page.07d28126.css","_app/immutable/assets/ErrorBox.33a1df23.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=2-b61337bd.js.map
