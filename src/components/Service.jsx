import React from 'react';
import Profile from '../assets/profile.jpg'

const Cards = () => {
  return (
    <div name='service' className='w-full py-[10rem] px-4 bg-white'>
        <div className='text-center sm:text-center pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-black'>Services I Offer</p>
                </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Profile} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Handstand Classes</h2>
              <p className='text-center text-4xl font-bold'>$</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet.</p>
              </div>
              <button className='bg-orange-600 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-200'>Book Now</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Profile} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>PT Services</h2>
              <p className='text-center text-4xl font-bold'>$</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet.</p>
              </div>
              <button className='bg-orange-600  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-200'>Book Now</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Profile} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Nutrition service</h2>
              <p className='text-center text-4xl font-bold'>$</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet.</p>
                  <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet.</p>
              </div>
              <button className='bg-orange-600 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-200'>Book now</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
