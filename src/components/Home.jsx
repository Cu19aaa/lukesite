import React, {useState, useEffect} from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Profile from '../assets/profile.jpg';
import Luke from '../assets/lukeprofile.png';
import value from '../assets/lukesprofile.png';
import venmo from '../assets/luke.png';
import handstand from '../assets/LukeHandstand.jpg';
import { ReactTyped } from "react-typed";
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: black;
  opacity: 0.5;
  animation: ${fadeIn} 1s ease;
`;

const Home = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Trigger data flow or other actions as needed
    // For example, fetching data or updating state
    // This is just a placeholder example
    const fetchData = async () => {
      // Simulating fetching data
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowOverlay(true);
    };

    fetchData();
  }, []);


  return (
    <div name='home' className='relative'>
      {showOverlay && <Overlay />}
      <div className='w-full h-full bg-[#a6a6a6] py-16 px-4 top-0 left-0 object-cover' style={{ backgroundImage: `url(${handstand})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 "></div>
        
        {/* Container */}
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 relative'>
          <img className='w-[500px] mx-auto my-4 pt-4 rounded-full' src={venmo} alt="/" style={{ width: '450px' }} />
          <div className='flex flex-col justify-center text-white'>
            <p className='text-black-600'>Hi, Im </p>
            <h1 className='text-4xl sm:text-5xl font-bold text-Black'>Luke</h1>
            <h2 className='text-4xl sm:text-5xl font-bold text-Black'>I am a Trained and Licensed </h2>
            <ReactTyped className='text-4xl sm:text-5xl font-bold text-orange-600'
              strings={['Personal Trainer', 'Calisthenics Coach', 'Nutritionist']} typeSpeed={120} backSpeed={140} loop />

            <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo placeat ipsum id inventore itaque atque nihil. Error quo inventore laudantium? </p>
            <div>
              <a href="/">
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:scale-105 duration-300 hover:bg-orange-600 hover:text-white hover:border-gray-200 rounded-xl'>Lets Work
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;