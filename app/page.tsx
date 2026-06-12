"use client";
import React from 'react';
import TerminalComponent from './components/terminal'
import {useMediaQuery} from 'react-responsive';
import { Poppins } from 'next/font/google';
// import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';

// const Example = () => {
//   const isDesktopOrLaptop = useMediaQuery({
//     query: '(min-width: 1224px)'
//   })
//   const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
//   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
//   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
//   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

//   return (
//     <div>
//       <h1>Device Test!</h1>
//       {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
//       {isBigScreen && <p>You have a huge screen</p>}
//       {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
//       <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
//       {isRetina && <p>You are retina</p>}
//     </div>
//   )
// }

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1000px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  return (
    <>
      {isDesktopOrLaptop &&
        <h2 style={{ fontFamily:"manrope" }}>&quot;An idiot admires complextiy, a genius admires simplicity&quot; -Terry A. Davis</h2>
      }
      
      {isTabletOrMobile &&
        <p>Please View on Laptop or Desktop for Best Experience</p> 
      }
      <TerminalComponent/>
    </>
  );
}

