import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape, d as null_to_empty } from './index2-df9c59bd.js';

const css$3 = {
  code: "nav.svelte-1m2868a{display:flex;position:fixed;align-items:center;width:100%;min-width:530px;padding:10px 20px;top:0;background-color:#5383d3;z-index:200}a.svelte-1m2868a{width:160px;height:40px}img.svelte-1m2868a{width:100%;height:100%}div.svelte-1m2868a{display:flex;margin-left:auto;gap:5px}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="svelte-1m2868a"><a href="/" class="svelte-1m2868a"><img src="/imgshare-logo.png" alt="Logo" class="svelte-1m2868a"></a>
	<div class="svelte-1m2868a">${slots.default ? slots.default({}) : ``}</div>
</nav>`;
});
const css$2 = {
  code: "footer.svelte-17fvhvg{position:fixed;width:100%;min-width:530px;padding:5px 20px;bottom:0;background-color:#5383d3;z-index:200}div.svelte-17fvhvg{display:flex;justify-content:center;align-items:center;font-size:18px;color:#ffffff;gap:10px}a.svelte-17fvhvg{font-size:32px;color:#ffffff}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-17fvhvg">${``}
</footer>`;
});
const css$1 = {
  code: "a.svelte-14d9b8r{display:flex;align-items:center;height:40px;margin-left:auto;padding:0 24px;border-radius:8px;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer}.green.svelte-14d9b8r{background-color:#3ac614}.green.svelte-14d9b8r:hover{background-color:#3ad614}.violet.svelte-14d9b8r{background-color:#b114c6}.violet.svelte-14d9b8r:hover{background-color:#c114c6}",
  map: null
};
const ButtonNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { color } = $$props;
  let { href } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", href, 0)} class="${escape(null_to_empty(color), true) + " svelte-14d9b8r"}">${escape(text)}
</a>`;
});
const css = {
  code: "*{box-sizing:border-box;padding:0;margin:0;font-family:'Quicksand', 'Times New Roman', Times, serif\r\n	}body{padding-top:65px;padding-bottom:10px}h1, h2, h3, h4, h5, h6{margin:0;padding:0}a{color:#000000;text-decoration:none}textarea{resize:none}.main-container{display:grid;grid-auto-rows:min-content;justify-items:center;width:100%;min-height:calc(100vh - 75px);padding:20px 0;background-color:#f0f4f8;row-gap:20px}.general-header{padding:10px;background-color:#5383d3;font-size:32px;color:#ffffff}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {
    default: () => {
      return `${data.path !== "/gallery" ? `${validate_component(ButtonNav, "Button").$$render(
        $$result,
        {
          text: "Gallery",
          color: "green",
          href: "/gallery"
        },
        {},
        {}
      )}` : ``}
	${data.path !== "/" ? `${validate_component(ButtonNav, "Button").$$render(
        $$result,
        {
          text: "Upload",
          color: "violet",
          href: "/"
        },
        {},
        {}
      )}` : ``}`;
    }
  })}
<div class="main-container">${slots.default ? slots.default({}) : ``}</div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-398a8b23.js.map
