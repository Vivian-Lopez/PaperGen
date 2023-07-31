"use client";

import Papercard from "./papercard";
import { useState, useEffect } from "react";
import axios from 'axios';

const Feed = (props) => {

  // Declares the url prop which can be used to make the api request
  const url = props.url
  // This result state will be used to store the requested images in an array
  const [result, setResult] = useState([]);

  const fetchImage = async () => {
    axios.get(url).then(response => {
      console.log(response);
      setResult(response.data.results);
    })
  }

  // Fetching data from API
  useEffect(() => {
    fetchImage();
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pl-4 pr-4">
        {/* {Array.from({ length: number_images }, (_, index) => <Papercard url={url} key={index} />)} */}
        {result.map((photo, index) => (
          <Papercard url={photo.urls.full} key={index}/>
        ))}
      </div>
    </>
  )
}

export default Feed