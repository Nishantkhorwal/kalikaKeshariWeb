import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { FaPaperPlane } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

function Footer() {
  return (
    <>
      <div className='flex flex-col lg:flex-row bg-blue-950 w-full py-10 px-10'>
        <div className='flex flex-col mb-8 lg:mb-0 ' >
          <div className='flex flex-row justify-start items-center'><img src='logo.png' className='w-[100px] mb-8 '></img><h1 className='text-orange-500 font-bold lora text-3xl ms-4'>Kalika Keshari</h1></div>
          <div className='flex flex-row justify-start items-center mb-4'><SlLocationPin className='me-4 text-white text-xl'/><h1 className='text-white font-semibold text-xl font-signika'> Kalika Keshari Inter College, Tajopur, Mau</h1></div>
          <div className='flex flex-row justify-start items-center mb-4'><BsTelephone className='me-4 text-white text-xl'/><h1 className='text-white font-semibold text-xl font-signika'> 9415633473, 8115338115</h1></div>
          <div className='flex flex-row justify-start items-center mb-4'><FiMail  className='me-4 text-white text-xl'/><h1 className='text-white font-semibold text-xl font-signika'> info@gmail.com</h1></div>
          <div className='flex mt-6  '>
            <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-pink-700 cursor-pointer'><a href='/'><FaInstagram /></a></div>
            <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-blue-600 cursor-pointer'><a href='/'><FaTwitter /></a></div>
            <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-green-400 cursor-pointer'><a href='/'><IoLogoWhatsapp /></a></div>
            <div className='rounded-full mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-blue-700 cursor-pointer'><a href='/'><FaFacebookF /></a></div>
          </div>

        </div>
        <div className='flex flex-col lg:ms-28 mb-8 lg:mb-0'>
          <h1 className='font-semibold text-2xl mb-10 text-white lora'>About Us</h1>
          <ul className='flex flex-col font-signika'>
            <a to=''><li className='mb-4 text-lg text-white hover:text-yellow-300'>Vision, Mission & Values</li></a>
            <a to=''><li className='mb-4 text-lg text-white hover:text-yellow-300'>Chairperson's Message</li></a>
            <a to=''><li className='mb-4 text-lg text-white hover:text-yellow-300'>Principal's Message</li></a>
          </ul>
        </div>
        <div className='flex flex-col lg:ms-28 mb-8 lg:mb-0'>
          <h1 className='font-semibold text-2xl mb-10 text-white lora'>Admission</h1>
          <ul className='flex flex-col'>
          <a to=''>  <li className='mb-4 text-lg text-white hover:text-yellow-300 font-signika'>Admission Process</li></a>
          <a to=''>  <li className='mb-4 text-lg text-white hover:text-yellow-300 font-signika'>Visit Us</li></a>
            <a to=''><li className='mb-4 text-lg text-white hover:text-yellow-300 font-signika'>Apply Now</li></a>
            
          </ul>
        </div>
        <div className='flex flex-col lg:ms-28 mb-8 lg:mb-0 lg:mt-20 md:w-[35%] lg:w-[18%]'>
          <div className='flex flex-row py-4 px-6 border border-blue-950 font-bold  bg-white text-2xl cursor-pointer text-blue-950  items-center hover:bg-blue-500 justify-between'><h1 className='me-4'>Enquire Now</h1><TiArrowRightThick/></div>  
          <div className='flex flex-row py-4 px-6 border border-blue-950 bg-yellow-500 font-bold  text-2xl cursor-pointer text-white items-center hover:bg-yellow-600 justify-between'><h1 className='me-6'>Contact Us</h1><FaPaperPlane/></div>
        </div>

      </div>
    </>
  )
}

export default Footer

