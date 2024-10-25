import React from "react";
import Banner from "../banner/Banner.js";
import ProjectCard from "../card/ProjectCard.js";
import { projectData } from "../../utils/projectData.js";

const Project = () => {
    return (
        <div>
            <Banner />

            <div className="border-b border-gray-200 dark:border-gray-700 flex flex-wrap justify-evenly gap-y-5 mx-20 my-8">
                {projectData.map((project, index) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </div>
    );
};

export default Project;
