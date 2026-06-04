import React, { useEffect, useRef} from "react";
import { Terminal } from '@xterm/xterm'
import { WebLinksAddon } from "@xterm/addon-web-links";

const TerminalComponent = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  
  


  useEffect (() => {
    if (!terminalRef.current) return;
    const term = new Terminal({
      cursorBlink: true,
      cols: 200,
      rows: 45
    });
    
    term.open(terminalRef.current)
    
    const activateLink = (event, uri)=> {
      window.open(uri, '_blank')?.focus();
    };

    const linkHandler = {
      activate: (event, text, range) => { activateLink(event, text); } ,
      hover: (event, text, range) => { /* nothing, by default */},
      leave: (event, text, range) => { /* nothing, by default */},
      allowNonHttpProtocols: true
    };

    const webLinksAddon = new WebLinksAddon(activateLink, linkHandler);
    term.loadAddon(new WebLinksAddon());
    
    // fetch('/ascii-art2.txt')
    fetch('/name.txt')  
      .then((response) => response.text())
      .then((text) => {
        text.split('\n').forEach((line) => term.writeln(line))
        term.write("$ ")
      })

    let input_buffer = ""
    
    
    // handles when the user types
    term.onData((data) => {
      // console.log(data)
      input_buffer = input_buffer + data
      // console.log("inputbuffer:", input_buffer)
      
      // handles when the user hits enter key
      if (data.endsWith("\r")) {
        
        // get the contents of current line
        const currentLine = input_buffer.slice(0, -1)
        console.log("currentLine, ", currentLine)
        input_buffer = ""
        if (currentLine?.trim() === "clear") {
          // TODO look into this and try to change to term.clear in the future
          term.reset()
          term.write("$ ")
        } else if (currentLine?.trim() === "about") {
          term.writeln("")
          fetch('/about.txt')  
            .then((response) => response.text())
            .then((text) => {
              text.split('\n').forEach((line) => term.writeln(line))
              term.write("$ ")
            })
        } else if (currentLine?.trim() === "connect") {
          term.writeln("")
          fetch('/connect.txt')  
            .then((response) => response.text())
            .then((text) => {
              text.split('\n').forEach((line) => term.writeln(line))
              term.write("$ ")
            })
          
        } else if (currentLine?.trim().length === 0) {
          term.writeln("")
          term.write("$ ")
        } else {
          term.writeln("")
          term.writeln("not found")
          term.write("$ ")
        }
      }
      // below handles the backspace key
      else if (data.endsWith("\x7f")) {
        // remove the \x7f
        input_buffer = input_buffer.slice(0, -1)
        // console.log("input buffer len b4 slice", input_buffer.length, "input buffer b4 slice", input_buffer)
        if (input_buffer.length > 0 && input_buffer !== "\x7f") { 
          input_buffer = input_buffer.slice(0, -1)
          // console.log("input after slicing", input_buffer)
          // console.log("inputlength after slicing", input_buffer.length)
          
          term.write('\b')
          term.write(" ")
          term.write('\b')
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

