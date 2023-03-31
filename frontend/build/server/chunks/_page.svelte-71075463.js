import { c as create_ssr_component, v as validate_component, h as each, e as escape, b as add_attribute } from './index2-df9c59bd.js';
import { E as ErrorBox, t as timeago } from './ErrorBox-dec93e9d.js';
import { D as DIR } from './config-326b0707.js';
import './shared-server-fa63418b.js';

const css$5 = {
  code: ".image-container.svelte-1nhegp{display:grid;grid-auto-rows:min-content;width:50%;min-width:500px;max-width:800px;height:min-content;background-color:#ffffff;box-shadow:0 2px 8px #777777;row-gap:20px}h2.svelte-1nhegp{display:flex;position:relative;align-items:center;width:100%;padding:20px;background-color:#5383d3;color:#ffffff;gap:5px}button.svelte-1nhegp{position:absolute;width:min-content;height:min-content;right:20px;padding:8px 24px;border:none;border-radius:4px;background-color:#e23434;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer;gap:5px}button.svelte-1nhegp:hover{background-color:#f23434}img.svelte-1nhegp{width:100%}.image-description.svelte-1nhegp{padding:0 20px;text-align:center}.image-stats.svelte-1nhegp{display:flex;justify-content:space-evenly;width:100%;padding:20px;background-color:#5383d3;color:#ffffff}",
  map: null
};
const ImageContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { alert } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.alert === void 0 && $$bindings.alert && alert !== void 0)
    $$bindings.alert(alert);
  $$result.css.add(css$5);
  return `<div class="image-container svelte-1nhegp"><h2 class="svelte-1nhegp"><i class="fa-solid fa-image"></i>
		${escape(image.title)}
		<button${add_attribute("name", image.uniqueId, 0)} class="svelte-1nhegp">Delete
		</button></h2>
	<img src="${escape(DIR, true) + "/uploads/" + escape(image.filename, true)}"${add_attribute("alt", image.title, 0)} class="svelte-1nhegp">
	${image.description ? `<div class="image-description svelte-1nhegp">${escape(image.description)}</div>` : ``}
	<div class="image-stats svelte-1nhegp"><p><i class="fa-solid fa-eye"></i>
			${escape(image.views)}</p>
		<p><i class="fa-regular fa-clock"></i>
			${escape(timeago(image.createdAt))}</p></div>
</div>`;
});
const css$4 = {
  code: "div.svelte-jyrj17.svelte-jyrj17{width:50%;min-width:500px;max-width:800px;height:min-content;box-shadow:0 2px 8px #777777;background-color:#ffffff}h2.svelte-jyrj17.svelte-jyrj17{display:flex;position:relative;align-items:center;padding:20px;background-color:#5383d3;color:#ffffff;gap:5px}button.svelte-jyrj17.svelte-jyrj17{display:flex;position:absolute;justify-content:center;align-items:center;width:36px;height:36px;right:20px;border:none;border-radius:50%;background-color:#63c187;cursor:pointer}button.svelte-jyrj17 i.svelte-jyrj17{width:100%;height:16px;border-radius:50%;font-size:20px;color:#ffffff}",
  map: null
};
const ImagePost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="svelte-jyrj17"><h2 class="svelte-jyrj17"><i class="fa-solid fa-comment"></i> 
		Comment
		<button class="svelte-jyrj17"><i class="fa-solid fa-angle-down svelte-jyrj17"></i></button></h2>
	${``}
</div>`;
});
const css$3 = {
  code: ".comments-container.svelte-1liun6p{width:50%;min-width:500px;max-width:800px;height:min-content;box-shadow:0 2px 8px #777777;background-color:#ffffff}h2.svelte-1liun6p{width:100%;margin:0;padding:20px;background-color:#5383d3;color:#ffffff}.comments-list.svelte-1liun6p{display:flex;flex-wrap:wrap;padding:10px;gap:10px}",
  map: null
};
const ImageComments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comments } = $$props;
  if ($$props.comments === void 0 && $$bindings.comments && comments !== void 0)
    $$bindings.comments(comments);
  $$result.css.add(css$3);
  return `<div class="comments-container svelte-1liun6p"><h2 class="svelte-1liun6p"><i class="fa-solid fa-comments"></i>
		${escape(comments)} comments
	</h2>
	${comments > 0 ? `<div class="comments-list svelte-1liun6p">${slots.default ? slots.default({}) : ``}</div>` : ``}
</div>`;
});
const css$2 = {
  code: ".comment.svelte-169axgd{display:grid;grid-template-columns:45px 1fr;width:100%;border-radius:4px;column-gap:10px;row-gap:5px}img.svelte-169axgd{grid-row:1 / span 3;box-shadow:0 0 3px #000000}.comment-createdat.svelte-169axgd{width:max-content;margin-left:auto}",
  map: null
};
const Comment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comment } = $$props;
  if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0)
    $$bindings.comment(comment);
  $$result.css.add(css$2);
  return `<div class="comment svelte-169axgd"><img src="${"http://gravatar.com/avatar/" + escape(comment.gravatar, true) + "?d=monsterid&s=45"}"${add_attribute("alt", comment.name, 0)} class="svelte-169axgd">
	<div>${escape(comment.name)} ● ${escape(comment.email)}</div>
	<div>${escape(comment.comment)}</div>
	<div class="comment-createdat svelte-169axgd">${escape(timeago(comment.createdAt))}</div>
</div>`;
});
const css$1 = {
  code: "form.svelte-tsr839{display:flex;flex-wrap:wrap;padding:10px;gap:10px}input.svelte-tsr839,textarea.svelte-tsr839{width:100%;padding:8px 16px;border:1px solid #bbbbbb;border-radius:4px}button.svelte-tsr839{display:block;margin-left:auto;padding:8px 16px;background:#63c187;color:#ffffff;border:none;border-radius:4px;cursor:pointer}button.svelte-tsr839:hover{background:#63d187}",
  map: null
};
const CommentForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { see } = $$props;
  let { errors } = $$props;
  let { change } = $$props;
  let { addComment } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.see === void 0 && $$bindings.see && see !== void 0)
    $$bindings.see(see);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  if ($$props.change === void 0 && $$bindings.change && change !== void 0)
    $$bindings.change(change);
  if ($$props.addComment === void 0 && $$bindings.addComment && addComment !== void 0)
    $$bindings.addComment(addComment);
  $$result.css.add(css$1);
  return `<form action="${escape(DIR, true) + "/api/" + escape(id, true) + "/comment"}" method="POST" class="svelte-tsr839">${see ? `${slots.default ? slots.default({}) : ``}` : ``}
	<input type="text" name="name" placeholder="Name" class="svelte-tsr839">
	<input type="email" name="email" placeholder="Email" class="svelte-tsr839">
	<textarea name="comment" rows="2" placeholder="Comment" class="svelte-tsr839"></textarea>
	<button class="svelte-tsr839"><i class="fa-solid fa-comment"></i>
		Post
	</button>
</form>`;
});
const css = {
  code: ".alert-container.svelte-14rxbf6.svelte-14rxbf6{display:grid;position:fixed;justify-content:center;align-items:flex-start;width:100%;min-height:100%;top:0;bottom:0;padding-top:130px;background-color:#000000af;z-index:1000}.alert-container.svelte-14rxbf6 div.svelte-14rxbf6{display:flex;flex-wrap:wrap;justify-content:center;width:400px;padding:20px;outline:1px solid #dddddd;border-radius:8px;background-color:#ffffff;font-size:20px;font-weight:700;box-shadow:0 0 10px #888888;gap:8px}p.svelte-14rxbf6.svelte-14rxbf6{width:100%}button.svelte-14rxbf6.svelte-14rxbf6{width:fit-content;margin:auto;padding:8px 24px;border:none;border-radius:8px;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer}.cancel.svelte-14rxbf6.svelte-14rxbf6{background-color:#f04425}.cancel.svelte-14rxbf6.svelte-14rxbf6:hover{background-color:#ff4425}.accept.svelte-14rxbf6.svelte-14rxbf6{background-color:#4588b6}.accept.svelte-14rxbf6.svelte-14rxbf6:hover{background-color:#4588c6}",
  map: null
};
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { alert } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.alert === void 0 && $$bindings.alert && alert !== void 0)
    $$bindings.alert(alert);
  $$result.css.add(css);
  return `<div class="alert-container svelte-14rxbf6"><div class="svelte-14rxbf6"><p class="svelte-14rxbf6">Are you sure of delete this image?</p>
		<button class="cancel svelte-14rxbf6">Cancel
		</button>
		<button class="accept svelte-14rxbf6">Accept
		</button></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { image, comments } = data;
  let errors = {};
  let see = false;
  let showAlert = false;
  const addComment = (comment) => comments = [comment, ...comments];
  const changeBoxErrors = () => see = !see;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${showAlert ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      { id: image.uniqueId, alert: showAlert },
      {
        alert: ($$value) => {
          showAlert = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

${validate_component(ImageContent, "ImageContent").$$render(
      $$result,
      { image, alert: showAlert },
      {
        alert: ($$value) => {
          showAlert = $$value;
          $$settled = false;
        }
      },
      {}
    )}

${validate_component(ImagePost, "ImagePost").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommentForm, "CommentForm").$$render(
          $$result,
          {
            id: image.uniqueId,
            see,
            change: changeBoxErrors,
            addComment,
            errors
          },
          {
            errors: ($$value) => {
              errors = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(ErrorBox, "ErrorBox").$$render(
                $$result,
                { hide: changeBoxErrors, errors },
                {
                  errors: ($$value) => {
                    errors = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          }
        )}`;
      }
    })}

${validate_component(ImageComments, "ImageComments").$$render($$result, { comments: comments.length }, {}, {
      default: () => {
        return `${each(comments, (comment) => {
          return `${validate_component(Comment, "Comment").$$render($$result, { comment }, {}, {})}`;
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-71075463.js.map
