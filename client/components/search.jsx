"use client";

import { useState } from "react"
import Feed from "./feed";
import process from "process";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID

const search = () => {

    const [inputValue, setinputValue] = useState('');
    const [shouldRenderComponent, setShouldRenderComponent] = useState(false);
    const [url, seturl] = useState("");

    const handleInputChange = (event) => {
        setinputValue(event.target.value);
    };

    const handleKeyPress = (event) => {
        setShouldRenderComponent(false);
        if (event.key == 'Enter') {
            seturl("https://api.unsplash.com/search/photos?page=1&query="+inputValue+"&client_id="+CLIENT_ID);
            event.preventDefault();
            setShouldRenderComponent(true);
            setinputValue('');
        }
    };
    
    return (
        <>
            <div className="pt-10 w-4/5 lg:w-3/6">
                <input
                    className="search_input"
                    type="text"
                    placeholder="Enter a prompt here E.g.: Car"
                    value={inputValue}
                    onKeyPress={handleKeyPress}
                    onChange={handleInputChange}
                />
            </div>
            <div className="pt-10">
                {shouldRenderComponent && <Feed url={url}/>}
            </div>
        </>
    );
};

export default search;