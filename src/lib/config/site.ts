import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/a.png',
    bio: 'A nerd\'s outlet.',
    name: 'Christian Stout',
    status: '👨🏻‍💻',
  },
  description: 'Just a person looking to do his best',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  themeColor: '#3D4451',
  title: 'Home',
}
