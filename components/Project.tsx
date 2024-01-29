import React from 'react';
import ProjectCard from './Helper/ProjectCard';

const Project = () => {
    return (
            <div id="project" className="pt-[7rem] pb-[5rem] bg-gray-900">
                <div className="text-center">
                    <p className="heading__mini">Recent Works</p>
                    <h1 className="heading__primary">
                        My Best <span className="text-yellow-300">Projects</span>
                    </h1>
                </div>
                <ProjectCard
                    title="E-commerce Website"
                    tech1="React"
                    tech2="Next Js"
                    tech3="Tailwind"
                    tech4="TypeScript"
                    image="/images/p1.png"
                />
                <ProjectCard
                    title="Portfolio Website"
                    tech1="React"
                    tech2="Next Js"
                    tech3="Tailwind"
                    tech4="TypeScript"
                    image="/images/p2.png"
                />
                <ProjectCard
                    title="Fullstack Food delivery Webapp"
                    tech1="React"
                    tech2="Next Js"
                    tech3="Tailwind"
                    tech4="TypeScript"
                    image="/images/p3.png"
                />
                <ProjectCard
                    title="Travel WebSite"
                    tech1="React"
                    tech2="Next Js"
                    tech3="Tailwind"
                    tech4="TypeScript"
                    image="/images/p4.png"
                />
            </div>
    )
}

export default Project