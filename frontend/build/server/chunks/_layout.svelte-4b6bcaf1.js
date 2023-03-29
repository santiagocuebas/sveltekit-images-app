import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from './index2-01390e42.js';

const css$3 = {
  code: ".nav-container.svelte-8foics{display:flex;position:fixed;align-items:center;width:100%;min-width:510px;padding:10px 20px;top:0;background-color:#5383d3;z-index:200}.nav-buttons.svelte-8foics{width:max-content;height:min-content;margin-left:auto}.nav-logo.svelte-8foics{width:192px;height:42px}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="nav-container svelte-8foics"><a href="/"><img class="nav-logo svelte-8foics" src="/imgshare-logo.png" alt="Logo"></a>
  <nav class="nav-buttons svelte-8foics">${slots.default ? slots.default({}) : ``}</nav>
</nav>`;
});
const css$2 = {
  code: ".footer-container.svelte-1ocjypx{position:fixed;width:100%;padding:5px 20px;bottom:0;background-color:#5383d3;z-index:200}.footer-content.svelte-1ocjypx{padding:5px 0;text-align:center;font-size:18px;color:#ffffff}.footer-url.svelte-1ocjypx{display:inline-block;width:min-content;margin-top:5px;font-size:32px;color:#ffffff}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="footer-container svelte-1ocjypx">${``}
</footer>`;
});
const css$1 = {
  code: ".nav-button.svelte-ei3z7l{margin-left:auto;padding:8px 24px;border-radius:8px;font-size:20px;font-weight:600;color:#ffffff;cursor:pointer}.nav-button-green.svelte-ei3z7l{background-color:#3ac614}.nav-button-green.svelte-ei3z7l:hover{background-color:#3ad614}.nav-button-violet.svelte-ei3z7l{background-color:#b114c6}.nav-button-violet.svelte-ei3z7l:hover{background-color:#c114c6}",
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
  return `<a${add_attribute("href", href, 0)} class="${"nav-button nav-button-" + escape(color, true) + " svelte-ei3z7l"}">${escape(text)}
</a>`;
});
const css = {
  code: "*{box-sizing:border-box;padding:0;margin:0;font-family:'Quicksand', 'Times New Roman', Times, serif\r\n  }body{padding-top:65px;padding-bottom:10px}h1, h2, h3, h4, h5, h6{margin:0;padding:0}a{color:#000000;text-decoration:none}textarea{resize:none}.main-container{display:grid;width:100%;min-height:calc(100vh - 75px);background-color:#f0f4f8}.general-header{padding:10px 0;background-color:#5383d3}",
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
//# sourceMappingURL=_layout.svelte-4b6bcaf1.js.map
