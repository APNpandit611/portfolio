import React from "react";
import Social from "./Social.js"
import Email from "./Email.js"
import FooterSocial from "./FooterSocial.js";


const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <div className="flex flex-col gap-y-6 text-center w-full mb-6">
            <div className="md:hidden flex items-center justify-center">
                <FooterSocial/>
            </div>
            <p  className="text-slate-300 opacity-50 text-sm">Abhishek Pandit &#169; {date} - Finland</p>
            <Social />
            <Email />
            
        </div>
    )
}

export default Footer;
