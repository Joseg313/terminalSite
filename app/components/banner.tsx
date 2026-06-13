"use client"
import React from 'react';
import {useMediaQuery} from 'react-responsive';

const BannerComponent = (() => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
    })
    const isTabletOrMobile = useMediaQuery({ 
        query: '(max-width: 1000px)' 
    })
    return (
        <>
            {isDesktopOrLaptop &&
                <h2 style={{ fontFamily:"manrope" }}>&quot;It&apos;s over Anakin. I have the high ground.&quot; -Obi-Wan</h2>
            }
            
            {isTabletOrMobile &&
                <p>Please View on Laptop or Desktop for Best Experience</p> 
            }
        </>
    )
})

export default BannerComponent;