import React from "react";

const Email = () => {
    return (
        <div>
            <div className="fixed bottom-0 right-12 mx-auto min-w-7xl hidden md:block">
                {/* Email address text */}
                <div className="w-0 mb-44 ml-0.5 rotate-90 text-sm text-slate-300 hover:text-red-500 cursor-pointer duration-300 ease transition transform hover:-translate-y-0.5">
                    <p>apnpanditt@gmail.com</p>
                </div>

                {/* Vertical line */}
                <div className="h-[200px] w-[4px] bottom-0 bg-slate-300"></div>
            </div>
        </div>
        
    );
};

export default Email;
