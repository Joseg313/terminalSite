import React, { useEffect, useRef} from "react";
import { Terminal } from 'xterm'
import 'xterm/css/xterm.css';


const TerminalComponent = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  
  


  useEffect (() => {
    if (!terminalRef.current) return;
    const term = new Terminal();
    
    term.open(terminalRef.current)
    term.writeln('Welcome to portfolio')
    
    term.onData((data) => term.write(data));
    
    term.onKey(ev => {
      if (ev.domEvent.key === "Enter") { 
        
        //select current line
        console.log(term.rows)
        const currentLineIndex = 1
        term.selectLines(currentLineIndex, currentLineIndex)
        const currentLine = term.getSelection()
        term.writeln(currentLine)
        // if (currentLine.trim().length == 0) {
        //   term.writeln("")
        //   term.write("$  ")
        // } else if (currentLine === "clear") {
        //   term.clear()
        // }
        
        term.clearSelection()
        
        
        // if empty just writeln("")

        // if something on line, read and store it and try to match it with something
      
      }
    })
    

    return () => {
      term.dispose();
    };
  }, [])
  return <div ref={terminalRef}></div>;
}; 

export default TerminalComponent;

