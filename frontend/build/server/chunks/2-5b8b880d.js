const load = async ({ fetch }) => {
  const res = await fetch("http://localhost:4200/api/index");
  const data = await res.json();
  return data;
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-7b954d6e.js')).default;
const file = '_app/immutable/entry/_page.svelte.1ebaf149.js';
const universal_id = "src/routes/+page.ts";
const imports = ["_app/immutable/entry/_page.svelte.1ebaf149.js","_app/immutable/chunks/index.464477ab.js","_app/immutable/chunks/ErrorBox.450e1b91.js","_app/immutable/entry/_page.ts.489aab32.js","_app/immutable/chunks/_page.6c3fb6b9.js"];
const stylesheets = ["_app/immutable/assets/_page.7df68eea.css","_app/immutable/assets/ErrorBox.33a1df23.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=2-5b8b880d.js.map
