import { r as redirect } from './index-1dce6fb5.js';
import { p as public_env } from './shared-server-fa63418b.js';

const load = async ({ fetch, params: { id } }) => {
  const data = await fetch(public_env.PUBLIC_DIR + `/api/gallery/${id}`).then((res) => res.json());
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
const component = async () => (await import('./_page.svelte-741de8a7.js')).default;
const file = '_app/immutable/entry/gallery-_id_-page.svelte.7a3dde85.js';
const universal_id = "src/routes/gallery/[id]/+page.ts";
const imports = ["_app/immutable/entry/gallery-_id_-page.svelte.7a3dde85.js","_app/immutable/chunks/index.77db86b9.js","_app/immutable/chunks/ErrorBox.2eda20ba.js","_app/immutable/entry/gallery-_id_-page.ts.3a00901e.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/public.4b55dbf8.js","_app/immutable/chunks/_page.6218260a.js"];
const stylesheets = ["_app/immutable/assets/_page.a386324e.css","_app/immutable/assets/ErrorBox.33a1df23.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-027b3c92.js.map
