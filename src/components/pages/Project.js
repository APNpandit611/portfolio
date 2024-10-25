import React from "react";
import Banner from "../banner/Banner.js";
import ProjectCard from "../card/ProjectCard.js";

const Project = () => {
    const projectArray = [1, 2, 3, 4,5,6,7,8,9,10];
    return (
        <div>
            <Banner />

            <div className="border-b border-gray-200 dark:border-gray-700 flex flex-wrap justify-evenly gap-y-5 mx-20 my-8">
                {projectArray.map((item, index) => (
                    <ProjectCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default Project;
