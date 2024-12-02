import React from "react";
import {
    FaLinkedin,
    FaSquareInstagram,
    FaSquareFacebook,
    FaSquareGithub,
} from "react-icons/fa6";

const Social1 = () => {
    return (
        <div className="fixed bottom-0 left-10 hidden md:block">
            <a href="https://github.com/APNpandit611">
                <div className="text-slate-300 flex-col mt-8 hover:text-black cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5">
                    <FaSquareGithub size={20} />
                </div>
            </a>
            <a href="https://www.facebook.com/Abhi9821290007/">
                <div className="text-slate-300 flex-col mt-8 hover:text-[#1877F2] cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5">
                    <FaSquareFacebook size={20} />
                </div>
            </a>
            <a href="https://www.instagram.com/disboyhigh/">
                <div className="text-slate-300 flex-col mt-8 hover:text-[#E4405F] cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5">
                    <FaSquareInstagram size={20} />
                </div>
            </a>
            <a href="https://www.linkedin.com/in/abhishek-pandit-02544415a/">
                <div className="text-slate-300 flex-col mt-8 mb-8 hover:text-[#0077B5] cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5">
                    <FaLinkedin size={20} />
                </div>
            </a>

            {/* White Bar */}
            <div className="relative h-[200px] w-[4px] bottom-0 bg-slate-300 left-2"></div>
        </div>
    );
};

export default Social1;
