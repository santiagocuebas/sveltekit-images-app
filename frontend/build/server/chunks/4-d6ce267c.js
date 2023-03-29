import { r as redirect } from './index-1dce6fb5.js';

const load = async ({ fetch, params: { id } }) => {
  const data = await fetch(`http://localhost:4200/api/gallery/${id}`).then((res) => res.json());
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
const component = async () => (await import('./_page.svelte-96ac2aef.js')).default;
const file = '_app/immutable/entry/gallery-_id_-page.svelte.a8520788.js';
const universal_id = "src/routes/gallery/[id]/+page.ts";
const imports = ["_app/immutable/entry/gallery-_id_-page.svelte.a8520788.js","_app/immutable/chunks/index.464477ab.js","_app/immutable/chunks/ErrorBox.450e1b91.js","_app/immutable/entry/gallery-_id_-page.ts.bcf9477f.js","_app/immutable/chunks/index.1de1fe79.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/_page.8490f38f.js"];
const stylesheets = ["_app/immutable/assets/_page.c9828c7b.css","_app/immutable/assets/ErrorBox.33a1df23.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-d6ce267c.js.map
