"use client";
import React from 'react';
import TerminalComponent from './components/terminal'

import { Poppins } from 'next/font/google';
import dynamic from 'next/dynamic'
const BannerComponentNoSSR = dynamic(()=> import ('./components/banner'), { ssr: false})

export default function Home() {
  
  
  return (
    <>
      <BannerComponentNoSSR/>
      <TerminalComponent/>
    </>
  );
}

