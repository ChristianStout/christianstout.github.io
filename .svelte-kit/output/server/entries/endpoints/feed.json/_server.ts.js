import { f as feed } from "../../../chunks/post_card.js";
import { f as favicon, a as any } from "../../../chunks/icon.js";
import { s as site } from "../../../chunks/site.js";
import { a as genPosts } from "../../../chunks/posts.js";
import { j as json } from "../../../chunks/index.js";
const render = (posts = genPosts({ filterUnlisted: true, postHtml: true, postLimit: feed.limit })) => ({
  authors: [
    {
      avatar: site.author.avatar,
      name: site.author.name,
      url: site.protocol + site.domain
    }
  ],
  description: site.description,
  favicon: favicon?.src,
  feed_url: `${site.protocol + site.domain}/feed.json`,
  home_page_url: site.protocol + site.domain,
  hubs: feed.hubs?.map((hub) => ({
    type: "WebSub",
    url: hub
  })),
  icon: any["512"].src ?? any["192"].src,
  items: posts.map((post) => ({
    _indieweb: {
      "in-reply-to": post.in_reply_to,
      "type": post.type
    },
    content_html: post.html,
    date_modified: post.updated ?? post.published ?? post.created,
    date_published: post.published ?? post.created,
    id: post.path.slice(1),
    image: post.image,
    summary: post.summary,
    tags: post.tags,
    title: post.title,
    url: site.protocol + site.domain + post.path
  })),
  language: site.lang,
  title: site.title,
  version: "https://jsonfeed.org/version/1.1"
});
const prerender = true;
const trailingSlash = "never";
const GET = async () => json(render(), {
  headers: {
    "content-type": "application/feed+json; charset=utf-8"
  }
});
export {
  GET,
  prerender,
  trailingSlash
};
