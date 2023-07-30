"use client";

import { useState } from "react"
import Feed from "./feed";

const default_image_name = "sunset";

const search = () => {

    const [inputValue, setinputValue] = useState('');
    const [shouldRenderComponent, setShouldRenderComponent] = useState(false);

    const handleInputChange = (event) => {
        setinputValue(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            event.preventDefault();
            if (inputValue==default_image_name) {
                setShouldRenderComponent(true);
            } else {
                setShouldRenderComponent(false);
            }
            setinputValue('');
        }
    };
    
    return (
        <>
            <div className="pt-10 w-4/5 sm:w-2/5">
                <input
                    className="search_input"
                    type="text"
                    placeholder="Enter a prompt here"
                    value={inputValue}
                    onKeyPress={handleKeyPress}
                    onChange={handleInputChange}
                />
            </div>
            <div className="pt-10">
                {shouldRenderComponent && <Feed />}
            </div>
        </>
    );
};

export default search;