import { D as DIR } from './config-326b0707.js';
import './shared-server-fa63418b.js';

const load = async ({ fetch }) => {
  const data = await fetch(DIR + "/api/index").then((res) => res.json());
  return data;
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-858593ed.js')).default;
const file = '_app/immutable/entry/_page.svelte.f646e0e7.js';
const universal_id = "src/routes/+page.ts";
const imports = ["_app/immutable/entry/_page.svelte.f646e0e7.js","_app/immutable/chunks/index.77db86b9.js","_app/immutable/chunks/ErrorBox.2eda20ba.js","_app/immutable/chunks/config.2ded4aa2.js","_app/immutable/entry/_page.ts.78eda8e6.js","_app/immutable/chunks/config.2ded4aa2.js","_app/immutable/chunks/_page.b0b63eec.js"];
const stylesheets = ["_app/immutable/assets/_page.07d28126.css","_app/immutable/assets/ErrorBox.33a1df23.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=2-907acfd8.js.map
