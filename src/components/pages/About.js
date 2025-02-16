import React from "react";
import Banner from "../banner/Banner.js";
import { FaCode, FaDatabase, FaLightbulb, FaProjectDiagram } from "react-icons/fa";

const About = () => {
    return (
        <div className="min-h-screen text-slate-300">
            <Banner buttonName="Contact" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-white">
                    About Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-16">
                    {/* Left Column */}
                    
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-indigo-400">
                            <h3 className="text-2xl font-semibold mb-4 flex items-center">
                                <FaCode className="mr-3 text-indigo-400" />
                                Technical Skills
                            </h3>
                            <p className="text-md leading-relaxed">
                                Proficient in JavaScript, React, Node.js, and MongoDB, along with HTML, CSS, SQL basics, and RESTful APIs. Experienced in Google OAuth integration, responsive web design, and database management.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-400">
                            <h3 className="text-2xl font-semibold mb-4 flex items-center">
                                <FaDatabase className="mr-3 text-purple-400" />
                                Programming Foundations
                            </h3>
                            <p className="text-md leading-relaxed">
                                Familiar with data structures, algorithms, and object-oriented programming from university coursework, giving me a well-rounded approach to problem-solving.
                            </p>
                        </div>
                    

                    {/* Right Column */}
                    
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-indigo-400">
                            <h3 className="text-2xl font-semibold mb-4 flex items-center">
                                <FaLightbulb className="mr-3 text-indigo-400" />
                                Problem Solver
                            </h3>
                            <p className="text-md leading-relaxed">
                                I enjoy working through complex issues and finding efficient, practical solutions. My goal is to build technology that is not only functional but also intuitive and accessible.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-400">
                            <h3 className="text-2xl font-semibold mb-4 flex items-center">
                                <FaProjectDiagram className="mr-3 text-purple-400" />
                                Projects & Experience
                            </h3>
                            <p className="text-md leading-relaxed">
                                Over the years, I have worked on diverse projects, including full-stack web applications, dynamic social feed platforms, and UI/UX design concepts.
                            </p>
                        </div>
                    
                </div>

                {/* Call to Action */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-indigo-400 mt-16 mx-16 text-center">
                {/* <div className="mt-16 mx-16 text-center"> */}
                    <p className="text-lg mb-6">
                        I’m continuously expanding my knowledge and actively improving my full stack development skills, ready to adapt to new technologies and challenges.
                    </p>
                    <button
                        
                        className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                    >
                        <a href="mailto:apnpanditt@gmail.com">

                        Let's Work Together
                        </a>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default About;