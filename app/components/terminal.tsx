import React, { useEffect, useRef} from "react";
import { Terminal } from '@xterm/xterm'
import { WebLinksAddon } from "@xterm/addon-web-links";
import '@xterm/xterm/css/xterm.css'

const TerminalComponent = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
  
  const subTitle = "thinker, programmer, learner"
  

  useEffect (() => {
    // available symbols for the raindrop animation
    const symbs = ["%","&","*","#","[","^","@","%",")","X"]
    // hold the current indicies for where the animation is at
    const colAnimationIndicies = {
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
      col159: 25,
      col160: 25,
      col161: 25,
      col162: 25,
      col163: 25,
      col164: 25,
      col165: 25,
      col166: 25,
      col167: 25,
      col168: 25,
      col169: 25,
      col170: 25,
      col171: 25,
      col172: 25,
      col173: 25,
      col174: 25,
      col175: 25,
      col176: 25,
      col177: 25,
      col178: 25,
      col179: 25
    } 
    
    
    if (!terminalRef.current) return;
    const term = new Terminal({
      cursorBlink: true,
      cols: 200,
      rows: 45
    });
    term.open(terminalRef.current)
    term.loadAddon(new WebLinksAddon());
    
    // functions
    
    // types the subtitle of big name
    async function titleType() {
      term.write("\x1b[119G\x1b[0m")
      term.write("\x1b[16A\x1b[0m")      
      for (const character of subTitle) {
        // turn color to green
        term.write("\x1b[38;5;82m")
        term.write(character)
        await delay(50)
      }
      term.write("\x1b8")
    }
    
    // prints the large title, subtitle, and raindrop animation
    async function startUp(symbs:Array<string>) {
      term.focus()
      const response = await fetch('/title.txt')  
      const text = await response.text()
      text.split('\n').forEach((line) => term.writeln(line))
      term.write("$ ")
      term.write("\x1b7")
      await titleType()
      term.write("\x1b[1mpress any key to stop animation and continue\x1b[22m")
      // make cursor invisible
      term.write("\x1b[?25l")
      await delay(1000)
      raindropAnimation(symbs)  
    }
    
    // animates the termnial with matrix style raindrops
    // TODO when the animation is stopped reset al lthe indicies to 25
    async function raindropAnimation(symbs:Array<string>) {
      // save current position
      term.write("\x1b7")
      // make cursor invisible
      term.write("\x1b[?25l")
          
      // move cursor to start postion
      term.write("\x1b[25;87H\x1b[0m")
      while (input_buffer.length === 0) {
        const currentColIndex:number = (Math.floor(Math.random() * (179 - 87 + 1)) + 87)
 
        const currentCol:string = "col"+currentColIndex.toString()
        const currentRowIndex:number = colAnimationIndicies[currentCol as keyof typeof colAnimationIndicies]
        // move cursor to position described above
        term.write(`\x1b[${currentRowIndex};${currentColIndex}H\x1b[0m`)
        if (currentRowIndex > 40) {
                
          for (let i = 0; i<15; i++){
            
            // move 1 up
            term.write("\x1b[1A\x1b[0m")
            term.write(" ")
            // move 1 left
            term.write("\x1b[1D\x1b[0m")
            
          }
          colAnimationIndicies[currentCol as keyof typeof colAnimationIndicies] = 25
          
          await delay(10)
          } else {    
            term.write(symbs[Math.floor(Math.random() * symbs.length)])
            
            // move 1 left
            term.write("\x1b[1D\x1b[0m")
            // move 1 down
            term.write("\x1b[1B\x1b[0m")

            // update new cursor position
            colAnimationIndicies[currentCol as keyof typeof colAnimationIndicies]++
            
            await delay(5)
          }
          
        }
        // reset the indicies to 25
        Object.keys(colAnimationIndicies).forEach(key => colAnimationIndicies[key as keyof typeof colAnimationIndicies] = 25)
        // restore cursor to the start position
        term.write("\x1b8")
        term.writeln("")
        term.writeln("Welcome to my site. Type help to see a list of commands")
        term.write("$ ")
        // make cursor visible
        term.write("\x1b[?25h")
        // write the symbol the user just typed in to end the animation, in yellow 
        term.write(`\x1b[38;5;220m${input_buffer}\x1b[0m`)  
         
    }




    // logic begins below
    
    // begin the startup screen
    startUp(symbs)
    
    // stores what the user currently has typed in 
    let input_buffer = ""
    
    
    // handles when the user types
    term.onData((data) => {
      input_buffer = input_buffer + data
      // handles when the user hits enter key
      if (data.endsWith("\r")) {
        
        // get the contents of current line
        const currentLine = input_buffer.slice(0, -1)
        console.log("currentLine, ", currentLine)
        input_buffer = ""
        // clear function
        if (currentLine?.trim() === "clear") { 
          term.reset()
          term.write("$ ")
        // about function
        } else if (currentLine?.trim() === "about") {
          term.writeln("")
          fetch('/about.txt')  
            .then((response) => response.text())
            .then((text) => {
              text.split('\n').forEach((line) => term.writeln(line))
              term.write("$ ")
            })
        // connect function 
        } else if (currentLine?.trim() === "connect") {
          term.writeln("")
          fetch('/connect.txt')  
            .then((response) => response.text())
            .then((text) => {
              text.split('\n').forEach((line) => term.writeln(line))
              term.write("$ ")
            })
        // help function
        } else if (currentLine?.trim() === "help") {
          
          term.writeln("")
          fetch('/help.txt')  
            .then((response) => response.text())
            .then((text) => {
              text.split('\n').forEach((line) => term.writeln(line))
              term.write("$ ")
            })
          
        // title function
        } else if (currentLine?.trim() === "title") {
          term.reset()
          startUp(symbs)     
        // experience function
        } else if (currentLine?.trim() === "experience") {
          term.writeln("")
          term.writeln("Coming Soon")
          term.write("$ ")    
        // if the user input is empty
        } else if (currentLine?.trim().length === 0) {
          term.writeln("")
          term.write("$ ")
        // error if no function is recognized
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
        
        if (input_buffer.length > 0 && input_buffer !== "\x7f") { 
          input_buffer = input_buffer.slice(0, -1)
          
          
          term.write('\b')
          term.write(" ")
          term.write('\b')
        }
      // disable arrow keys
      } else if (data.endsWith("\x1b[A") || data.endsWith("\x1b[B") || data.endsWith("\x1b[C") || data.endsWith("\x1b[D")) {
        input_buffer = input_buffer.slice(0, -1)
        
      } else {
        // turn color to yellow and write what the user types
        term.write(`\x1b[38;5;220m${data}\x1b[0m`)  
      }

    });
    
    

    return () => {
      term.dispose();
    };
  }, [])
  return <div ref={terminalRef}></div>;
}; 

export default TerminalComponent;

