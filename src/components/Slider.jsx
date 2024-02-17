import React, {useState} from 'react'
import Profile from "../assets/profile.jpg";
import slider1 from "../assets/student1.jpg";
import slider2 from "../assets/student2.jpg";
import slider3 from "../assets/student3.jpg";
import slider4 from "../assets/LukeHandstand.jpg";
import slider5 from "../assets/lever.jpg";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


const Slider = () => {
    const slides = [
        {
            url: slider1,
            title: 'Picture 1'
        },
        {
            url: slider2,
            title: 'Picture 2'
        },
        {
            url: slider3,
            title:'Picture 3'
        },
        {
            url: slider4,
            title:'Picture 4'
        },
        {
            url: slider5,
            title: 'picture 5'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0: currentIndex + 1
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[1200px] h-screen w-full m-auto py-16 px-4 relative group'>
      <div 
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          style={{ backgroundImage: `url(${slides[currentIndex].url})`}}>
       </div>
       {/*Left Arrow*/}
       <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
       </div>
       {/*Right Arrow*/}
       <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
       <BsChevronCompactRight onClick={nextSlide} size={30}/>
       </div>

       <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
            <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                <RxDotFilled />
            </div>
        ))}

       </div>
       
    </div>
    
  )
}

export default Slider
