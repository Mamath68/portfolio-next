import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                'un Dev frontend',
                1000,
                'un Dev PHP',
                1000,
                'un Dev Symfony',
                1000,
                'un Dev JavaScript',
                1000
            ]}
            wrapper="span"
            speed={50}
            className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold'
            repeat={Infinity}
        />
    );
}

export default TypeWriteEffect