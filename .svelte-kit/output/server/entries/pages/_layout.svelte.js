import { c as create_ssr_component, a as add_attribute, e as each, b as escape, v as validate_component, d as add_classes } from "../../chunks/ssr.js";
import { f as favicon, a as any } from "../../chunks/icon.js";
import { h as head, p as post, a as header, t as theme } from "../../chunks/post_card.js";
import { s as site } from "../../chunks/site.js";
import { t as title, p as posts, a as tags } from "../../chunks/title.js";
import { g as genTags } from "../../chunks/posts.js";
const Head_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-10yve3l_START -->${favicon ? `<link${add_attribute("href", favicon.src, 0)} rel="shortcut icon"${add_attribute("sizes", favicon.sizes, 0)}${add_attribute("type", favicon.type, 0)}>` : ``}${any["180"] ? `<link${add_attribute("href", any["180"].src, 0)} rel="apple-touch-icon"${add_attribute("sizes", any["180"].sizes, 0)}${add_attribute("type", any["180"].type, 0)}>` : ``}${any["192"] ? `<link${add_attribute("href", any["192"].src, 0)} rel="icon"${add_attribute("sizes", any["192"].sizes, 0)}${add_attribute("type", any["192"].type, 0)}>` : ``}<!-- HEAD_svelte-10yve3l_END -->`, ""}`;
});
const Head_static = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1laq3tv_START -->${head.me ? `${each(head.me, (href) => {
    return `<link${add_attribute("href", href, 0)} rel="me">`;
  })}` : ``}${post.comment?.webmention?.username ? `<link href="${"https://webmention.io/" + escape(post.comment.webmention.username, true) + "/webmention"}" rel="webmention"> <link href="${"https://webmention.io/" + escape(post.comment.webmention.username, true) + "/xmlrpc"}" rel="pingback">` : ``}<!-- HEAD_svelte-1laq3tv_END -->`, ""} ${validate_component(Head_icon, "Icon").$$render($$result, {}, {}, {})}`;
});
const Header_nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { nav } = $$props;
  let { path } = $$props;
  let { title: title2 } = $$props;
  let { scrollY } = $$props;
  let { pin } = $$props;
  if ($$props.nav === void 0 && $$bindings.nav && nav !== void 0)
    $$bindings.nav(nav);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.scrollY === void 0 && $$bindings.scrollY && scrollY !== void 0)
    $$bindings.scrollY(scrollY);
  if ($$props.pin === void 0 && $$bindings.pin && pin !== void 0)
    $$bindings.pin(pin);
  return `  <div class="dropdown lg:hidden"><label class="btn btn-square btn-ghost" for="navbar-dropdown" tabindex="0" data-svelte-h="svelte-18njhny"><span class="i-heroicons-outline-menu-alt-1"></span></label> <ul class="${[
    "menu menu-compact dropdown-content bg-base-100 text-base-content shadow-lg rounded-box min-w-max max-w-52 p-2",
    !pin ? "hidden" : ""
  ].join(" ").trim()}" id="navbar-dropdown" tabindex="0">${each(nav, ({ children, link, text }) => {
    return `${link && !children ? `<li><a${add_attribute("href", link, 0)}${add_classes((link === path ? "font-bold" : "").trim())}>${escape(text)}</a> </li>` : `${children ? `<li tabindex="0"><span class="${[
      "justify-between gap-1 max-w-[13rem]",
      children.some(({ link: link2 }) => link2 === path) ? "font-bold" : ""
    ].join(" ").trim()}">${escape(text)} <span class="i-heroicons-solid-chevron-right mr-2"></span></span> <ul class="bg-base-100 text-base-content shadow-lg p-2">${each(children, ({ link: link2, text: text2 }) => {
      return `<li><a${add_attribute("href", link2, 0)}${add_classes((link2 === path ? "font-bold" : "").trim())}>${escape(text2)}</a> </li>`;
    })}</ul> </li>` : ``}`}`;
  })}</ul></div> <div class="${[
    "swap order-last hidden lg:inline-grid",
    scrollY > 32 && title2 ? "swap-active" : ""
  ].join(" ").trim()}"><button class="${[
    "swap-on btn btn-ghost text-base font-normal normal-case transition-all duration-200",
    scrollY < 32 || !title2 ? "hidden" : ""
  ].join(" ").trim()}">${escape(title2)}</button> <ul class="${["swap-off menu menu-horizontal p-0", scrollY > 64 && title2 ? "hidden" : ""].join(" ").trim()}">${each(nav, ({ children, link, text }) => {
    return `${link && !children ? `<li><a class="${["!rounded-btn", link === path ? "font-bold" : ""].join(" ").trim()}"${add_attribute("href", link, 0)}>${escape(text)}</a> </li>` : `${children ? `<li><span class="${[
      "!rounded-btn gap-1",
      children.some(({ link: link2 }) => link2 === path) ? "font-bold" : ""
    ].join(" ").trim()}">${escape(text)} <span class="i-heroicons-solid-chevron-down -mr-1"></span></span>  <ul class="menu rounded-box bg-base-100 text-base-content shadow-lg p-2" tabindex="0">${each(children, ({ link: link2, text: text2 }) => {
      return `<li><a${add_attribute("href", link2, 0)}${add_classes((link2 === path ? "font-bold" : "").trim())}>${escape(text2)}</a> </li>`;
    })}</ul> </li>` : ``}`}`;
  })}</ul></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  let title$1;
  let currentTheme;
  let currentThemeColor;
  let pin = true;
  let percent;
  let [scrollY, lastY] = [0, 0];
  title.subscribe((storedTitle2) => title$1 = storedTitle2);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  {
    if (scrollY) {
      pin = !!(lastY - scrollY > 0 || scrollY === 0);
      lastY = scrollY;
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-yn0p46_START --><meta${add_attribute("content", currentThemeColor, 0)} name="theme-color"><!-- HEAD_svelte-yn0p46_END -->`, ""}  <header class="${[
    "fixed z-50 w-full transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[4.125rem]" + escape(scrollY > 32 && "backdrop-blur !border-base-content/10 bg-base-100/30 md:bg-base-200/30", true),
    !pin && scrollY > 0 ? "-translate-y-32" : ""
  ].join(" ").trim()}" id="header">${`<div class="navbar"><div class="navbar-start">${header.nav ? `${validate_component(Header_nav, "Nav").$$render(
    $$result,
    {
      nav: header.nav,
      path,
      pin,
      scrollY,
      title: title$1
    },
    {},
    {}
  )}` : ``} <a class="btn btn-ghost normal-case text-lg" href="/">${escape(site.title)}</a></div> <div class="navbar-end">${header.search ? `<button aria-label="search" class="btn btn-square btn-ghost" tabindex="0" data-svelte-h="svelte-17v5buh"><span class="i-heroicons-outline-search"></span></button>` : ``} <div class="dropdown dropdown-end" id="change-theme">  <div class="btn btn-square btn-ghost" tabindex="0" data-svelte-h="svelte-1xk2wyd"><span class="i-heroicons-outline-color-swatch"></span></div>   <ul class="${[
    "flex flex-nowrap shadow-2xl menu dropdown-content bg-base-100 text-base-content rounded-box w-52 p-2 gap-2 overflow-y-auto max-h-[21.5rem]",
    !pin ? "hidden" : ""
  ].join(" ").trim()}" tabindex="0">${each(theme, ({ name, text }) => {
    return `<button class="${[
      "btn btn-ghost w-full hover:bg-primary group rounded-lg flex bg-base-100 p-2 transition-all",
      (currentTheme === name ? "border-2" : "") + " " + (currentTheme === name ? "border-primary" : "")
    ].join(" ").trim()}"${add_attribute("data-theme", name, 0)}><p class="flex-1 text-left text-base-content group-hover:text-primary-content transition-color">${escape(text ?? name)}</p> <div class="grid grid-cols-4 gap-0.5 m-auto">${each(["bg-primary", "bg-secondary", "bg-accent", "bg-neutral"], (bg) => {
      return `<div${add_attribute("class", `${bg} w-1 h-4 rounded-btn`, 0)}></div>`;
    })}</div> </button>`;
  })}</ul></div></div></div>`}</header> <button aria-label="scroll to top" class="${[
    "fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out" + escape(
      "btn-ghost bg-base-100/30 md:bg-base-200/30",
      true
    ),
    (scrollY ? "opacity-100" : "") + " " + (!pin || scrollY === 0 ? "translate-y-24" : "")
  ].join(" ").trim()}" id="totop"> <div class="radial-progress text-accent transition-all duration-500 ease-in-out group-hover:text-[color-mix(in_oklab,oklch(var(--a)),black_7%)] col-start-1 row-start-1"${add_attribute("style", `--size:4rem; --thickness: 0.25rem; --value:${percent};`, 0)}></div> <div class="${[
    "border-4 border-base-content/10 group-hover:border-transparent col-start-1 row-start-1 rounded-full w-full h-full p-4 grid duration-500 ease-in-out",
    ""
  ].join(" ").trim()}" data-svelte-h="svelte-1lpt3af"><span class="i-heroicons-solid-chevron-up !w-6 !h-6"></span></div></button>`;
});
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path = "" } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  return `<div class="bg-base-100 md:bg-base-200 min-h-screen pt-16 md:pb-8 lg:pb-16">${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { path, res } = data;
  posts.set(res);
  tags.set(genTags(res));
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    if (data)
      path = data.path;
  }
  return `${validate_component(Head_static, "Head").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, { path }, {}, {})} ${validate_component(Transition, "Transition").$$render($$result, { path }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
