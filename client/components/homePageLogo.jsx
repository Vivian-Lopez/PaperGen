"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import paper from '/public/assets/icons/paper.png'

const HomePageLogo = () => {
    return (
        <>
            {/* Logo which links to Homepage */}
            <Link href="/" className="relative flex flex-row items-center justify-center" onClick={() => window.location.reload(true)}>
                <Image 
                    src={paper}
                    alt="logo image"
                    width={40}
                    height={40}
                    className="pr-2"
                />
                <p className="font-inter text-gray-200 invisible md:visible">PaperGen</p>
            </Link>
        </>
    )
}

export default HomePageLogo