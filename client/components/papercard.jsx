import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const imageUrl = "http://localhost:8080/api/getImage";

const handleImageClick = () => {
  console.log('Image Clicked');
}

const Papercard = (props) => {
  const url = props.url;
  const [img, setImg] = useState();

  // The following fetch image is for an API that returns an image only
  // const fetchImage = async () => {
  //   const res = await fetch(url);
  //   const imageBlob = await res.blob();
  //   const imageObjectURL = URL.createObjectURL(imageBlob);
  //   setImg(imageObjectURL);
  // };

  return (
    // This div class does an animation when clicked
    <div 
      className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      <Image src={url} alt="placeholder" width={300} height={300} />
      {/* <p className="flex-center text-gray-200">Placeholder Image</p> */}
      {/* Adding an onCLick action which logs a click to the console and gives an animation */}
      <a onClick={handleImageClick}>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"/>
      </a>
    </div>
  )
}

export default Papercard