import React from "react";
import Button from "./Button.js";
const Banner = ({ buttonName }) => {
    return (
        <div>
            <div className="border-b border-gray-200 dark:border-gray-700 mx-16 text-slate-300 text-center pt-16 pb-20 z-1">
                <h1 className="text-3xl">
                    Hi, I'm Abhishek Pandit! <br />
                </h1>
                <h2 className="text-2xl">A software developer.</h2>
                <p className="text-sm mt-2">Scroll Down to check my work!</p>
                <Button buttonName="Contact" />
                <Button buttonName="Resume" />
            </div>
        </div>
    );
};

export default Banner;
