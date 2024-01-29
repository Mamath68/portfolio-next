import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'

const AboutMe = () => {
  const id = "about";

  return (
    <div id={id} className="mt-[-4rem] bg-black pb-[3rem]">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <p className="heading__mini">About Me</p>
          <h1 className="heading__primary">
            Professional <span className="text-yellow-400">Website</span> for your business
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus neque modi dolorem reiciendis velit soluta saepe! Quidem ipsam aperiam, eos aliquid officiis dolorem alias pariatur maiores autem ab esse eaque.
          </p>
          <div className="space-y-3 mt-[2rem]">
            <div className="flex items-end space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-white text-[18px]">Frontend Development</p>
            </div>
            <div data-aos-delay="200" className="flex items-end space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-white text-[18px]">Backend Development</p>
            </div>
            <div className="flex items-end space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-white text-[18px]">Web Development</p>
            </div>
            <div className="flex items-end space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-white text-[18px]">MERN Development</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="p-6 text-center bg-yellow-500 ">
              <p className="text-[50px] text-black font-bold">1</p>
              <p className="text-[20px] text-black font-600">Year Experience</p>
            </div>
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200" className="p-6 text-center bg-yellow-500 ">
              <p className="text-[50px] text-black font-bold">40+</p>
              <p className="text-[20px] text-black font-600">Projects Done</p>
            </div>
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="400" className="p-6 text-center bg-yellow-500 ">
              <p className="text-[50px] text-black font-bold">20H+</p>
              <p className="text-[20px] text-black font-600">Supports Watched</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe