import { CalendarIcon, CheckIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/24/outline'
import React from 'react'

const AboutMe = () => {
  const id = "about";

  return (
    <div id={id} className="mt-[-4rem] bg-black pb-[3rem]">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <p className="heading__mini">A Propos de Moi</p>
          <h1 className="heading__primary">
            Jeune <span className="text-yellow-400">Developpeur</span> Web
          </h1>
          <div className="space-y-3 mt-[2rem]">
            <div className="flex items-end space-x-4">
              <CalendarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-white text-[18px]">12/02/1998(25 ans)</p>
            </div>
            <div data-aos-delay="200" className="flex items-end space-x-4">
              <MapIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-white text-[18px]">3 rue Maurice Ravel 68200 Mulhouse</p>
            </div>
            <div className="flex items-end space-x-4">
              <EnvelopeIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-white text-[18px]"><a href="mailto:mathieu.stamm@gmail.com">mathieu.stamm@gmail.com</a></p>
            </div>
          </div>
          <div className="space-y-3 mt-[2rem]">
            <div className="flex items-end space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-white text-[18px]">Développement Frontend</p>
            </div>
            <div data-aos-delay="200" className="flex items-end space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-white text-[18px]">Développement Backend</p>
            </div>
            <div className="flex items-end space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-white text-[18px]">Développement Web</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200" className="p-6 text-center bg-yellow-500 ">
              <p className="text-[50px] text-black font-bold">40+</p>
              <p className="text-[20px] text-black font-600">Projets réalisé</p>
            </div>
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="400" className="p-6 text-center bg-yellow-500 ">
              <p className="text-[50px] text-black font-bold">20H+</p>
              <p className="text-[20px] text-black font-600">Supports visionné</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe