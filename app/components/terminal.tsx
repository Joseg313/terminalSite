import React, { useEffect, useRef} from "react";
import { Terminal } from '@xterm/xterm'
import { WebLinksAddon } from "@xterm/addon-web-links";


const TerminalComponent = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
  const symbs = ["%","&","*","#","[","^","@","%",")","X"]


  useEffect (() => {
    if (!terminalRef.current) return;
    const term = new Terminal({
      cursorBlink: false,
      cols: 200,
      rows: 45
    });
    
    term.open(terminalRef.current)
    
 
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
        } else if (currentLine?.trim() === "help") {
          term.writeln("")
          fetch('/help.txt')  
            .then((response) => response.text())
            .then((text) => {
              text.split('\n').forEach((line) => term.writeln(line))
              term.write("$ ")
            })
        } else if (currentLine?.trim() === "title") {
          // set cursor to start postition
          term.write("\x1b[?25l")
          
          term.write("\x1b[65G \x1b[0m")
          term.write("\x1b[19A \x1b[0m")
          
          // oneLetter writes a single raindrop column
          async function oneColumn(characters:Array<string>) {
            while (input_buffer.length === 0) {
              for (let i = 0; i<15; i++){
                
                term.write(symbs[Math.floor(Math.random() * symbs.length)])
                await delay(200)
                // move 1 left
                term.write("\x1b[1D\x1b[0m")
                term.write(symbs[Math.floor(Math.random() * symbs.length)])

                // move 1 left
                term.write("\x1b[1D\x1b[0m")
                // move 1 down
                term.write("\x1b[1B\x1b[0m")

              }
              term.write("\x1b[15A\x1b[0m")
              for (let i = 0; i<15; i++){
                
                term.write(" ")
                
          

                // move 1 left
                term.write("\x1b[1D\x1b[0m")
                // move 1 down
                term.write("\x1b[1B\x1b[0m")

              }
              term.write("\x1b[15A\x1b[0m")
            }
            
          }
          
          oneColumn(symbs)
          
          // TODO call this function below for each character in symbs and pass in the symb on each iteration
          
          // async function lineOfLetters() {
          //   for (const symb of symbs) {
          //     oneLetter(symb)
          //     await delay(1000);
          //   }
          // }
          // lineOfLetters()

          // term.write("\x1b[?25h \x1b[0m")
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

