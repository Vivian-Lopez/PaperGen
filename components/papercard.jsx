"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import wallpaper from '/public/assets/images/wallpaper.jpeg'

const handleImageClick = () => {
  console.log('Image Clicked');
}

const Papercard = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   fetch('/api/hello')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData()
  //     setLoading(false)
  //     })
  // }, [])

  return (
    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
          data-te-ripple-init
          data-te-ripple-color="light">
        <Image 
            src={wallpaper}
            alt="wallpaper"
            width={300}
            height={300}
        />
        <a onClick={handleImageClick}>
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
        {/* <h1>{data.name}</h1> */}
    </div>
  )
}

export default Papercard