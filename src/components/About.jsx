import React from 'react';
import { useSpring, animated } from 'react-spring';
import pic1 from '../assets/LukeHandstand.jpg';
import pic2 from '../assets/skillhold.jpg';
import pic3 from '../assets/lever.jpg';

const About = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 280, friction: 60 }, // Adjust these values for different transition effects
  });

  return (
    <animated.div name='about' className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4' style={props}>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-6 object-cover w-full h-full p-2' src={pic1} alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src={pic2} alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src={pic3} alt="/" />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>About Me</h3>
        <p className='text-2xl py-6'>Hi. My name is Luke</p>
        <p className='pb-6 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum porro,
          consequatur labore minus sequi magnam ipsa dolorem, corporis veniam id
          nihil eum non expedita eius. Quam deserunt repellat provident dolorem.</p>
      </div>
    </animated.div>
  );
};

export default About;
