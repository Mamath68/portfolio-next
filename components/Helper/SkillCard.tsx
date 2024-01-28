import Image from "next/image";
import React from 'react'

interface Props {
  title: string;
  image: string;
}

const SkillCard = ({ image, title }: Props) => {
  return (
    <div className="p-6 hover:bg-red-700 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
      <Image src={`${image}`} alt={title} width={80} height={80} className="object-cover mx-auto"/>
      <h1 className="text-[18px] font-[600]text-white mt-[1rem]">{title}</h1>
    </div>
  )
}

export default SkillCard;