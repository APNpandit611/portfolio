import React from "react";

const Button = ({ buttonName, link }) => {
    return (
        <>
            <a href={link}>
                <button
                    type="submit"
                    className=" hover:bg-indigo-500 hover:text-slate-300 cursor-pointer duration-300 ease mx-3 mt-5 decoration-solid bg-slate-800 text-slate-300 shadow-2xl shadow-indigo-500/40 py-2 px-5 rounded-lg hover:-translate-y-0.5 "
                >
                    {buttonName}
                </button>
            </a>
        </>
    );
};

export default Button;
