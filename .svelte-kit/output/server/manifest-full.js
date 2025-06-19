export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/a.png","assets/any@180.png","assets/any@192.png","assets/any@512.png","assets/connections.jpg","assets/maskable@192.png","assets/maskable@512.png","favicon.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".avif":"image/avif"},
	_: {
		client: {"start":"_app/immutable/entry/start.DBlf0ZEg.js","app":"_app/immutable/entry/app.Cw43gTGx.js","imports":["_app/immutable/entry/start.DBlf0ZEg.js","_app/immutable/chunks/entry.CalXcNp2.js","_app/immutable/chunks/scheduler.FGUOCI5T.js","_app/immutable/chunks/index.BI7v63FY.js","_app/immutable/entry/app.Cw43gTGx.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.FGUOCI5T.js","_app/immutable/chunks/index.CPkGT8D8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about-me",
				pattern: /^\/about-me\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about-me/socials",
				pattern: /^\/about-me\/socials\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/atom.xml",
				pattern: /^\/atom\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/atom.xml/_server.ts.js'))
			},
			{
				id: "/feed.json",
				pattern: /^\/feed\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/feed.json/_server.ts.js'))
			},
			{
				id: "/manifest.webmanifest",
				pattern: /^\/manifest\.webmanifest\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/manifest.webmanifest/_server.ts.js'))
			},
			{
				id: "/posts.json",
				pattern: /^\/posts\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/posts.json/_server.ts.js'))
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.ts.js'))
			},
			{
				id: "/tags.json",
				pattern: /^\/tags\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/tags.json/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {"_app/immutable/assets/favicon.DiqaJUa5.avif":22996}
	}
}
})();
