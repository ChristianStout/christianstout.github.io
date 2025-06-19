import type { DateConfig, FeedConfig, FooterConfig, HeadConfig, HeaderConfig, ThemeConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: '🖨 Light',
  },
  {
    name: 'dracula',
    text: '🧛 Dark',
  },
  {
    name: 'valentine',
    text: '🌸 Valentine',
  },
  // {
  //   name: 'aqua',
  //   text: '💦 Aqua',
  // },
  // {
  //   name: 'synthwave',
  //   text: '🌃 Synthwave',
  // },
  {
    name: 'night',
    text: '🌃 Night',
  },
  // {
  //   name: 'lofi',
  //   text: '🎶 Lo-Fi',
  // },
  // {
  //   name: 'lemonade',
  //   text: '🍋 Lemonade',
  // },
  // {
  //   name: 'cupcake',
  //   text: '🧁 Cupcake',
  // },
  // {
  //   name: 'garden',
  //   text: '🏡 Garden',
  // },
  // {
  //   name: 'retro',
  //   text: '🌇 Retro',
  // },
  // {
  //   name: 'black',
  //   text: '🖤 Black',
  // },
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      link: '/about-me',
      text: 'About Me',
    },
    {
      link: '/about-me/socials',
      text: 'Socials',
    },
  ],
}

export const footer: FooterConfig = {
  nav: [
    {
      link: 'https://bsky.app/profile/gaylambda.bsky.social',
      text: 'Bluesky',
    },
    {
      link: 'https://github.com/ChristianStout/christianstout.github.io',
      text: 'Github',
    },
    {
      link: 'mailto:christian.allen.stout@gmail.com',
      text: 'Email',
    },
  ],
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    day: 'numeric',
    month: 'short',
    weekday: 'long',
    year: '2-digit',
  },
}

export const feed: FeedConfig = {}
