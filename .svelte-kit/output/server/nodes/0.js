import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C2Esu2ax.js","_app/immutable/chunks/scheduler.FGUOCI5T.js","_app/immutable/chunks/index.CPkGT8D8.js","_app/immutable/chunks/posts.Bvxn1oms.js","_app/immutable/chunks/index.BI7v63FY.js","_app/immutable/chunks/posts.B8VZUOZP.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js"];
export const stylesheets = ["_app/immutable/assets/0.CEmd5YBu.css"];
export const fonts = [];
