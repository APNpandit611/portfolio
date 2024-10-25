import React from "react";

const Button = ({ buttonName }) => {
    return (
        <>
            <button
                type="submit"
                className="hover:text-red-500 cursor-pointer duration-300 ease mx-3 mt-5 decoration-solid bg-slate-800 text-slate-300 shadow-2xl shadow-indigo-500/40 py-2 px-5 rounded-lg hover:-translate-y-0.5 "
            >
                {buttonName}
            </button>
        </>
    );
};

export default Button;
