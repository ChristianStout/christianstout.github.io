import { s as site } from "./site.js";
const handle = async ({ event, resolve }) => await resolve(event, {
  transformPageChunk: ({ html }) => html.replace('<html lang="en">', `<html lang="${site.lang}">`)
});
export {
  handle
};
