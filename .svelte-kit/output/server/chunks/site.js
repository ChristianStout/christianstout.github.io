var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const site = {
  author: {
    avatar: "/assets/a.png",
    bio: "A nerd's outlet.",
    name: "Christian Stout",
    status: "👨🏻‍💻"
  },
  description: "Just a person looking to do his best",
  domain: define_import_meta_env_default.URARA_SITE_DOMAIN ?? "urara-demo.netlify.app",
  lang: "en-US",
  protocol: define_import_meta_env_default.URARA_SITE_PROTOCOL ?? false ? "http://" : "https://",
  subtitle: "Sweet & Powerful SvelteKit Blog Template",
  themeColor: "#3D4451",
  title: "Home"
};
export {
  site as s
};
