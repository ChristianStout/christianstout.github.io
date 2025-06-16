import { s as site } from "../../../chunks/site.js";
import { a as genPosts } from "../../../chunks/posts.js";
const render = () => `<?xml version='1.0' encoding='utf-8'?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
    <url>
      <loc>${site.protocol + site.domain}</loc>
    </url>
    ${genPosts().map(
  (post) => `
        <url>
            <loc>${site.protocol + site.domain + post.path}</loc>
            <lastmod>${new Date(post.updated ?? post.published ?? post.created).toISOString()}</lastmod>
            <priority>0.5</priority>
        </url>`
).join("")}
  </urlset>`.trim();
const prerender = true;
const trailingSlash = "never";
const GET = async () => new Response(render(), {
  headers: {
    "content-type": "application/xml; charset=utf-8"
  }
});
export {
  GET,
  prerender,
  trailingSlash
};
