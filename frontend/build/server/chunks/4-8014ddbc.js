import { r as redirect } from './index-1dce6fb5.js';
import { D as DIR } from './config-326b0707.js';
import './shared-server-fa63418b.js';

const load = async ({ fetch, params: { id } }) => {
  const data = await fetch(DIR + `/api/gallery/${id}`).then((res) => res.json());
  if (data !== null)
    return data;
  else
    throw redirect(307, "/");
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-71075463.js')).default;
const file = '_app/immutable/entry/gallery-_id_-page.svelte.7a6210aa.js';
const universal_id = "src/routes/gallery/[id]/+page.ts";
const imports = ["_app/immutable/entry/gallery-_id_-page.svelte.7a6210aa.js","_app/immutable/chunks/index.77db86b9.js","_app/immutable/chunks/ErrorBox.2eda20ba.js","_app/immutable/chunks/config.2ded4aa2.js","_app/immutable/entry/gallery-_id_-page.ts.fd1ae518.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/config.2ded4aa2.js","_app/immutable/chunks/_page.e0381267.js"];
const stylesheets = ["_app/immutable/assets/_page.f3f24bd9.css","_app/immutable/assets/ErrorBox.33a1df23.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-8014ddbc.js.map
