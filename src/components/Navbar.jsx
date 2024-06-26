import React, { useState,useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import {Link} from 'react-router-dom'
import '../App.css'

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isFixed, setIsFixed] = useState(false);

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  }

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  }
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      if (window.scrollY > navbarHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar w-full hidden lg:flex justify-end px-6 md:px-28 bg-[#0a2657] ${isFixed ? 'fixed top-0 left-0 right-0 z-50 justify-center navbar-expanded' : 'navbar-collapsed'}`}>
      <ul className='flex flex-row justify-end items-end w-full  text-white'>
        <Link to='/'><li className='text-lg font-semibold hover:bg-yellow-500 py-3 px-6 cursor-pointer'>Home</li></Link>
        <li className='relative'
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}>
          <div
            className='flex flex-row items-center text-lg font-semibold py-3 px-6 hover:bg-yellow-500 cursor-pointer'
            onClick={() => handleDropdownClick(0)}
          >
            Why Us <MdKeyboardArrowDown className='ml-2' />
          </div>
          {openDropdown === 0 && (
            <div className='absolute top-full left-0 bg-[#0a2657] text-white text-md font-semibold w-[200px] shadow-md z-10'
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}>
              <ul className='py-2'>
                <Link to='/vision'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Vision, Mission & Values</li></Link>
                <li><hr className='w-full border border-t border-blue-900 '/></li>
                <Link to='/foundermessage'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Founder's Message</li></Link>
                 <li><hr className='w-full border border-t border-blue-900 '/></li>
                <Link to='/principalmessage'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Principal's Message</li></Link>
              </ul>
            </div>
          )}
        </li>
        <li className='relative'
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}>
          <div
            className='flex flex-row items-center text-lg font-semibold py-3 px-6 hover:bg-yellow-500 cursor-pointer'
            onClick={() => handleDropdownClick(1)}
          >
            Admission <MdKeyboardArrowDown className='ml-2' />
          </div>
          {openDropdown === 1 && (
            <div className='absolute top-full left-0 bg-[#0a2657] text-white text-md font-semibold w-[200px] shadow-md z-10'
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}>
              <ul className='py-2'>
              <Link to='/admissionprocess'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Admission Process / Fees</li></Link>
               <li><hr className='w-full border border-t border-blue-900 '/></li>
              <Link to='/applynow'> <li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Apply Now</li></Link>
              </ul>
            </div>
          )}
        </li>
        <li className='relative'
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}>
          <div
            className='flex flex-row items-center text-lg font-semibold py-3 px-6 hover:bg-yellow-500 cursor-pointer'
            onClick={() => handleDropdownClick(2)}
          >
            Parent's Corner <MdKeyboardArrowDown className='ml-2' />
          </div>
          {openDropdown === 2 && (
            <div className='absolute top-full left-0 bg-[#0a2657] text-white text-md font-semibold w-[200px] shadow-md z-10'
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}>
              <ul className='py-2'>
                <Link to='/parenttestimonials'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Parent's Testimonials</li></Link>
                 <li><hr className='w-full border border-t border-blue-900 '/></li>
                <Link to='/studenttestimonials'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Student's Testimonials</li></Link>
                 <li><hr className='w-full border border-t border-blue-900 '/></li>
                <li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Our Gallery</li>
              </ul>
            </div>
          )}
        </li>
        <li className='relative'
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}>
          <div
            className='flex flex-row items-center text-lg font-semibold py-3 px-6 hover:bg-yellow-500 cursor-pointer'
            onClick={() => handleDropdownClick(3)}
          >
            Contact <MdKeyboardArrowDown className='ml-2' />
          </div>
          {openDropdown === 3 && (
            <div className='absolute top-full left-0 bg-[#0a2657] text-white text-md font-semibold w-[200px] shadow-md z-10'
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}>
              <ul className='py-2'>
              <Link to='/contactinfo'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Contact Information</li></Link>
               <li><hr className='w-full border border-t border-blue-900 '/></li>
              <Link to='/enquiry'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Enquiry</li></Link>
               <li><hr className='w-full border border-t border-blue-900 '/></li>
              <Link to='/career'><li className='px-4 py-2 hover:bg-yellow-500  cursor-pointer'>Career</li></Link>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;



