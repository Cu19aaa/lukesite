import React from 'react'
import Slider from "react-slick";
import Profile from '../assets/profile.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
    {
        id:1,
        name:"David",
        text: "lorem ipsum dolor sit amet consectetur adipisicing  elit. Eaque reiciendis inventore iste ratione ex alias quis mmagni at optio",
        img:Profile,
    },
    {
        id:2,
        name:"David",
        text: "lorem ipsum dolor sit amet consectetur adipisicing  elit. Eaque reiciendis inventore iste ratione ex alias quis mmagni at optio",
        img:Profile,
    },
    {
        id:3,
        name:"David",
        text: "lorem ipsum dolor sit amet consectetur adipisicing  elit. Eaque reiciendis inventore iste ratione ex alias quis mmagni at optio",
        img:Profile,
    },
    {
        id:4,
        name:"David",
        text: "lorem ipsum dolor sit amet consectetur adipisicing  elit. Eaque reiciendis inventore iste ratione ex alias quis mmagni at optio",
        img:Profile,
    },
    {
        id:5,
        name:"David",
        text: "lorem ipsum dolor sit amet consectetur adipisicing  elit. Eaque reiciendis inventore iste ratione ex alias quis mmagni at optio",
        img:Profile,
    },
];

const Testimonial = () => {

    var settings = {
        dots:true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        SlidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    SlidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 2,
                    SlidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    SlidesToScroll: 1,
                },
            },
        ],
    };
  return (
    <div name='testimonial' className='py-10 mb-10 flex justify-center items-center'>
        <div className='container'>
            {/* Header Section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-sm text-black'>
                    What customers are saying
                </p>
                <h1 className='text-3xl font-bold'>
                   Testimonials
                </h1>
                <p className='text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque soluta in accusamus quisquam a nostrum!</p>
            </div>

            {/* Testimonnial Cards */}
            <div className='text-center'>
                <Slider {...settings}>{
                    TestimonialData.map((data) => (
                        <div className='my-6'>
                        <div
                        key={data.id}
                        className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-black bg-black/10 relative'
                        >
                            <div className='mb-4'>
                                <img src={data.img} alt="" 
                                className='rounded-full w-20 h-20'
                                />
                            </div>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='space-y-3'>
                                    <p className='text-xs text-white'>{data.text}</p>
                                    <h1 className='text-xl font-bold text-orange-400 dark:text-light'>{data.name}</h1>
                                </div>
                            </div>
                            <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                        </div>
                        </div>
                    ) )
                }
                </Slider>


            </div>
        </div>
    </div>
  )
}

export default Testimonial
