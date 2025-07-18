import { a as any, m as maskable } from "../../../chunks/icon.js";
import { s as site } from "../../../chunks/site.js";
const prerender = true;
const trailingSlash = "never";
const GET = () => new Response(
  JSON.stringify(
    {
      background_color: site.themeColor,
      description: site.description,
      display: "standalone",
      icons: [
        ...Object.values(any).filter((icon) => icon.sizes !== "180x180").map((icon) => ({ ...icon, purpose: "any" })),
        ...Object.values(maskable).map((icon) => ({ ...icon, purpose: "maskable" }))
      ],
      id: `${site.protocol + site.domain}/`,
      lang: site.lang,
      name: site.title,
      orientation: "portrait",
      scope: "/",
      short_name: site.title,
      start_url: "/",
      theme_color: site.themeColor
    },
    null,
    2
  ),
  {
    headers: {
      "Content-Type": "application/manifest+json; charset=utf-8"
    }
  }
);
export {
  GET,
  prerender,
  trailingSlash
};
