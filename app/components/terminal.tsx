import React, { useEffect, useRef} from "react";
import { Terminal } from '@xterm/xterm'


const TerminalComponent = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  
  


  useEffect (() => {
    if (!terminalRef.current) return;
    const term = new Terminal();
    
    term.open(terminalRef.current)
    term.writeln('Welcome to my portfolio')
    term.write("$ ")
    let input_buffer = ""
    term.onData((data) => {
      // console.log(data)
      input_buffer = input_buffer + data
      console.log("inputbuffer:", input_buffer)
      if (data.endsWith("\r")) {
        // get the contents of current line
        // const buffer = term.buffer.active
        // const currentLine = buffer.getLine(buffer.cursorY)?.translateToString()
        const currentLine = input_buffer.slice(0, -1)
        console.log("currentLine0, ", currentLine)
        input_buffer = ""
        if (currentLine?.trim() === "clear") {
          // TODO look into this and try to change to term.clear in the future
          term.reset()
          term.write("$ ")
        } else if (currentLine?.trim().length === 0) {
          term.writeln("")
          term.write("$ ")
        } else {
          term.writeln("")
          term.writeln("not found")
          term.write("$ ")
        }
      
      } else {
        term.write(data)

      }

    });
    
    

    return () => {
      term.dispose();
    };
  }, [])
  return <div ref={terminalRef}></div>;
}; 

export default TerminalComponent;

