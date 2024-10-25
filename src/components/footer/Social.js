import React from "react";
import {
    FaLinkedin,
    FaSquareInstagram,
    FaSquareFacebook,
    FaSquareGithub,
} from "react-icons/fa6";

const Social1 = () => {
    return (
        <div className=" fixed bottom-0 left-10">
            <div className="text-slate-300 flex-col mt-8 hover:text-neutral-950 cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5"><FaSquareGithub size={20} /></div>
            <div className="text-slate-300 flex-col mt-8 hover:text-blue-800 cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5"><FaSquareFacebook size={20}/></div>
            <div className="text-slate-300 flex-col mt-8 hover:text-rose-900 cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5"><FaSquareInstagram size={20} /></div>
            <div className="text-slate-300 flex-col mt-8 mb-8 hover:text-blue-500 cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5"><FaLinkedin   size={20} /></div>
            <div className="relative h-[200px] w-[4px] bottom-0 bg-slate-300 left-2"></div>
        </div>
    );
};

export default Social1;
