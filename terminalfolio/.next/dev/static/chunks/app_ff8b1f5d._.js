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
;
const TerminalComponent = ()=>{
    _s();
    const terminalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
    const subTitle = "thinker, programmer, learner";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalComponent.useEffect": ()=>{
            // available symbols for the raindrop animation
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
            // hold the current indicies for where the animation is at
            const colAnimationIndicies = {
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
            if (!terminalRef.current) return;
            const term = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xterm$2f$xterm$2f$lib$2f$xterm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]({
                cursorBlink: true,
                cols: 200,
                rows: 45
            });
            term.open(terminalRef.current);
            term.loadAddon(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$xterm$2f$addon$2d$web$2d$links$2f$lib$2f$addon$2d$web$2d$links$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebLinksAddon"]());
            // functions
            // types the subtitle of big name
            async function titleType() {
                term.write("\x1b[102G\x1b[0m");
                term.write("\x1b[16A\x1b[0m");
                for (const character of subTitle){
                    // turn color to green
                    term.write("\x1b[38;5;82m");
                    term.write(character);
                    await delay(50);
                }
                term.write("\x1b8");
            }
            // prints the large title, subtitle, and raindrop animation
            async function startUp(symbs) {
                term.focus();
                const response = await fetch('/title.txt');
                const text = await response.text();
                text.split('\n').forEach({
                    "TerminalComponent.useEffect.startUp": (line)=>term.writeln(line)
                }["TerminalComponent.useEffect.startUp"]);
                term.write("$ ");
                term.write("\x1b7");
                await titleType();
                term.write("press any key to stop animation and continue");
                // make cursor invisible
                term.write("\x1b[?25l");
                await delay(1000);
                raindropAnimation(symbs);
            }
            // animates the termnial with matrix style raindrops
            // TODO when the animation is stopped reset al lthe indicies to 25
            async function raindropAnimation(symbs) {
                // save current position
                term.write("\x1b7");
                // make cursor invisible
                term.write("\x1b[?25l");
                term.write("\x1b[25;67H\x1b[0m");
                while(input_buffer.length === 0){
                    const currentColIndex = Math.floor(Math.random() * (159 - 67 + 1)) + 67;
                    const currentCol = "col" + currentColIndex.toString();
                    const currentRowIndex = colAnimationIndicies[currentCol];
                    // move cursor to position described above
                    term.write(`\x1b[${currentRowIndex};${currentColIndex}H\x1b[0m`);
                    if (currentRowIndex > 40) {
                        for(let i = 0; i < 15; i++){
                            // move 1 up
                            term.write("\x1b[1A\x1b[0m");
                            term.write(" ");
                            // move 1 left
                            term.write("\x1b[1D\x1b[0m");
                        }
                        colAnimationIndicies[currentCol] = 25;
                        console.log(colAnimationIndicies[currentCol]);
                        await delay(10);
                    } else {
                        term.write(symbs[Math.floor(Math.random() * symbs.length)]);
                        // move 1 left
                        term.write("\x1b[1D\x1b[0m");
                        // move 1 down
                        term.write("\x1b[1B\x1b[0m");
                        // update new cursor position
                        colAnimationIndicies[currentCol]++;
                        await delay(5);
                    }
                }
                // reset the indicies to 25
                Object.keys(colAnimationIndicies).forEach({
                    "TerminalComponent.useEffect.raindropAnimation": (key)=>colAnimationIndicies[key] = 25
                }["TerminalComponent.useEffect.raindropAnimation"]);
                // restore cursor to the start position
                term.write("\x1b8");
                term.writeln("");
                term.writeln("Welcome to my site. Type help to see a list of commands");
                term.write("$ ");
                // make cursor visible
                term.write("\x1b[?25h");
                // write the symbol the user just typed in to end the animation
                term.write(input_buffer);
            }
            // logic begins below
            // begin the startup screen
            startUp(symbs);
            // stores what the user currently has typed in 
            let input_buffer = "";
            // handles when the user types
            term.onData({
                "TerminalComponent.useEffect": (data)=>{
                    input_buffer = input_buffer + data;
                    // handles when the user hits enter key
                    if (data.endsWith("\r")) {
                        // get the contents of current line
                        const currentLine = input_buffer.slice(0, -1);
                        console.log("currentLine, ", currentLine);
                        input_buffer = "";
                        // clear function
                        if (currentLine?.trim() === "clear") {
                            term.reset();
                            term.write("$ ");
                        // about function
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
                        // connect function 
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
                        // help function
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
                        // title function
                        } else if (currentLine?.trim() === "title") {
                            term.reset();
                            startUp(symbs);
                        // experience function
                        } else if (currentLine?.trim() === "experience") {
                            term.writeln("");
                            term.writeln("Coming Soon");
                            term.write("$ ");
                        // if the user input is empty
                        } else if (currentLine?.trim().length === 0) {
                            term.writeln("");
                            term.write("$ ");
                        // error if no function is recognized
                        } else {
                            term.writeln("");
                            term.writeln("not found");
                            term.write("$ ");
                        }
                    } else if (data.endsWith("\x7f")) {
                        // remove the \x7f
                        input_buffer = input_buffer.slice(0, -1);
                        if (input_buffer.length > 0 && input_buffer !== "\x7f") {
                            input_buffer = input_buffer.slice(0, -1);
                            term.write('\b');
                            term.write(" ");
                            term.write('\b');
                        }
                    // disable arrow keys
                    } else if (data.endsWith("\x1b[A") || data.endsWith("\x1b[B") || data.endsWith("\x1b[C") || data.endsWith("\x1b[D")) {
                        input_buffer = input_buffer.slice(0, -1);
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
        lineNumber: 320,
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
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$terminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 12,
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