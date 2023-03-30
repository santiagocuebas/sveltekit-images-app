import { c as create_ssr_component, v as validate_component, e as escape, h as each, b as add_attribute } from './index2-df9c59bd.js';
import { E as ErrorBox, t as timeago } from './ErrorBox-dec93e9d.js';

const css$5 = {
  code: ".upload-container.svelte-1pvpxcl{grid-column:1 / span 8;width:100%;height:min-content;background-color:#ffffff;box-shadow:0 2px 8px #333333}form.svelte-1pvpxcl{display:grid;grid-auto-rows:min-content;padding:20px;background:#ffffff;gap:12px}input.svelte-1pvpxcl,textarea.svelte-1pvpxcl{width:100%;padding:10px;border:1px solid #bbbbbb;border-radius:4px}input[type='file'].svelte-1pvpxcl{display:none}label.svelte-1pvpxcl{display:flex;justify-content:center;align-items:center;width:360px;height:360px;margin:auto;outline:1px solid #bbbbbb;border-radius:4px;background-image:url('/objetive.png');background-repeat:no-repeat;background-position:center;background-size:contain;cursor:pointer}button.svelte-1pvpxcl{display:block;margin-left:auto;padding:8px 24px;border:none;border-radius:4px;background-color:#63c187;font-weight:700;color:#ffffff;cursor:pointer}button.svelte-1pvpxcl:hover{background:#63d187}@media(max-width: 1040px){.upload-container.svelte-1pvpxcl{grid-column:1 / span 12}}",
  map: null
};
const Upload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { visible } = $$props;
  let { change } = $$props;
  let { errors } = $$props;
  let { dir } = $$props;
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.change === void 0 && $$bindings.change && change !== void 0)
    $$bindings.change(change);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  $$result.css.add(css$5);
  return `<div class="upload-container svelte-1pvpxcl"><h2 class="general-header"><i class="fa-solid fa-image"></i>
		Upload image
	</h2>
	<form action="${escape(dir, true) + "/api/upload"}" method="POST" enctype="multipart/form-data" class="svelte-1pvpxcl">${visible ? `${slots.default ? slots.default({}) : ``}` : ``}
		<label class="svelte-1pvpxcl"><input type="file" name="image" class="svelte-1pvpxcl"></label>
		<input type="text" name="title" id="title" placeholder="Title" class="svelte-1pvpxcl">
		<textarea name="description" id="description" rows="2" placeholder="Description" class="svelte-1pvpxcl"></textarea>
		<button class="svelte-1pvpxcl"><i class="fa-solid fa-upload"></i>
			Upload
		</button></form>
</div>`;
});
const css$4 = {
  code: ".recent-container.svelte-9t9et5{width:100%;height:min-content;margin-top:20px;box-shadow:0 2px 8px #333333}.recent-images.svelte-9t9et5{display:flex;justify-content:space-around;height:min-content;padding:20px;background-color:#ffffff;gap:5px}a.svelte-9t9et5{width:140px;height:140px;box-shadow:0 0 3px 1px #000000}img.svelte-9t9et5{width:100%;height:100%;object-fit:cover;object-position:center}",
  map: null
};
const RecentUploads = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let { dir } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  $$result.css.add(css$4);
  return `<div class="recent-container svelte-9t9et5"><h2 class="general-header"><i class="fa-solid fa-images"></i>
		Recent Uploads
	</h2>
	${images.length > 0 ? `<div class="recent-images svelte-9t9et5">${each(images, ({ filename, title, uniqueId }) => {
    return `<a href="${"/gallery/" + escape(uniqueId, true)}" class="svelte-9t9et5"><img src="${escape(dir, true) + "/uploads/" + escape(filename, true)}"${add_attribute("alt", title, 0)} class="svelte-9t9et5">
			</a>`;
  })}</div>` : ``}
</div>`;
});
const css$3 = {
  code: "div.svelte-4jxf12.svelte-4jxf12{display:flex;flex-wrap:wrap;width:100%;height:min-content;padding:20px;outline:1px solid #999999;border-radius:4px;background-color:#ffffff;gap:10px}p.svelte-4jxf12.svelte-4jxf12{display:flex;align-items:center;width:100%;height:min-content;gap:6px}h2.svelte-4jxf12 i.svelte-4jxf12{width:24px}p.svelte-4jxf12 i.svelte-4jxf12{width:20px}",
  map: null
};
const Stats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stats } = $$props;
  if ($$props.stats === void 0 && $$bindings.stats && stats !== void 0)
    $$bindings.stats(stats);
  $$result.css.add(css$3);
  return `<div class="svelte-4jxf12"><h2 class="svelte-4jxf12"><i class="fa-solid fa-chart-line svelte-4jxf12"></i>
    Stats
  </h2>
  <p class="svelte-4jxf12"><i class="fa-solid fa-images svelte-4jxf12"></i>
    Images: ${escape(stats[0])}</p>
  <p class="svelte-4jxf12"><i class="fa-solid fa-comments svelte-4jxf12"></i>
    Comments: ${escape(stats[1])}</p>
  <p class="svelte-4jxf12"><i class="fa-solid fa-eye svelte-4jxf12"></i>
    Views: ${escape(stats[2])}</p>
</div>`;
});
const css$2 = {
  code: ".view-container.svelte-rukf5h.svelte-rukf5h{width:100%;height:min-content;margin-top:10px;box-shadow:0 2px 8px #333333}.view-container.svelte-rukf5h div.svelte-rukf5h{display:flex;justify-content:space-around;height:min-content;padding:10px 5px;background-color:#ffffff}a.svelte-rukf5h.svelte-rukf5h{width:80px;height:80px;box-shadow:0 0 3px #000000}img.svelte-rukf5h.svelte-rukf5h{width:100%;height:100%;object-fit:cover;object-position:center}",
  map: null
};
const ViewedImages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let { dir } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  $$result.css.add(css$2);
  return `<div class="view-container svelte-rukf5h"><h2 class="general-header"><i class="fa-solid fa-images"></i>
		Most vieweds
	</h2>
	${images.length > 0 ? `<div class="svelte-rukf5h">${each(images, ({ filename, title, uniqueId }) => {
    return `<a href="${"/gallery/" + escape(uniqueId, true)}" class="svelte-rukf5h"><img src="${escape(dir, true) + "/uploads/" + escape(filename, true)}"${add_attribute("alt", title, 0)} class="svelte-rukf5h">
			</a>`;
  })}</div>` : ``}
</div>`;
});
const css$1 = {
  code: ".comment-container.svelte-1jq7jhr.svelte-1jq7jhr{width:100%;height:min-content;margin-top:10px;box-shadow:0 2px 8px #333333}.comments-list.svelte-1jq7jhr.svelte-1jq7jhr{display:flex;flex-wrap:wrap;justify-content:space-around;height:min-content;padding:20px;background-color:#ffffff;gap:10px}.comment-content.svelte-1jq7jhr.svelte-1jq7jhr{display:grid;grid-template-columns:100px 1fr;grid-auto-rows:1fr;width:100%;gap:10px}.comment-content.svelte-1jq7jhr img.svelte-1jq7jhr{grid-row:1 / span 2;width:100px;height:100px;object-fit:cover;box-shadow:0 0 3px #000000}.comment-data.svelte-1jq7jhr.svelte-1jq7jhr{font-size:20px}.comment-footer.svelte-1jq7jhr.svelte-1jq7jhr{align-self:end;justify-self:end;color:#666666}",
  map: null
};
const RecentComments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comments } = $$props;
  let { dir } = $$props;
  if ($$props.comments === void 0 && $$bindings.comments && comments !== void 0)
    $$bindings.comments(comments);
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  $$result.css.add(css$1);
  return `<div class="comment-container svelte-1jq7jhr"><h2 class="general-header"><i class="fa-solid fa-comments"></i>
		Recent comments
	</h2>
	${comments.length > 0 ? `<div class="comments-list svelte-1jq7jhr">${each(comments, (comment) => {
    return `<div class="comment-content svelte-1jq7jhr"><img src="${escape(dir, true) + "/uploads/" + escape(comment.filename, true)}"${add_attribute("alt", comment.name, 0)} class="svelte-1jq7jhr">
				<div class="comment-data svelte-1jq7jhr">${escape(comment.comment)}</div>
				<div class="comment-footer svelte-1jq7jhr">- ${escape(comment.name)} ● ${escape(timeago(comment.createdAt))}</div>
			</div>`;
  })}</div>` : ``}
</div>`;
});
const css = {
  code: ".principal-container.svelte-vn5th8{display:grid;grid-template-columns:repeat(12, minmax(40px, 1fr));grid-auto-rows:min-content 1fr;min-width:480px;width:80%;max-width:1440px;height:fit-content}.upload-sidebar.svelte-vn5th8{grid-column:9 / span 4;grid-row:1 / span 2;display:grid;grid-auto-rows:min-content;padding:0 0 0 20px;row-gap:10px}.upload-recent.svelte-vn5th8{grid-column:1 / span 8;align-self:flex-start}@media(max-width: 1040px){.upload-sidebar.svelte-vn5th8{display:none}.upload-recent.svelte-vn5th8{grid-column:1 / span 12}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let errors = {};
  let visible = false;
  let images = data.images;
  let stats = data.stats;
  let viewedImages = data.viewedImages;
  let recentComments = data.recentComments;
  const changeBoxErrors = () => visible = !visible;
  const setErrors = (data2) => errors = data2;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="principal-container svelte-vn5th8">${validate_component(Upload, "Upload").$$render(
    $$result,
    {
      visible,
      change: changeBoxErrors,
      errors: setErrors,
      dir: data.dir
    },
    {},
    {
      default: () => {
        return `${validate_component(ErrorBox, "ErrorBox").$$render($$result, { hide: changeBoxErrors, errors }, {}, {})}`;
      }
    }
  )}
	<div class="upload-sidebar svelte-vn5th8">${validate_component(Stats, "Stats").$$render($$result, { stats }, {}, {})}
		${validate_component(ViewedImages, "ViewedImages").$$render($$result, { images: viewedImages, dir: data.dir }, {}, {})}
		${validate_component(RecentComments, "RecentComments").$$render($$result, { comments: recentComments, dir: data.dir }, {}, {})}</div>
	<div class="upload-recent svelte-vn5th8">${validate_component(RecentUploads, "RecentUploads").$$render($$result, { images, dir: data.dir }, {}, {})}</div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-41e83141.js.map
