import React from 'react'
import './indexExtension.css'

const Extension = () => (
    <div id="extensionPageContainer">
        <div id="extensionLeftSideBar"></div>
        <div id="extensionContent">
            <div id="extensionHeader">
                <h1>Extension Page</h1>
            </div>
            <p>
                This is where you find out what the extension does, 
                see more detailed information from the extension, 
                and find instructions on how to install it.
            </p>
        </div>
        <div id="extensionRightSideBar"></div>
    </div>
)

export default Extension