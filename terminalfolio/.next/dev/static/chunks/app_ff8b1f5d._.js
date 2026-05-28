(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/terminal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xterm$2f$xterm$2f$lib$2f$xterm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xterm/xterm/lib/xterm.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const TerminalComponent = ()=>{
    _s();
    const terminalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalComponent.useEffect": ()=>{
            if (!terminalRef.current) return;
            const term = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xterm$2f$xterm$2f$lib$2f$xterm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]();
            term.open(terminalRef.current);
            term.writeln('Welcome to my portfolio');
            // TODO look into how to get the .txt file displayed
            // fetch('public\ascii-art.txt')
            //   .then((response) => response.json())
            // term.write("$ ")
            let input_buffer = "";
            // handles when the user types
            term.onData({
                "TerminalComponent.useEffect": (data)=>{
                    // console.log(data)
                    input_buffer = input_buffer + data;
                    // console.log("inputbuffer:", input_buffer)
                    // handles when the user hits enter key
                    if (data.endsWith("\r")) {
                        // get the contents of current line
                        const currentLine = input_buffer.slice(0, -1);
                        console.log("currentLine, ", currentLine);
                        input_buffer = "";
                        if (currentLine?.trim() === "clear") {
                            // TODO look into this and try to change to term.clear in the future
                            term.reset();
                            term.write("$ ");
                        } else if (currentLine?.trim().length === 0) {
                            term.writeln("");
                            term.write("$ ");
                        } else {
                            term.writeln("");
                            term.writeln("not found");
                            term.write("$ ");
                        }
                    } else if (data.endsWith("\x7f")) {
                        // remove the \x7f
                        input_buffer = input_buffer.slice(0, -1);
                        // console.log("input buffer len b4 slice", input_buffer.length, "input buffer b4 slice", input_buffer)
                        if (input_buffer.length > 0 && input_buffer !== "\x7f") {
                            input_buffer = input_buffer.slice(0, -1);
                            // console.log("input after slicing", input_buffer)
                            // console.log("inputlength after slicing", input_buffer.length)
                            term.write('\b');
                            term.write(" ");
                            term.write('\b');
                        }
                    } else {
                        term.write(data);
                    }
                }
            }["TerminalComponent.useEffect"]);
            return ({
                "TerminalComponent.useEffect": ()=>{
                    term.dispose();
                }
            })["TerminalComponent.useEffect"];
        }
    }["TerminalComponent.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: terminalRef
    }, void 0, false, {
        fileName: "[project]/app/components/terminal.tsx",
        lineNumber: 82,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TerminalComponent, "kEUNaEDsXq6NFlYUDdaogKRz/hM=");
_c = TerminalComponent;
const __TURBOPACK__default__export__ = TerminalComponent;
var _c;
__turbopack_context__.k.register(_c, "TerminalComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$terminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/terminal.tsx [app-client] (ecmascript)");
"use client";
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "hello world"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$terminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_ff8b1f5d._.js.map