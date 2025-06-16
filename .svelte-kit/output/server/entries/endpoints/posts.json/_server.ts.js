import { a as genPosts } from "../../../chunks/posts.js";
import { j as json } from "../../../chunks/index.js";
const prerender = true;
const trailingSlash = "never";
const GET = async () => json(genPosts());
export {
  GET,
  prerender,
  trailingSlash
};
