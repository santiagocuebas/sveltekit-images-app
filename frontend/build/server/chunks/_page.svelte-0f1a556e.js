import { c as create_ssr_component, v as validate_component, f as each, e as escape, b as add_attribute } from './index2-01390e42.js';
import { E as ErrorBox, t as timeago } from './ErrorBox-b8ca6442.js';

const css$5 = {
  code: ".image-container.svelte-25w0vb{display:grid;min-width:450px;width:30%;height:min-content;max-width:600px;margin:10px auto;background-color:#ffffff;box-shadow:0 2px 8px #777777;row-gap:20px}.image-title.svelte-25w0vb{display:flex;align-items:center;width:100%;margin:0;padding:20px;font-size:48px;background-color:#5383d3;color:hsl(0, 0%, 100%);gap:5px}.image-delete.svelte-25w0vb{display:flex;align-items:center;width:min-content;height:min-content;margin-left:auto;padding:8px 24px;border:none;border-radius:4px;background-color:#e23434;font-size:20px;font-weight:600;color:#ffffff;cursor:pointer;gap:5px}.image-delete.svelte-25w0vb:hover{background-color:#f23434}.image-content.svelte-25w0vb{width:100%;padding:0 20px}.image-description.svelte-25w0vb{padding:0 20px;text-align:center}.image-stats.svelte-25w0vb{display:flex;justify-content:space-evenly;width:100%;padding:20px;background-color:#5383d3;color:#ffffff}",
  map: null
};
const ImageContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { alert } = $$props;
  let { dir } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.alert === void 0 && $$bindings.alert && alert !== void 0)
    $$bindings.alert(alert);
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  $$result.css.add(css$5);
  return `<div class="image-container svelte-25w0vb"><h1 class="image-title general-header svelte-25w0vb"><i class="fa-solid fa-image"></i>
		${escape(image.title)}
		<button class="image-delete svelte-25w0vb"${add_attribute("name", image.uniqueId, 0)}><i class="fa-solid fa-xmark"></i>
			Delete
		</button></h1>
	<img class="image-content svelte-25w0vb" src="${escape(dir, true) + "/uploads/" + escape(image.filename, true)}" alt="">
	${image.description ? `<div class="image-description svelte-25w0vb">${escape(image.description)}</div>` : ``}
	<div class="image-stats svelte-25w0vb"><p><i class="fa-solid fa-eye"></i>
			${escape(image.views)}</p>
		<p><i class="fa-regular fa-clock"></i>
			${escape(timeago(image.createdAt))}</p></div>
</div>`;
});
const css$4 = {
  code: ".image-post.svelte-126mx63{min-width:450px;width:30%;height:min-content;max-width:600px;margin:20px auto;box-shadow:0 2px 8px #777777;background-color:#ffffff}.image-comment.svelte-126mx63{display:flex;padding:20px;background-color:#5383d3;color:#ffffff}.image-comment-show.svelte-126mx63{display:flex;justify-content:center;align-items:center;margin-left:auto;padding:10px;border:none;border-radius:50%;background-color:#63c187;color:#ffffff;cursor:pointer}.image-comment-title.svelte-126mx63{display:flex;align-items:center;gap:5px}",
  map: null
};
const ImagePost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="image-post svelte-126mx63"><div class="image-comment svelte-126mx63"><h2 class="image-comment-title svelte-126mx63"><i class="fa-solid fa-comment"></i> 
			Comment
		</h2>
		<button class="image-comment-show svelte-126mx63"><i class="fa-solid fa-angle-down"></i></button></div>
	${``}
</div>`;
});
const css$3 = {
  code: ".image-comments.svelte-1s3baub{min-width:450px;width:30%;height:min-content;max-width:600px;margin:20px auto;box-shadow:0 2px 8px #777777;background-color:#ffffff}.image-comments-header.svelte-1s3baub{padding:20px;background-color:#5383d3;color:#ffffff}.image-comments-list.svelte-1s3baub{display:flex;flex-wrap:wrap;padding:10px;gap:10px}",
  map: null
};
const ImageComments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comments } = $$props;
  if ($$props.comments === void 0 && $$bindings.comments && comments !== void 0)
    $$bindings.comments(comments);
  $$result.css.add(css$3);
  return `<div class="image-comments svelte-1s3baub"><div class="image-comments-header svelte-1s3baub"><h2><i class="fa-solid fa-comments"></i>
			${escape(comments)} comments
		</h2></div>
	${comments > 0 ? `<div class="image-comments-list svelte-1s3baub">${slots.default ? slots.default({}) : ``}</div>` : ``}
</div>`;
});
const css$2 = {
  code: ".comment-container-content.svelte-2suzrv{display:flex;width:100%;padding:5px;outline:1px solid #bbbbbb;border-radius:4px;gap:5px}.comment-container-avatar.svelte-2suzrv{display:flex;height:100%;justify-content:center;align-items:center;padding:10px}.comment-content.svelte-2suzrv{display:flex;flex-wrap:wrap;align-items:space-around}.comment-name.svelte-2suzrv{width:100%;height:min-content}.comment-createdat.svelte-2suzrv{width:100%;height:min-content}",
  map: null
};
const Comment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comment } = $$props;
  if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0)
    $$bindings.comment(comment);
  $$result.css.add(css$2);
  return `<div class="comment-container-content svelte-2suzrv"><div class="comment-container-avatar svelte-2suzrv"><img src="${"http://gravatar.com/avatar/" + escape(comment.gravatar, true) + "?d=monsterid&s=45"}"${add_attribute("alt", comment.name, 0)}></div>
	<div class="comment-content svelte-2suzrv"><div class="comment-name svelte-2suzrv">${escape(comment.name)} <sup>.</sup> ${escape(comment.email)}</div>
		<div>${escape(comment.comment)}</div>
		<div class="comment-createdat svelte-2suzrv">${escape(timeago(comment.createdAt))}</div></div>
</div>`;
});
const css$1 = {
  code: ".comment-form.svelte-15ht31p{display:flex;flex-wrap:wrap;padding:10px;gap:10px}.comment-input.svelte-15ht31p{width:100%;padding:8px 16px;border:1px solid #bbbbbb;border-radius:4px}.comment-button.svelte-15ht31p{display:block;margin-left:auto;padding:8px 16px;background:#63c187;color:#ffffff;border:none;border-radius:4px;cursor:pointer}.comment-button.svelte-15ht31p:hover{background:#63d187}",
  map: null
};
const CommentForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { dir } = $$props;
  let { see } = $$props;
  let { errors } = $$props;
  let { change } = $$props;
  let { addComment } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  if ($$props.see === void 0 && $$bindings.see && see !== void 0)
    $$bindings.see(see);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  if ($$props.change === void 0 && $$bindings.change && change !== void 0)
    $$bindings.change(change);
  if ($$props.addComment === void 0 && $$bindings.addComment && addComment !== void 0)
    $$bindings.addComment(addComment);
  $$result.css.add(css$1);
  return `<form class="comment-form svelte-15ht31p" action="${escape(dir, true) + "/api/" + escape(id, true) + "/comment"}" method="POST">${see ? `${slots.default ? slots.default({}) : ``}` : ``}
	<input class="comment-input svelte-15ht31p" type="text" name="name" placeholder="Name">
	<input class="comment-input svelte-15ht31p" type="email" name="email" placeholder="Email">
	<textarea class="comment-input svelte-15ht31p" name="comment" rows="2" placeholder="Comment"></textarea>
	<button class="comment-button svelte-15ht31p"><i class="fa-solid fa-comment"></i>
		Post
	</button>
</form>`;
});
const css = {
  code: ".alert-container.svelte-1g4o3b7{display:grid;position:fixed;justify-content:center;align-items:flex-start;width:100%;min-height:100%;top:0;bottom:0;padding-top:130px;background-color:#000000af;z-index:1000}.alert-content.svelte-1g4o3b7{display:flex;flex-wrap:wrap;justify-content:center;width:400px;padding:20px;outline:1px solid #dddddd;border-radius:8px;background-color:#ffffff;font-size:20px;font-weight:700;box-shadow:0 0 10px #888888;gap:8px}.alert-paragraph.svelte-1g4o3b7{width:100%}.alert-button.svelte-1g4o3b7{width:fit-content;margin:auto;padding:8px 24px;border:none;border-radius:8px;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer}.cancel.svelte-1g4o3b7{background-color:#f04425}.cancel.svelte-1g4o3b7:hover{background-color:#ff4425}.accept.svelte-1g4o3b7{background-color:#4588b6}.accept.svelte-1g4o3b7:hover{background-color:#4588c6}",
  map: null
};
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { dir } = $$props;
  let { alert } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  if ($$props.alert === void 0 && $$bindings.alert && alert !== void 0)
    $$bindings.alert(alert);
  $$result.css.add(css);
  return `<div class="alert-container svelte-1g4o3b7"><div class="alert-content svelte-1g4o3b7"><p class="alert-paragraph svelte-1g4o3b7">Are you sure of delete this image?</p>
		<button class="alert-button cancel svelte-1g4o3b7">Cancel
		</button>
		<button class="alert-button accept svelte-1g4o3b7">Accept
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
      {
        id: image.uniqueId,
        dir: data.dir,
        alert: showAlert
      },
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
      { image, dir: data.dir, alert: showAlert },
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
            dir: data.dir,
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
//# sourceMappingURL=_page.svelte-0f1a556e.js.map
