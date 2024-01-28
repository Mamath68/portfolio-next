import { CodeBracketIcon, CommandLineIcon, CursorArrowRaysIcon, RocketLaunchIcon, ServerIcon, BugAntIcon } from '@heroicons/react/24/outline';
import React from 'react'

interface Props {
  title: string;
  num: string;
}

const iconMapping = {
  "01": CommandLineIcon,
  "02": ServerIcon,
  "03": CodeBracketIcon,
  "04": CursorArrowRaysIcon,
  "05": RocketLaunchIcon,
  "06": BugAntIcon
}

const ServiceCard = ({ num, title }: Props) => {
  const IconComponent =
    (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon;

  return (
    <div className="bg-black custom__service z-[100] relative transform rounded-2xl text-center p-6 shadow-md">
      <IconComponent className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-400" />
      <h1 className="text-[25px] relative z-[1] mx-auto text-white mt-[1rem]">{title}</h1>
      <p className="text-white text-[15px] opacity-60 mt-[0.8rem]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus neque modi dolorem reiciendis velit soluta saepe! Quidem ipsam aperiam, eos aliquid officiis dolorem alias pariatur maiores autem ab esse eaque.
      </p>
      p.text-white
    </div>
  )
}

export default ServiceCard;