"use client";
import { XTerm } from "react-xtermjs";


export default function Terminal() {
  
  const onData = (data: string) => {
    console.log(`Received data: ${data}`)
       
  }

  const onResize = ({ cols, rows }: { cols: number; rows: number }) => {
    console.log(`Terminal resized to ${cols} columns and ${rows} rows`)
  }

  return (
    <>
      
      <XTerm
        
        options={{ cursorBlink: true }}
        style={{ width: '100%', height: '100%' }}
        listeners={{
          onData,
          onResize,
        }}
      
        
      />
    </>
  );
}