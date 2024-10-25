import React from "react";

const ProjectCard = (props) => {
    const { title, code, live, image} = props.project
    return (
        <div className="border-2 border-gray-500 rounded-md w-full md:w-2/5 mb-8">
            <img
                src={image}
                alt="Project Logo"
                className="object-cover rounded-t-lg w-full h-48 sm:h-64 md:h-72 lg:h-80"
            />

            <div className="p-4 flex flex-col gap-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 mb-2 text-center">
                    {title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-400 text-center mb-4">
                    A brief description of the project goes here, explaining key
                    features and technology stack.
                </p>

                <div className="flex flex-col sm:flex-row justify-evenly mt-3 space-y-3 sm:space-y-0 sm:space-x-4">
                    <a href={code}>

                    <button
                        type="button"
                        className="text-xs sm:text-sm bg-slate-800 text-slate-300 py-2 px-4 rounded-lg hover:bg-indigo-500 hover:text-white transition transform duration-300 hover:scale-105 cursor-pointer"
                    >
                        View Code
                    </button>
                    </a>
                    <a href={live}>

                    <button
                        type="button"
                        className="text-xs sm:text-sm bg-slate-800 text-slate-300 py-2 px-5 rounded-lg hover:bg-indigo-500 hover:text-white transition transform duration-300 hover:scale-105 cursor-pointer"
                    >
                        Live Demo
                    </button>
                    </a>
                </div>
            </div>
        </div>

        // <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        //     <div className="bg-slate-700 rounded-lg shadow-2xl shadow-indigo-500/40 p-4">
        //         <img
        //             src={image}
        //             alt="Project-image"
        //             className="object-cover h-auto max-w-full mx-auto"
        //         />
        //         <div className="flex flex-col md:flex-row sm:flex-row justify-around mt-3">
        //             <button
        //                 type="button"
        //                 className="text-md bg-slate-800 text-slate-300 py-2 px-3 rounded-lg hover:text-red-500 decoration-solid cursor-pointer duration-300 hover:-translate-y-0.5 mt-2 sm:mt-0"
        //             >
        //                 View Code
        //             </button>
        //             <button
        //                 type="button"
        //                 className="text-md bg-slate-800 text-slate-300 py-2 px-5 rounded-lg hover:text-red-500 decoration-solid cursor-pointer duration-300 hover:-translate-y-0.5 mt-2 sm:mt-0"
        //             >
        //                 Live Demo
        //             </button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ProjectCard;
