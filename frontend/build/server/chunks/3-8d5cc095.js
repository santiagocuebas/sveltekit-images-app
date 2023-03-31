import { D as DIR } from './config-326b0707.js';
import './shared-server-fa63418b.js';

const load = async ({ fetch }) => {
  const data = await fetch(DIR + `/api/gallery`).then((res) => res.json());
  return data;
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-6aea110b.js')).default;
const file = '_app/immutable/entry/gallery-page.svelte.11a7be5b.js';
const universal_id = "src/routes/gallery/+page.ts";
const imports = ["_app/immutable/entry/gallery-page.svelte.11a7be5b.js","_app/immutable/chunks/index.77db86b9.js","_app/immutable/chunks/config.2ded4aa2.js","_app/immutable/entry/gallery-page.ts.7b46a9f2.js","_app/immutable/chunks/config.2ded4aa2.js","_app/immutable/chunks/_page.9f7e71f4.js"];
const stylesheets = ["_app/immutable/assets/_page.c4276964.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=3-8d5cc095.js.map
