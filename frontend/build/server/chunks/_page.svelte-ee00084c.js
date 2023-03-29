import { c as create_ssr_component, v as validate_component, e as escape, f as each, b as add_attribute } from './index2-01390e42.js';
import { E as ErrorBox, t as timeago } from './ErrorBox-b8ca6442.js';

const css$5 = {
  code: ".upload-container.svelte-n1bbjm{grid-column:1 / span 8;width:100%;height:min-content;background-color:#ffffff;box-shadow:0 2px 8px #333333}.upload-title.svelte-n1bbjm{font-size:32px;padding:10px 20px;color:#ffffff}.upload-body.svelte-n1bbjm{background:#fff;padding:20px}.upload-box.svelte-n1bbjm{min-width:440px;margin-bottom:16px}.upload-file.svelte-n1bbjm{display:none}.upload-input.svelte-n1bbjm{width:100%;padding:8px 16px;border:1px solid #bbbbbb;border-radius:4px}.upload-label.svelte-n1bbjm{display:flex;justify-content:center;align-items:center;width:360px;height:360px;margin:auto;outline:1px solid #bbbbbb;border-radius:4px;background-image:url('/objetive.png');background-repeat:no-repeat;background-position:center;cursor:pointer}.upload-image.svelte-n1bbjm{width:auto;height:100%}.upload-button.svelte-n1bbjm{display:block;margin-left:auto;padding:8px 16px;background:#63c187;color:#ffffff;border:none;border-radius:4px;cursor:pointer}.upload-button.svelte-n1bbjm:hover{background:#63d187}@media(max-width: 1040px){.upload-container.svelte-n1bbjm{grid-column:1 / span 12}}",
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
  return `<div class="upload-container svelte-n1bbjm"><div class="general-header"><h2 class="upload-title svelte-n1bbjm"><i class="fa-solid fa-image"></i>
      Upload image
    </h2></div>
  <div class="upload-body svelte-n1bbjm"><form action="${escape(dir, true) + "/api/upload"}" method="POST" enctype="multipart/form-data">${visible ? `<div class="upload-box svelte-n1bbjm">${slots.default ? slots.default({}) : ``}</div>` : ``}
      <div class="upload-box svelte-n1bbjm"><label class="upload-label svelte-n1bbjm"><input class="upload-file svelte-n1bbjm" type="file" name="image">
          <img class="upload-image svelte-n1bbjm" src="" alt=""></label></div>
      <div class="upload-box svelte-n1bbjm"><input class="upload-input svelte-n1bbjm" type="text" name="title" id="title" placeholder="Title"></div>
      <div class="upload-box svelte-n1bbjm"><textarea class="upload-input svelte-n1bbjm" name="description" id="description" rows="2" placeholder="Description"></textarea></div>
      <button class="upload-button svelte-n1bbjm"><i class="fa-solid fa-upload"></i>
        Upload image
      </button></form></div>
</div>`;
});
const css$4 = {
  code: ".recent-container.svelte-1otbhzd{width:100%;height:min-content;margin-top:20px;box-shadow:0 2px 8px #333333}.recent-title.svelte-1otbhzd{font-size:32px;padding:10px 20px;color:#ffffff}.recent-images.svelte-1otbhzd{display:flex;justify-content:space-around;height:min-content;padding:20px;background-color:#ffffff;gap:5px}.recent-content.svelte-1otbhzd{width:140px;height:140px;overflow:hidden}.recent-image.svelte-1otbhzd{width:100%}",
  map: null
};
const RecentUploads = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  $$result.css.add(css$4);
  return `<div class="recent-container svelte-1otbhzd"><div class="general-header"><h2 class="recent-title svelte-1otbhzd"><i class="fa-solid fa-images"></i>
      Recent Uploads
    </h2></div>
  ${images.length > 0 ? `<div class="recent-images svelte-1otbhzd">${each(images, ({ filename, title, uniqueId }) => {
    return `<div class="recent-content svelte-1otbhzd"><a href="${"/gallery/" + escape(uniqueId, true)}"><img class="recent-image svelte-1otbhzd" src="${"http://localhost:4200/uploads/" + escape(filename, true)}"${add_attribute("alt", title, 0)}></a>
      </div>`;
  })}</div>` : ``}
</div>`;
});
const css$3 = {
  code: ".stats-container.svelte-t3y9zl{display:flex;flex-wrap:wrap;width:100%;height:min-content;padding:20px;outline:1px solid #999999;border-radius:4px;background-color:#ffffff;gap:10px}.stats-paragraph.svelte-t3y9zl{width:100%;height:min-content}",
  map: null
};
const Stats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stats } = $$props;
  if ($$props.stats === void 0 && $$bindings.stats && stats !== void 0)
    $$bindings.stats(stats);
  $$result.css.add(css$3);
  return `<div class="stats-container svelte-t3y9zl"><h2 class="stats-paragraph svelte-t3y9zl"><i class="fa-solid fa-chart-line"></i>
    Stats
  </h2>
  <p class="stats-paragraph svelte-t3y9zl"><i class="fa-solid fa-images"></i>
    Images: ${escape(stats[0])}</p>
  <p class="stats-paragraph svelte-t3y9zl"><i class="fa-solid fa-comments"></i>
    Comments: ${escape(stats[1])}</p>
  <p class="stats-paragraph svelte-t3y9zl"><i class="fa-solid fa-eye"></i>
    Views: ${escape(stats[2])}</p>
</div>`;
});
const css$2 = {
  code: ".view-container.svelte-1vebm5g{width:100%;height:min-content;margin-top:10px;box-shadow:0 2px 8px #333333}.view-title.svelte-1vebm5g{font-size:32px;padding:10px 20px;color:#ffffff}.view-images.svelte-1vebm5g{display:flex;justify-content:space-around;height:min-content;padding:20px;background-color:#ffffff;gap:5px}.view-content.svelte-1vebm5g{width:80px;height:80px;overflow:hidden}.view-image.svelte-1vebm5g{width:100%}",
  map: null
};
const ViewedImages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  $$result.css.add(css$2);
  return `<div class="view-container svelte-1vebm5g"><div class="general-header"><h2 class="view-title svelte-1vebm5g"><i class="fa-solid fa-images"></i>
      Most vieweds
    </h2></div>
  ${images.length > 0 ? `<div class="view-images svelte-1vebm5g">${each(images, ({ filename, title, uniqueId }) => {
    return `<div class="view-content svelte-1vebm5g"><a href="${"/gallery/" + escape(uniqueId, true)}"><img class="view-image svelte-1vebm5g" src="${"http://localhost:4200/uploads/" + escape(filename, true)}"${add_attribute("alt", title, 0)}></a>
      </div>`;
  })}</div>` : ``}
</div>`;
});
const css$1 = {
  code: ".comment-container.svelte-zzgi5h{width:100%;height:min-content;margin-top:10px;box-shadow:0 2px 8px #333333}.comment-title.svelte-zzgi5h{font-size:32px;padding:10px 20px;color:#ffffff}.comments-list.svelte-zzgi5h{display:flex;flex-wrap:wrap;justify-content:space-around;height:min-content;padding:20px;background-color:#ffffff;gap:10px}.comment-content.svelte-zzgi5h{display:flex;align-items:center;width:100%;gap:10px}.comment-container-image.svelte-zzgi5h{width:100px;height:100px;overflow:hidden}.comment-image.svelte-zzgi5h{width:100%;height:auto}.comment-data.svelte-zzgi5h{display:flex;flex-direction:column;justify-content:space-between;height:100%}.comment-inner-content.svelte-zzgi5h{font-size:20px}.comment-footer.svelte-zzgi5h{color:#666666}",
  map: null
};
const RecentComments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comments } = $$props;
  if ($$props.comments === void 0 && $$bindings.comments && comments !== void 0)
    $$bindings.comments(comments);
  $$result.css.add(css$1);
  return `<div class="comment-container svelte-zzgi5h"><div class="general-header"><h2 class="comment-title svelte-zzgi5h"><i class="fa-solid fa-comments"></i>
      Recent comments
    </h2></div>
  ${comments.length > 0 ? `<div class="comments-list svelte-zzgi5h">${each(comments, (comment) => {
    return `<div class="comment-content svelte-zzgi5h"><div class="comment-container-image svelte-zzgi5h"><img class="comment-image svelte-zzgi5h" src="${"http://localhost:4200/uploads/" + escape(comment.filename, true)}" alt=""></div>
        <div class="comment-data svelte-zzgi5h"><div class="comment-inner-content svelte-zzgi5h">${escape(comment.comment)}</div>
          <div class="comment-footer svelte-zzgi5h">- ${escape(comment.name)} <sup>.</sup> ${escape(timeago(comment.createdAt))}</div></div>
      </div>`;
  })}</div>` : ``}
</div>`;
});
const css = {
  code: ".principal-container.svelte-gs7oaz{display:grid;grid-template-columns:repeat(12, minmax(40px, 1fr));grid-auto-rows:min-content;min-width:480px;width:80%;max-width:1440px;height:fit-content;margin:20px auto}.upload-sidebar.svelte-gs7oaz{grid-column:9 / span 4;grid-row:1 / span 2;display:grid;grid-auto-rows:min-content;padding:0 0 0 20px;row-gap:10px}.upload-recent.svelte-gs7oaz{grid-column:1 / span 8;align-self:flex-start}@media(max-width: 1040px){.upload-sidebar.svelte-gs7oaz{display:none}.upload-recent.svelte-gs7oaz{grid-column:1 / span 12}}",
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
  return `<div class="principal-container svelte-gs7oaz">${validate_component(Upload, "Upload").$$render(
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
	<div class="upload-sidebar svelte-gs7oaz">${validate_component(Stats, "Stats").$$render($$result, { stats }, {}, {})}
		${validate_component(ViewedImages, "ViewedImages").$$render($$result, { images: viewedImages }, {}, {})}
		${validate_component(RecentComments, "RecentComments").$$render($$result, { comments: recentComments }, {}, {})}</div>
	<div class="upload-recent svelte-gs7oaz">${validate_component(RecentUploads, "RecentUploads").$$render($$result, { images }, {}, {})}</div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ee00084c.js.map
