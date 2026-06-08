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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xterm$2f$addon$2d$web$2d$links$2f$lib$2f$addon$2d$web$2d$links$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@xterm/addon-web-links/lib/addon-web-links.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const TerminalComponent = ()=>{
    _s();
    const terminalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
    const symbs = [
        "%",
        "&",
        "*",
        "#",
        "[",
        "^",
        "@",
        "%",
        ")",
        "X"
    ];
    const subTitle = "thinker, programmer, learner";
    // hold the current indicies for where the animation is at
    let colAnimationIndicies = {
        col67: 25,
        col68: 25,
        col69: 25,
        col70: 25,
        col71: 25,
        col72: 25,
        col73: 25,
        col74: 25,
        col75: 25,
        col76: 25,
        col77: 25,
        col78: 25,
        col79: 25,
        col80: 25,
        col81: 25,
        col82: 25,
        col83: 25,
        col84: 25,
        col85: 25,
        col86: 25,
        col87: 25,
        col88: 25,
        col89: 25,
        col90: 25,
        col91: 25,
        col92: 25,
        col93: 25,
        col94: 25,
        col95: 25,
        col96: 25,
        col97: 25,
        col98: 25,
        col99: 25,
        col100: 25,
        col101: 25,
        col102: 25,
        col103: 25,
        col104: 25,
        col105: 25,
        col106: 25,
        col107: 25,
        col108: 25,
        col109: 25,
        col110: 25,
        col111: 25,
        col112: 25,
        col113: 25,
        col114: 25,
        col115: 25,
        col116: 25,
        col117: 25,
        col118: 25,
        col119: 25,
        col120: 25,
        col121: 25,
        col122: 25,
        col123: 25,
        col124: 25,
        col125: 25,
        col126: 25,
        col127: 25,
        col128: 25,
        col129: 25,
        col130: 25,
        col131: 25,
        col132: 25,
        col133: 25,
        col134: 25,
        col135: 25,
        col136: 25,
        col137: 25,
        col138: 25,
        col139: 25,
        col140: 25,
        col141: 25,
        col142: 25,
        col143: 25,
        col144: 25,
        col145: 25,
        col146: 25,
        col147: 25,
        col148: 25,
        col149: 25,
        col150: 25,
        col151: 25,
        col152: 25,
        col153: 25,
        col154: 25,
        col155: 25,
        col156: 25,
        col157: 25,
        col158: 25,
        col159: 25
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalComponent.useEffect": ()=>{
            if (!terminalRef.current) return;
            const term = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xterm$2f$xterm$2f$lib$2f$xterm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]({
                cursorBlink: false,
                cols: 200,
                rows: 45
            });
            term.open(terminalRef.current);
            term.loadAddon(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xterm$2f$addon$2d$web$2d$links$2f$lib$2f$addon$2d$web$2d$links$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebLinksAddon"]());
            async function titleType() {
                term.write("\x1b[102G\x1b[0m");
                term.write("\x1b[16A\x1b[0m");
                for (const character of subTitle){
                    term.write(character);
                    // TODO turn this back to 100
                    await delay(1);
                }
                term.write("\x1b8");
            }
            fetch('/title.txt').then({
                "TerminalComponent.useEffect": (response)=>response.text()
            }["TerminalComponent.useEffect"]).then({
                "TerminalComponent.useEffect": (text)=>{
                    text.split('\n').forEach({
                        "TerminalComponent.useEffect": (line)=>term.writeln(line)
                    }["TerminalComponent.useEffect"]);
                    term.write("$ ");
                    term.write("\x1b7");
                    titleType();
                }
            }["TerminalComponent.useEffect"]);
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
                        } else if (currentLine?.trim() === "about") {
                            term.writeln("");
                            fetch('/about.txt').then({
                                "TerminalComponent.useEffect": (response)=>response.text()
                            }["TerminalComponent.useEffect"]).then({
                                "TerminalComponent.useEffect": (text)=>{
                                    text.split('\n').forEach({
                                        "TerminalComponent.useEffect": (line)=>term.writeln(line)
                                    }["TerminalComponent.useEffect"]);
                                    term.write("$ ");
                                }
                            }["TerminalComponent.useEffect"]);
                        } else if (currentLine?.trim() === "connect") {
                            term.writeln("");
                            fetch('/connect.txt').then({
                                "TerminalComponent.useEffect": (response)=>response.text()
                            }["TerminalComponent.useEffect"]).then({
                                "TerminalComponent.useEffect": (text)=>{
                                    text.split('\n').forEach({
                                        "TerminalComponent.useEffect": (line)=>term.writeln(line)
                                    }["TerminalComponent.useEffect"]);
                                    term.write("$ ");
                                }
                            }["TerminalComponent.useEffect"]);
                        } else if (currentLine?.trim() === "help") {
                            term.writeln("");
                            fetch('/help.txt').then({
                                "TerminalComponent.useEffect": (response)=>response.text()
                            }["TerminalComponent.useEffect"]).then({
                                "TerminalComponent.useEffect": (text)=>{
                                    text.split('\n').forEach({
                                        "TerminalComponent.useEffect": (line)=>term.writeln(line)
                                    }["TerminalComponent.useEffect"]);
                                    term.write("$ ");
                                }
                            }["TerminalComponent.useEffect"]);
                        } else if (currentLine?.trim() === "title") {
                            // set cursor to start postition
                            term.write("\x1b[?25l");
                            term.write("\x1b[25;67H\x1b[0m");
                            async function oneColumn(symbs) {
                                while(input_buffer.length === 0){
                                    const currentColIndex = Math.floor(Math.random() * (159 - 67 + 1)) + 67;
                                    // const currentColIndex:number = 113
                                    const currentCol = "col" + currentColIndex.toString();
                                    const currentRowIndex = colAnimationIndicies[currentCol];
                                    // TODO go back and delete the characters in the line
                                    if (currentRowIndex > 40) {
                                        for(let i = 0; i < 15; i++){
                                            term.write(" ");
                                            // move 1 left
                                            term.write("\x1b[1D\x1b[0m");
                                            // move 1 up
                                            term.write("\x1b[1A\x1b[0m");
                                        }
                                        colAnimationIndicies[currentCol] = 25;
                                    } else {
                                        // move cursor to position described above
                                        term.write(`\x1b[${currentRowIndex};${currentColIndex}H\x1b[0m`);
                                        term.write(symbs[Math.floor(Math.random() * symbs.length)]);
                                        // term.write("X")
                                        // move 1 left
                                        term.write("\x1b[1D\x1b[0m");
                                        // move 1 down
                                        term.write("\x1b[1B\x1b[0m");
                                        // update new cursor position
                                        colAnimationIndicies[currentCol]++;
                                        // console.log(colAnimationIndicies[currentCol])
                                        await delay(20);
                                    }
                                }
                            }
                            oneColumn(symbs);
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
        lineNumber: 279,
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