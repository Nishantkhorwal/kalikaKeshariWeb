import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { FaPaperPlane } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa6';

function Footer() {
  return (
    <>
      {/* <div className='flex flex-col lg:flex-row bg-blue-950 w-full py-10 px-10'>
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

      </div> */}
      <div className='w-full bg-gray-800 px-8 lg:px-28 py-16 '>
        <div className='flex flex-col lg:flex-row'>
          <div className=' w-full lg:w-[30%] mb-6 lg:mb-0'>
          <div className='flex flex-row justify-start items-center mb-5'>
            <img src='logo.png' className='w-10 me-3'></img>
            <h1 className='text-gray-100 text-2xl font-bold '>Kalika Keshari</h1>


          </div>
          <p className='text-gray-400  mb-6 text-lg ms-5 '>
          Kalika Keshari Inter<br/> College, Tajopur, Mau
          </p>
          <p className='text-gray-100 mb-6 ms-5'>9415633473, 8115338115</p>
          <p className='text-gray-100 mb-6  ms-5'>info@gmail.com</p>
          <hr className='border-t-2 border-green-700 w-72'></hr>
          </div>
          <div className='w-full lg:w-[20%] me-8 mb-6 lg:mb-0'>
            <h1 className='text-gray-50 font-bold text-2xl mb-3'>Why Us</h1>
            <hr className='border-t-2 border-green-700 mb-6'></hr>
            <ul>
              <li className='mb-8 text-gray-400 text-xl'>Vision, Mission & Values</li>
              <li className='mb-8 text-gray-400 text-xl'>Founder's Message</li>
              <li className='mb-8 text-gray-400 text-xl'>Principal's Message</li>
            </ul>

          </div>
          <div className='w-full lg:w-[20%] me-8 mb-6 lg:mb-0'>
            <h1 className='text-gray-50 font-bold text-2xl mb-3'>Admission</h1>
            <hr className='border-t-2 border-green-700 mb-6'></hr>
            <ul>
              <li className='mb-8 text-gray-400 text-xl'>Admission Process/ Fees</li>
              <li className='mb-8 text-gray-400 text-xl'>Apply Now</li>
            </ul>

          </div>
          <div className='w-full lg:w-[20%] mb-6 lg:mb-0'>
            <h1 className='text-gray-50 font-bold text-2xl mb-3'>Parent's Corner</h1>
            <hr className='border-t-2 border-green-700 mb-6'></hr>
            <ul>
              <li className='mb-8 text-gray-400 text-xl'>Parent's Testimonials</li>
              <li className='mb-8 text-gray-400 text-xl'>Student's Testimonials</li>
              <li className='mb-8 text-gray-400 text-xl'>Our Gallery</li>
            </ul>

          </div>
        </div>

      </div>
      <div className='bg-gray-700 px-4 lg:px-32 py-6'>
        <div className='flex flex-row justify-between'>
          <p className='text-lg text-gray-400'>Copyright All Right Reserved 2024</p>
          <div className='flex flex-row'>
          <a href='/' className='text-green-700 me-4 text-lg' ><FaInstagram /></a>
          <a href='/' className='text-green-700 me-4 text-lg '><FaTwitter /></a>
          <a href='/' className='text-green-700 me-4 text-lg'><FaLinkedin/></a>
          <a href='/' className='text-green-700 me-4 text-lg'><FaFacebookF /></a>
          <a href='/' className='text-green-700 me-4 text-lg'><IoLogoWhatsapp /></a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer

