import React from "react";
import {
    FaLinkedin,
    FaSquareInstagram,
    FaSquareFacebook,
    FaSquareGithub,
} from "react-icons/fa6";
const FooterSocial = () => {
    return (
        <div className="flex gap-x-10">
            <div className="text-slate-300 flex-col hover:text-neutral-950 cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5">
                <FaSquareGithub size={24} />
            </div>
            <div className="text-slate-300 flex-col hover:text-blue-800 cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5">
                <FaSquareFacebook size={24} />
            </div>
            <div className="text-slate-300 flex-col hover:text-rose-900 cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5">
                <FaSquareInstagram size={24} />
            </div>
            <div className="text-slate-300 flex-col hover:text-blue-500 cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5">
                <FaLinkedin size={24} />
            </div>
        </div>
    );
};

export default FooterSocial;
