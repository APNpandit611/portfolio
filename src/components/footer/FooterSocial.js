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
            <a href="https://github.com/APNpandit611">
                <div className="text-slate-300 flex-col hover:text-black cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5">
                    <FaSquareGithub size={24} />
                </div>
            </a>
            <a href="https://www.facebook.com/Abhi9821290007/1">
                <div className="text-slate-300 flex-col hover:text-[#1877F2] cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5">
                    <FaSquareFacebook size={24} />
                </div>
            </a>
            <a href="https://www.instagram.com/disboyhigh/">
                <div className="text-slate-300 flex-col hover:text-[#E4405F] cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5">
                    <FaSquareInstagram size={24} />
                </div>
            </a>
            <a href="https://www.linkedin.com/in/abhishek-pandit-02544415a">
                <div className="text-slate-300 flex-col hover:text-[#0077B5] cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5">
                    <FaLinkedin size={24} />
                </div>
            </a>
        </div>
    );
};

export default FooterSocial;
