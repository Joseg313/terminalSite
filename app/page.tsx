"use client";

import dynamic from "next/dynamic";

const Terminal = dynamic(() => import("./components/xterm"), { ssr: false });

export default function Home() {
  
  return (
    <>
      <h1>hello world</h1>
      <Terminal />
    </>
  );
}
