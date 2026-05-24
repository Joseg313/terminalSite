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
    
    term.onData((data) => {
      console.log(data)
      if (data === "\r") {
        // get the contents of current line
        const buffer = term.buffer.active
        const currentLine = buffer.getLine(buffer.cursorY)?.translateToString()
        
        
        if (currentLine?.trim() === "clear") {
          // TODO look into this and try to change to term.clear in the future
          term.reset()
        
        } else if (currentLine?.trim().length === 0) {
          term.writeln("")
          
        } else {
          term.writeln("")
          term.write("Not Found\n")
        }
      
      } else {
        term.write(data)

      }

    });
    
    // term.onKey(ev => {
    //   if (ev.domEvent.key === "Enter") { 
    //     term.clear()
        //select current line
        // const buffer = term.buffer.active
        // const currentLine = buffer.getLine(buffer.cursorY)?.translateToString()
        // console.log(typeof currentLine)
        // console.log(currentLine)
        // if (currentLine.trim().length === 0) {
        //   term.writeln("")
        //   term.write("$  ")
        // } else if (currentLine == "clear") {
        //   term.clear()
        // } else {
        //   term.writeln("Not Found")
        // }
        
        // term.clearSelection()
        
        
        
      
    //   }
    // })
    

    return () => {
      term.dispose();
    };
  }, [])
  return <div ref={terminalRef}></div>;
}; 

export default TerminalComponent;

