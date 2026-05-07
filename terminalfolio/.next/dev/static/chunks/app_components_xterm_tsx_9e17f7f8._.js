(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/xterm.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/node_modules_xterm_css_xterm_c06e86aa.css",
    "included": [
      "[project]/node_modules/xterm/css/xterm.css [app-client] (css)"
    ]
  },
  "static/chunks/app_components_xterm_tsx_7cb30afc._.js",
  "static/chunks/app_components_xterm_tsx_8ff1e124._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/app/components/xterm.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);