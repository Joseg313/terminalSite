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

    return () => {
      term.dispose();
    };
  }, [])
  return <div ref={terminalRef}></div>;
};

export default TerminalComponent;

