"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import wallpaper from '/public/assets/images/wallpaper.jpeg'
import axios from 'axios';
import { env } from 'process';

const handleImageClick = () => {
  console.log('Image Clicked');
}

const Papercard = () => {
  const [image, setImage] = useState("Lodaing");

  // Fetching data from Flask API Backend
  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
      response => response.json()
    ).then(
      data => {
        setImage(data.image)
      }
    )
  }, [])

  return (
    // This div class does an animation when clicked
    <div 
      className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
      data-te-ripple-init
      data-te-ripple-color="light"
    >

      <Image src={wallpaper} alt="placeholder" width={300} height={300} />
      {image}
      {/* Adding an onCLick action which logs a click to the console and gives an animation */}
      <a onClick={handleImageClick}>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"/>
      </a>
    </div>
  )
}

export default Papercard