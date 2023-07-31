"use client";

import React from 'react'
import { useState } from 'react';

const Pink = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleButtonClick = () => {
    // Update the background color when the button is clicked
    setBackgroundColor('pink'); // You can set your desired background color here
  };

  return (
    <button
        type="button" 
        class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
        onClick={handleButtonClick}
    >
        {/* <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg> */}
        <span class="sr-only">Icon description</span>
    </button>
  )
}

export default Pink