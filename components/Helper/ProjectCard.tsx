import React from 'react';
import Image from "next/image";

interface Props {
    title: string;
    description: string;
    code: string;
    demo?: string;
    tech1: string;
    tech1Lien?: string;
    tech2: string;
    tech2Lien?: string;
    tech3?: string;
    tech3Lien?: string;
    tech4?: string;
    tech4Lien?: string;
    tech5?: string;
    tech5Lien?: string;
    tech6?: string;
    tech6Lien?: string;
    image: string;
}

const ProjectCard: React.FC<Props> = ({ title,description, code, demo, tech1, tech1Lien, tech2, tech2Lien, tech3, tech3Lien, tech4, tech4Lien, tech5, tech5Lien, tech6, tech6Lien, image}: Props) => {
    return (
        <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div
                className="p-4 rounded-xl relative cursor-pointer hover:rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                    className="object-contain rounded-xl mx-auto shadow-md"
                />
            </div>
            <div>
                <h1 className="text-[25px] text-white">{title}</h1>
                <p className="text-white opacity-65 text-[15px] mt-[1rem]">
                    {description}
                </p>
                <div className="mt-[1.3rem] grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-[2rem]">
                    <h1 className="px-6 py-3 bg-blue-700 text-white rounded-lg text-center"><a href={tech1Lien} target="_blank" rel='noopener noreferrer'>{tech1}</a>
                    </h1>
                    <h1 className="px-6 py-3 bg-green-600 text-white rounded-lg text-center"><a href={tech2Lien}
                                                                                                target="_blank"
                                                                                                rel='noopener noreferrer'>{tech2}</a>
                    </h1>
                    {tech3 && <h1 className="px-6 py-3 bg-white text-black rounded-lg text-center"><a href={tech3Lien}
                                                                                                      target="_blank"
                                                                                                      rel='noopener noreferrer'>{tech3}</a>
                    </h1>}
                    {tech4 &&
                        <h1 className="px-6 py-3 bg-yellow-800 text-white rounded-lg text-center"><a href={tech4Lien}
                                                                                                     target="_blank"
                                                                                                     rel='noopener noreferrer'>{tech4}</a>
                        </h1>}
                    {tech5 &&
                        <h1 className="px-6 py-3 bg-yellow-500 text-white rounded-lg text-center"><a href={tech5Lien}
                                                                                                     target="_blank"
                                                                                                     rel='noopener noreferrer'>{tech5}</a>
                        </h1>}
                    {tech6 && <h1 className="px-6 py-3 bg-red-800 text-white rounded-lg text-center"><a href={tech6Lien}
                                                                                                        target="_blank"
                                                                                                        rel='noopener noreferrer'>{tech6}</a>
                    </h1>}
                </div>
                <div className="mt-[1.3rem] grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 gap-[2rem]">
                    <h1 className="px-6 py-3 bg-green-600 text-white rounded-lg text-center"><a href={code}
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer">Code</a>
                    </h1>
                    {demo && <h1 className="px-6 py-3 bg-white text-black rounded-lg text-center"><a href={demo}
                                                                                                     target="_blank"
                                                                                                     rel="noopener noreferrer">Demo</a>
                    </h1>}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
