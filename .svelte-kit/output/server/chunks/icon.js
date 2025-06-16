import { s as site } from "./site.js";
const favicon = {
  sizes: "48x48",
  src: `${site.protocol + site.domain}/favicon.png`,
  type: "image/png"
};
const any = {
  180: {
    sizes: "180x180",
    src: `${site.protocol + site.domain}/assets/any@180.png`,
    type: "image/png"
  },
  192: {
    sizes: "192x192",
    src: `${site.protocol + site.domain}/assets/any@192.png`,
    type: "image/png"
  },
  512: {
    sizes: "512x512",
    src: `${site.protocol + site.domain}/assets/any@512.png`,
    type: "image/png"
  }
};
const maskable = {
  192: {
    sizes: "192x192",
    src: `${site.protocol + site.domain}/assets/maskable@192.png`,
    type: "image/png"
  },
  512: {
    sizes: "512x512",
    src: `${site.protocol + site.domain}/assets/maskable@512.png`,
    type: "image/png"
  }
};
export {
  any as a,
  favicon as f,
  maskable as m
};
