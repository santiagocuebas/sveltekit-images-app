import { c as create_ssr_component, f as each, e as escape } from './index2-01390e42.js';

var Dates = /* @__PURE__ */ ((Dates2) => {
  Dates2[Dates2["SECOND"] = 1e3] = "SECOND";
  Dates2[Dates2["MINUTE"] = 6e4] = "MINUTE";
  Dates2[Dates2["HOUR"] = 36e5] = "HOUR";
  Dates2[Dates2["DAY"] = 864e5] = "DAY";
  Dates2[Dates2["WEEK"] = 6048e5] = "WEEK";
  Dates2[Dates2["MONTH"] = 24192e5] = "MONTH";
  Dates2[Dates2["YEAR"] = 31536e6] = "YEAR";
  return Dates2;
})(Dates || {});
const timeago = (date) => {
  const oldDate = new Date(date);
  const actDate = /* @__PURE__ */ new Date();
  const difference = actDate.getTime() - oldDate.getTime();
  if (difference < Dates.MINUTE) {
    return "just now";
  } else if (difference < Dates.HOUR) {
    const number = Math.trunc(difference / Dates.MINUTE);
    if (number > 1) {
      return `${number} minutes ago`;
    } else {
      return `${number} minute ago`;
    }
  } else if (difference < Dates.DAY) {
    const number = Math.trunc(difference / Dates.HOUR);
    if (number > 1) {
      return `${number} hours ago`;
    } else {
      return `${number} hour ago`;
    }
  } else if (difference < Dates.WEEK) {
    const number = Math.trunc(difference / Dates.DAY);
    if (number > 1) {
      return `${number} days ago`;
    } else {
      return `${number} day ago`;
    }
  } else if (difference < Dates.MONTH) {
    const number = Math.trunc(difference / Dates.WEEK);
    if (number > 1) {
      return `${number} weeks ago`;
    } else {
      return `${number} week ago`;
    }
  } else if (difference < Dates.YEAR) {
    const number = Math.trunc(difference / Dates.MONTH);
    if (number > 1) {
      return `${number} months ago`;
    } else {
      return `${number} month ago`;
    }
  } else {
    const number = Math.trunc(difference / Dates.YEAR);
    if (number > 1) {
      return `${number} years ago`;
    } else {
      return `${number} year ago`;
    }
  }
};
const css = {
  code: ".error-container.svelte-1hwbcik{display:flex;align-items:center;width:100%;height:min-content;padding:20px;border:1px solid #e6df88;outline:1px solid #e6df88;border-radius:4px;background-color:#f2f8a1;font-weight:700;color:#727010}.error-box.svelte-1hwbcik{width:100%}.error-list.svelte-1hwbcik{padding-left:20px}.error-delete.svelte-1hwbcik{display:flex;justify-content:center;align-items:center;padding:8px;border:none;border-radius:50%;background-color:#727010;color:#f2f8a1;cursor:pointer}.error-icon.svelte-1hwbcik{width:16px;height:16px}",
  map: null
};
const ErrorBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hide } = $$props;
  let { errors } = $$props;
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0)
    $$bindings.hide(hide);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  $$result.css.add(css);
  return `<div class="error-container svelte-1hwbcik"><div class="error-box svelte-1hwbcik"><p>The following errors have been found:</p>
		<ul class="error-list svelte-1hwbcik">${each(Object.keys(errors), (value) => {
    return `<li>${escape(errors[value])}
				</li>`;
  })}</ul></div>
	<button class="error-delete svelte-1hwbcik"><i class="error-icon fa-solid fa-xmark svelte-1hwbcik"></i></button>
</div>`;
});

export { ErrorBox as E, timeago as t };
//# sourceMappingURL=ErrorBox-b8ca6442.js.map
