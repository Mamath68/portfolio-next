import React from 'react'
import SkillCard from './Helper/SkillCard'

const Skills = () => {
    return (
        <div id="skill" className="pt-[7rem] pb-[5rem] bg-black">
            <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
                <div className="col-span-3">
                    <p className="heading__mini">Mes compétences</p>
                    <h1 className="heading__primary">
                        Découvrez mes <span className="text-yellow-300">Compétences</span>
                    </h1>
                    <p className="text-white text-[15px] mb-[1.5rem] opacity-70 mt-[1.5rem]">
                        Voici les langages, frameworks et technologies que je sais utiliser.
                    </p>
                </div>
                <div className="col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
                        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <SkillCard
                                title="HTML"
                                image="/images/html.svg"
                            />
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                            <SkillCard
                                title="CSS"
                                image="/images/css.svg"
                            />
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
                            <SkillCard
                                title="JavaScript"
                                image="/images/js.svg"
                            />
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="600">
                            <SkillCard
                                title="React"
                                image="/images/react.svg"
                            />
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="800">
                            <SkillCard
                                title="Node JS"
                                image="/images/node.svg"
                            />
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="1000">
                            <SkillCard
                                title="PHP"
                                image="/images/php.svg"
                            />
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="1200">
                            <SkillCard
                                title="Symfony"
                                image="/images/symfony.svg"
                            />
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="1400">
                            <SkillCard
                                title="MySQL"
                                image="/images/MySQL.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills