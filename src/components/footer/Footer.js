import React from "react";
import Social from "./Social.js"
import Email from "./Email.js"


const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <div className="relative text-center w-full">
            <p  className="py-8 text-slate-300 opacity-50 text-sm mt-1">Abhishek Pandit &#169; {date} - Finland</p>
            <Social />
            <Email />
        </div>
    )
}

export default Footer;
