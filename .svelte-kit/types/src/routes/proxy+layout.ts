// @ts-nocheck
import type { LayoutLoad } from './$types'

export const prerender = true
export const trailingSlash = 'always'
export const load = async ({ fetch, url }: Parameters<LayoutLoad>[0]) => ({
  path: url.pathname,
  res: await fetch('/posts.json').then(res => res.json()),
})
