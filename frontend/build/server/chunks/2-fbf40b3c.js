import { p as public_env } from './shared-server-fa63418b.js';

const load = async ({ fetch }) => {
  console.log(public_env.PUBLIC_DIR);
  const res = await fetch(public_env.PUBLIC_DIR + "/api/index");
  const data = await res.json();
  return data;
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-ee00084c.js')).default;
const file = '_app/immutable/entry/_page.svelte.75bf3de7.js';
const universal_id = "src/routes/+page.ts";
const imports = ["_app/immutable/entry/_page.svelte.75bf3de7.js","_app/immutable/chunks/index.464477ab.js","_app/immutable/chunks/ErrorBox.450e1b91.js","_app/immutable/entry/_page.ts.4126d2aa.js","_app/immutable/chunks/public.3a935d9b.js","_app/immutable/chunks/_page.d088545f.js"];
const stylesheets = ["_app/immutable/assets/_page.7df68eea.css","_app/immutable/assets/ErrorBox.33a1df23.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=2-fbf40b3c.js.map
