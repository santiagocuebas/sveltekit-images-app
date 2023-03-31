import { c as create_ssr_component, h as each, v as validate_component, e as escape, b as add_attribute } from './index2-df9c59bd.js';
import { D as DIR } from './config-326b0707.js';
import './shared-server-fa63418b.js';

const css$1 = {
  code: "a.svelte-1kyodko{width:240px;height:240px;box-shadow:0 0 3px #000000}img.svelte-1kyodko{width:100%;height:100%;object-fit:cover;object-position:center}",
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
  return `<a href="${"/gallery/" + escape(id, true)}" class="svelte-1kyodko"><img src="${escape(DIR, true) + "/uploads/" + escape(filename, true)}"${add_attribute("alt", alt, 0)} class="svelte-1kyodko">
</a>`;
});
const css = {
  code: ".gallery-container.svelte-8ww7.svelte-8ww7{width:90%;max-width:1530px;min-width:530px;min-height:830px;background-color:#ffffff;box-shadow:0 2px 8px #333333}h2.svelte-8ww7.svelte-8ww7{padding:13px;background-color:#5383d3;font-size:21px;color:#ffffff}.gallery-container.svelte-8ww7 div.svelte-8ww7{display:grid;grid-template-columns:repeat(auto-fit, 240px);grid-auto-rows:min-content;justify-content:center;width:100%;min-height:min-content;padding:20px;gap:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="gallery-container svelte-8ww7"><h2 class="svelte-8ww7"><i class="fa-solid fa-images"></i>
		Gallery
	</h2>
	<div class="svelte-8ww7">${each(data.images, (image) => {
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
//# sourceMappingURL=_page.svelte-6aea110b.js.map
