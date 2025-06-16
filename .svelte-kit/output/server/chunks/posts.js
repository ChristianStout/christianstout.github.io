import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { H as Head, P as Post_card, F as Footer } from "./post_card.js";
const Post_container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `${validate_component(Head, "Head").$$render($$result, { post }, {}, {})} <div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap"><div class="flex-1 w-full order-first ease-out transform mx-auto xl:mr-0 xl:ml-0">${``}</div> <div class="flex-1 w-full xl:order-last ease-out transform mx-auto xl:ml-0 xl:mr-0">${``}</div> <div class="flex-none w-full max-w-screen-md mx-auto xl:mx-0">${validate_component(Post_card, "Card").$$render($$result, { post }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} ${validate_component(Footer, "Footer").$$render($$result, { sticky: true }, {}, {})}</div></div>`;
});
const Post_layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  let { slug } = $$props;
  let { toc } = $$props;
  let { created } = $$props;
  let { updated } = $$props;
  let { published } = $$props;
  let { summary } = $$props;
  let { tags } = $$props;
  let { flags } = $$props;
  let { title } = $$props;
  let { image } = $$props;
  let { in_reply_to } = $$props;
  const fm = {
    created,
    flags,
    image,
    in_reply_to,
    path,
    published,
    slug,
    summary,
    tags,
    title,
    toc,
    updated
  };
  const post = { type: typeOfPost(fm), ...fm };
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.toc === void 0 && $$bindings.toc && toc !== void 0)
    $$bindings.toc(toc);
  if ($$props.created === void 0 && $$bindings.created && created !== void 0)
    $$bindings.created(created);
  if ($$props.updated === void 0 && $$bindings.updated && updated !== void 0)
    $$bindings.updated(updated);
  if ($$props.published === void 0 && $$bindings.published && published !== void 0)
    $$bindings.published(published);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
    $$bindings.summary(summary);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.flags === void 0 && $$bindings.flags && flags !== void 0)
    $$bindings.flags(flags);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.in_reply_to === void 0 && $$bindings.in_reply_to && in_reply_to !== void 0)
    $$bindings.in_reply_to(in_reply_to);
  return `${validate_component(Post_container, "Container").$$render($$result, { post }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const metadata$1 = {
  "title": "About Me",
  "image": "/assets/a.png",
  "alt": "Urara",
  "created": "2025-06-10T00:00:00.000Z",
  "tags": ["Hello World", "About Me"],
  "updated": "2025-06-16T15:43:03.646Z",
  "images": [],
  "slug": "/about-me/+page.md",
  "path": "/about-me",
  "toc": [
    {
      "depth": 2,
      "slug": "experience",
      "title": "Experience"
    }
  ]
};
const Page$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata$1), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-jqd5ja">Hello! Welcome to my website. I plan to share some of the things that I find interesting,
and the things I do to keep my mind fresh.</p> <p data-svelte-h="svelte-1q0bkjl">I love to program, hike, play video games, and learn languages (human and computer).</p> <h2 id="experience" data-svelte-h="svelte-19x40l8"><a href="#experience">Experience</a></h2> <p data-svelte-h="svelte-4jo7q2">I have a degree in Computer Science from Utah Valley University. I agraduated with a 3.54 cumulative GPA.</p> <p data-svelte-h="svelte-1xa0rky">I still continuously strive to improve my skills, challenge myself, and learn new concepts. I proudly do not
use AI in any of my code or writings whatsoever.</p>`;
    }
  })}`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page$1,
  metadata: metadata$1
}, Symbol.toStringTag, { value: "Module" }));
const metadata = {
  "title": "Social Links",
  "image": "/assets/connections.jpg",
  "created": "2025-06-13T00:00:00.000Z",
  "tags": ["Hello World", "About Me"],
  "updated": "2025-06-16T15:52:14.263Z",
  "images": [],
  "slug": "/about-me/socials/+page.md",
  "path": "/about-me/socials",
  "toc": [
    {
      "depth": 1,
      "slug": "socials",
      "title": "Socials"
    }
  ]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1 id="socials" data-svelte-h="svelte-fidbwo"><a href="#socials">Socials</a></h1> <p data-svelte-h="svelte-1fjexc1">🦋 <a href="https://bsky.app/profile/gaylambda.bsky.social" rel="nofollow noopener noreferrer external" target="_blank">Bluesky</a></p> <p data-svelte-h="svelte-11p1kni">🐙 <a href="https://github.com/ChristianStout" rel="nofollow noopener noreferrer external" target="_blank">Github</a></p> <p data-svelte-h="svelte-9pmmdl">🟦 <a href="https://www.linkedin.com/in/christian-stout-072616235/" rel="nofollow noopener noreferrer external" target="_blank">Linkedin</a></p>`;
    }
  })}`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
const typeOfPost = (fm) => fm.title ? "article" : fm.image ? "photo" : fm.audio ? "audio" : fm.video ? "video" : fm.bookmark_of ? "bookmark" : fm.like_of ? "like" : fm.repost_of ? "repost" : fm.in_reply_to ? "reply" : "note";
const genPosts = ({
  filterUnlisted = false,
  modules = /* @__PURE__ */ Object.assign({ "/src/routes/about-me/+page.md": __vite_glob_0_0, "/src/routes/about-me/socials/+page.md": __vite_glob_0_1 }),
  postHtml = false,
  postLimit = void 0
} = {}) => Object.entries(modules).map(([, module]) => ({
  ...module.metadata,
  html: postHtml || typeOfPost(module.metadata) !== "article" ? module.default.render().html.replace(/[\u0000-\u001F]/g, "").replace(/[\r\n]/g, "").match(/<main [^>]+>(.*?)<\/main>/gi)?.[0].replace(/<main [^>]+>(.*?)<\/main>/gi, "$1").replace(/( style=")(.*?)(")/gi, "").replace(/(<span>)(.*?)(<\/span>)/gi, "$2").replace(/(<main>)(.*?)(<\/main>)/gi, "$2") : "",
  type: typeOfPost(module.metadata)
})).filter((post, index) => (!filterUnlisted || !post.flags?.includes("unlisted")) && (!postLimit || index < postLimit)).sort((a, b) => Date.parse(b.published ?? b.created) - Date.parse(a.published ?? a.created));
const genTags = (posts) => [
  ...new Set(posts.reduce((acc, posts2) => posts2.tags ? [...acc, ...posts2.tags] : acc, [""]).slice(1))
];
export {
  Page$1 as P,
  genPosts as a,
  Page as b,
  metadata as c,
  genTags as g,
  metadata$1 as m
};
