export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/a.png","assets/any@180.png","assets/any@192.png","assets/any@512.png","assets/connections.jpg","assets/maskable@192.png","assets/maskable@512.png","favicon.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.BRbkfktI.js","app":"_app/immutable/entry/app.WS8umKSS.js","imports":["_app/immutable/entry/start.BRbkfktI.js","_app/immutable/chunks/entry.B8SAEP_M.js","_app/immutable/chunks/scheduler.FGUOCI5T.js","_app/immutable/chunks/index.BI7v63FY.js","_app/immutable/entry/app.WS8umKSS.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.FGUOCI5T.js","_app/immutable/chunks/index.CPkGT8D8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
