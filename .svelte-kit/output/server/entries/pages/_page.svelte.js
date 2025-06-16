import { c as create_ssr_component, a as add_attribute, b as escape, e as each, f as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { H as Head, P as Post_card, F as Footer } from "../../chunks/post_card.js";
import { s as site } from "../../chunks/site.js";
import { t as title, p as posts, a as tags } from "../../chunks/title.js";
const Index_profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-card flex flex-col gap-4 sticky top-24 card card-body p-4 items-right xl:border-2 xl:py-8 border-base-content/10 xl:ml-auto xl:mr-8 xl:max-w-xs"><a class="hidden u-url u-uid"${add_attribute("href", site.protocol + site.domain, 0)}>${escape(site.author.name)}</a> <figure class="relative mx-auto group">${`<img${add_attribute("alt", site.author.name, 0)} class="u-photo rounded-full shadow-xl hover:shadow-2xl transition-shadow z-10 w-24 h-24 md:w-32 md:h-32"${add_attribute("src", site.author.avatar, 0)}>`} ${`<div class="absolute z-20 rounded-full w-8 h-8 md:w-10 md:h-10 bottom-0 right-0 bg-base-100 shadow-xl text-lg md:text-xl text-center py-0.5 md:py-1.5">${escape(site.author.status)}</div>`}</figure> <div class="text-center flex flex-col gap-2"><h2 class="text-2xl font-bold mt-0 mb-2 p-name">${escape(site.author.name)}</h2> <p class="opacity-75 p-note"><!-- HTML_TAG_START -->${site.author.bio}<!-- HTML_TAG_END --></p> ${site.author.metadata ? `<div class="flex gap-1 flex-wrap justify-center">${each(site.author.metadata, ({ icon, link, rel, text }) => {
    return `${link ? `<a class="${[
      "btn btn-sm btn-ghost normal-case gap-2 u-url",
      !text ? "btn-square" : ""
    ].join(" ").trim()}"${add_attribute("href", link, 0)}${add_attribute("rel", rel ?? "me noopener noreferrer external", 0)} target="_blank">${icon ? `<span class="${escape(icon, true) + " !w-5 !h-5"}">${escape(icon)}</span>` : ``} ${text ? `${escape(text)}` : ``} </a>` : `<button class="${["btn btn-sm btn-ghost normal-case gap-2", !text ? "btn-square" : ""].join(" ").trim()}">${icon ? `<span class="${escape(icon, true) + " !w-5 !h-5"}">${escape(icon)}</span>` : ``} ${text ? `${escape(text)}` : ``} </button>`}`;
  })}</div>` : ``}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let allPosts;
  let allTags;
  let [posts$1, tags$1, years] = [[], [], []];
  title.set("");
  {
    posts.subscribe((storedPosts2) => allPosts = storedPosts2.filter((post) => !post.flags?.includes("unlisted")));
  }
  {
    tags.subscribe((storedTags2) => allTags = storedTags2);
  }
  {
    if (tags$1) {
      posts$1 = !tags$1 ? allPosts : allPosts.filter((post) => tags$1.every((tag) => post.tags?.includes(tag)));
    }
  }
  {
    if (posts$1.length > 1)
      years = [new Date(posts$1[0].published ?? posts$1[0].created).getFullYear()];
  }
  $$unsubscribe_page();
  return `${validate_component(Head, "Head").$$render($$result, {}, {}, {})} <div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap h-feed"><div class="flex-1 w-full max-w-screen-md order-first mx-auto xl:mr-0 xl:ml-8 xl:max-w-md">${validate_component(Index_profile, "Profile").$$render($$result, {}, {}, {})}</div> <div class="flex-1 w-full max-w-screen-md xl:order-last mx-auto xl:ml-0 xl:mr-8 xl:max-w-md">${allTags && Object.keys(allTags).length > 0 ? `<div class="flex xl:flex-wrap gap-2 overflow-x-auto xl:overflow-x-hidden overflow-y-hidden max-h-24 my-auto xl:max-h-fit max-w-fit xl:max-w-full pl-8 md:px-0 xl:pl-8 xl:pt-8">${each(allTags, (tag) => {
    return `<button class="${[
      "btn btn-sm btn-ghost normal-case border-dotted border-base-content/20 border-2 mt-4 mb-8 xl:m-0",
      (tags$1.includes(tag) ? "!btn-secondary" : "") + " " + (tags$1.includes(tag) ? "shadow-lg" : "")
    ].join(" ").trim()}"${add_attribute("id", tag, 0)}>#${escape(tag)} </button>`;
  })}</div>` : ``}</div> <div class="flex-none w-full max-w-screen-md mx-auto xl:mx-0"> ${``} <main class="flex flex-col relative bg-base-100 md:bg-transparent md:gap-8 z-10" itemprop="mainEntityOfPage" itemscope itemtype="https://schema.org/Blog">${each(posts$1, (post, index) => {
    let year = new Date(post.published ?? post.created).getFullYear();
    return ` ${!years.includes(year) ? `<div class="divider my-4 md:my-0">${escape(years.push(year) && year)} </div>` : ``} <div class="rounded-box transition-all duration-500 ease-in-out hover:z-30 hover:shadow-lg md:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-0.5">${validate_component(Post_card, "Post").$$render(
      $$result,
      {
        decoding: index < 5 ? "auto" : "async",
        loading: index < 5 ? "eager" : "lazy",
        post,
        preview: true
      },
      {},
      {}
    )} </div>`;
  })}</main> <div class="${["sticky bottom-0 md:static md:mt-8", "hidden"].join(" ").trim()}"><div class="divider mt-0 mb-8 hidden lg:flex"></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
