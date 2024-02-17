import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/look for Luke.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleItemClick = () => {
    // Close the mobile menu after clicking on an item
    setNav(false);
  };

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300' style={{ zIndex: 1000 }}>
      <div>
        <img src={Logo} alt="logo image" style={{ width: '50px' }} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
      <li>
                <Link  to="home" smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li>
                <Link  to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li>
                <Link  to="service" smooth={true} duration={500}>
                Service
                </Link>
            </li>
            <li>Gallery</li>
            <li>
                <Link  to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
            <li>
                <Link  to="testimonial" smooth={true} duration={500}>
                    Tesimonial
                </Link>
            </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl text-orange-600'>
          <Link to="home" smooth={true} duration={500} onClick={handleItemClick}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl text-orange-600'>
          <Link to="about" smooth={true} duration={500} onClick={handleItemClick}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl text-orange-600'>
          <Link to="service" smooth={true} duration={500} onClick={handleItemClick}>
            Service
          </Link>
        </li>
        <li className='py-6 text-4xl text-orange-600'>Gallery</li>
        <li className='py-6 text-4xl text-orange-600'>
          <Link to="contact" smooth={true} duration={500} onClick={handleItemClick}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden'></div>
    </div>
  );
};

export default Navbar;
