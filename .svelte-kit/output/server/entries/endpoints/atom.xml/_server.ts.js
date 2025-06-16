import { f as feed } from "../../../chunks/post_card.js";
import { f as favicon } from "../../../chunks/icon.js";
import { s as site } from "../../../chunks/site.js";
import { g as genTags, a as genPosts } from "../../../chunks/posts.js";
const render = (posts = genPosts({ filterUnlisted: true, postHtml: true, postLimit: feed.limit })) => `<?xml version='1.0' encoding='utf-8'?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>${site.protocol + site.domain}/</id>
  <title><![CDATA[${site.title}]]></title>${`
  <subtitle><![CDATA[${site.subtitle}]]></subtitle>`}${favicon ? `
  <icon>${favicon.src}</icon>` : ""}
  <link href="${site.protocol + site.domain}" />
  <link href="${site.protocol + site.domain}/atom.xml" rel="self" type="application/atom+xml" />${feed.hubs?.map((hub) => `
  <link href="${hub}" rel="hub"/>`).join("") ?? ""}
  <updated>${(/* @__PURE__ */ new Date()).toJSON()}</updated>
  <author>
    <name><![CDATA[${site.author.name}]]></name>
  </author>${genTags(posts).map((tag) => `
  <category term="${tag}" scheme="${site.protocol + site.domain}/?tags=${encodeURI(tag)}" />`).join("")}${posts.map(
  (post) => `
  <entry>
    <title type="html"><![CDATA[${post.title}]]></title>
    <link href="${site.protocol + site.domain + post.path}" />
    <id>${site.protocol + site.domain + post.path}</id>
    <published>${new Date(post.published ?? post.created).toJSON()}</published>
    <updated>${new Date(post.updated ?? post.published ?? post.created).toJSON()}</updated>${post.summary ? `
    <summary type="html"><![CDATA[${post.summary.toString()}]]></summary>` : ""}
    <content type="html">
      <![CDATA[${post.html}]]>
    </content>${post.tags?.map((tag) => `
    <category term="${tag}" scheme="${site.protocol + site.domain}/?tags=${encodeURI(tag)}" />`).join("")}
  </entry>`
).join("")}
</feed>`.trim();
const prerender = true;
const trailingSlash = "never";
const GET = async () => new Response(render(), {
  headers: {
    "content-type": "application/atom+xml; charset=utf-8"
  }
});
export {
  GET,
  prerender,
  trailingSlash
};
