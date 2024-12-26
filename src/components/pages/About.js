import React from 'react'
import Banner from "../banner/Banner.js";

const About = () => {
  return (
    <div className='h-[100%]'>
        <Banner buttonName="Contact" />

        <div className="text-slate-300 mx-8 my-4 md:mx-12 p-16 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-center mb-10">About Me</h2>
            <p className="text-md leading-relaxed m-5">
                I'm Abhishek Pandit, a passionate and driven software developer specializing in frontend and 
                full-stack development. Currently based in Kokkola, Finland, finished my Bachelor's from Centria University of Applied Sciences. With hands-on experience in 
                designing robust web applications and scalable systems using the MERN stack, I strive to create 
                impactful solutions that bridge technology and user experience.
            </p>
            <p className="text-md leading-relaxed m-5">
                Over the years, I have worked on diverse projects, including full-stack web applications, dynamic 
                social feed platforms, and UI/UX design concepts. My goal is to build technology that is not only 
                functional but also intuitive and accessible.
            </p>
        </div>

        

        
    </div>
);
}

export default About
