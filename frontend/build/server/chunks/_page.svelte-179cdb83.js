import { c as create_ssr_component, f as each, v as validate_component, e as escape, b as add_attribute } from './index2-01390e42.js';

const css$1 = {
  code: ".gallery-image.svelte-1nbzolr{width:240px;height:240px;overflow:hidden;outline:1px solid #bbbbbb}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { filename } = $$props;
  let { alt } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0)
    $$bindings.filename(filename);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css$1);
  return `<div class="gallery-image svelte-1nbzolr"><a href="${"/gallery/" + escape(id, true)}"><img src="${"http://localhost:4200/uploads/" + escape(filename, true)}"${add_attribute("alt", alt, 0)}></a>
</div>`;
});
const css = {
  code: ".secondary-container.svelte-6peryp{width:80%;max-width:1510px;min-width:280px;margin:20px auto;box-shadow:0 2px 8px #333333}.gallery-header.svelte-6peryp{padding:10px;background-color:#5383d3;color:#ffffff}.gallery-container.svelte-6peryp{display:grid;grid-template-columns:repeat(auto-fit, 240px);grid-auto-rows:min-content;justify-content:center;width:100%;min-height:94%;padding:20px;background-color:#ffffff;gap:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let images = [];
  images = data.images;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="secondary-container svelte-6peryp"><h2 class="gallery-header svelte-6peryp"><i class="fa-solid fa-images"></i>
		Gallery
	</h2>
	<div class="gallery-container svelte-6peryp">${each(images, (image) => {
    return `${validate_component(Image, "Image").$$render(
      $$result,
      {
        id: image.uniqueId,
        filename: image.filename,
        alt: image.title
      },
      {},
      {}
    )}`;
  })}</div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-179cdb83.js.map
