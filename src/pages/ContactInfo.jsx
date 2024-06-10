import React from 'react'
import Headers from '../components/Headers'
import { FaPaperPlane } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { VscArrowSmallRight } from "react-icons/vsc";
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import '../App.css'
import Footer from '../components/Footer';

function ContactInfo() {
  return (
    <>
      <Headers/>
      <div className='bg-[url("../public/bgImage3.jpg")] h-[600px] w-full bg-opacity-35  relative bg-cover filter bg-no-repeat flex flex-row justify-start items-center'>
            
            <div className='bg-orange-400 w-fit ps-10 pe-56  py-16 flex flex-row text-white bg-opacity-70'>
                <h1 className='text-6xl font-bold lora me-4'>Contact Us</h1>
                <IoIosArrowDown className='text-6xl font-bold lora'/>

            </div>
     </div>
      <div className='py-20 px-20'>
        <div className='flex flex-row'>
            <div className='w-[30%]'>
                <div className='flex flex-col '>
                <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7240.111462802534!2d83.52988699264037!3d25.908128757836483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39918b39f350c805%3A0x3fb3a67a11ef17ab!2sTajopur%2C%20Uttar%20Pradesh%20275101!5e0!3m2!1sen!2sin!4v1717246161684!5m2!1sen!2sin" className='h-[580px] rounded-lg   w-full mb-2'  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                <div>
                    <div className='flex flex-row py-4 px-6 w-full justify-between items-center bg-yellow-600 text-white font-bold mb-1' ><div className='flex flex-row items-center '><FaPaperPlane className='me-4 text-xl'/><h1 className='text-xl '>GET LOCATION</h1></div><IoMdArrowDropright className='text-2xl font-bold'/></div>
                    <div className='flex flex-row py-4 px-6 w-full justify-between items-center bg-orange-500 text-white font-bold' ><div className='flex flex-row '><MdEmail className='me-4 text-2xl'/><h1 className='text-xl font-semibold'>SEND US AN EMAIL</h1></div><IoMdArrowDropright  className='text-2xl font-bold'/></div>
                </div>

                </div>
            </div>
            <div className='w-[70%] bg-gray-200 rounded-r-lg'>
                <div className='flex flex-row'>
                    <div className='w-[60%] px-14 py-10'>
                        <h1 className='font-bold text-4xl mb-6'>
                            Welcome To Our School
                        </h1>
                        <h3 className='text-3xl font-semibold text-gray-500 mb-6'>
                         Kalika Keshari Inter College, Tajopur, Mau
                        </h3>
                        <ul className='mb-10'>
                            <li className='flex flex-row items-center text-xl mb-4'><VscArrowSmallRight className='text-orange-500 '/><h4 className='text-gray-500 '>Email: info@gmail.com</h4></li>
                            <li className='flex flex-row items-center text-xl mb-4'><VscArrowSmallRight className='text-orange-500'/><h4 className='text-gray-500 '>Phone No: 9415633473</h4></li>
                            <li className='flex flex-row items-center text-xl'><VscArrowSmallRight className='text-orange-500'/><h4 className='text-gray-500'>Contact Person: Mrs. Subhadra Mishra</h4></li>

                        </ul>
                        <h1 className='font-bold text-4xl mb-6'>Social Media Platforms</h1>
                        <ul>
                            <li className='flex flex-row text-xl mb-4'><div className='rounded-full me-4 font mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-green-400 cursor-pointer'><a href='/'><IoLogoWhatsapp /></a></div><h1 className='text-xl font-semibold text-gray-500'>Whatsapp</h1></li>
                            <li className='flex flex-row text-xl mb-4'><div className='rounded-full me-4 font mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-pink-700 cursor-pointer '><a href='/'><FaInstagram /></a></div><h1 className='text-xl font-semibold text-gray-500'>Instagram</h1></li>
                            <li className='flex flex-row text-xl mb-4'><div className='rounded-full me-4 font mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-blue-600 cursor-pointer'><a href='/'><FaTwitter /></a></div><h1 className='text-xl font-semibold text-gray-500'>Twitter</h1></li>
                            <li className='flex flex-row text-xl mb-4'><div className='rounded-full me-4 font mx-2 lg:mx-2 lg:p-2 p-1 bg-white hover:bg-blue-700 cursor-pointer'><a href='/'><FaFacebookF /></a></div><h1 className='text-xl font-semibold text-gray-500'>Facebook</h1></li>

                        </ul>
                    </div>
                    <div className='rounded-xl w-[40%] shadow-2xl relative -top-5 bg-white'>
                        <div className='h-5 w-full bg-orange-600 rounded-t-xl'></div>
                        <h1 className='text-blue-900 font-bold text-3xl px-10 mb-6 mt-5'>Working Days</h1>
                        <div className='flex flex-row ps-10 mb-3 justify-start items-center'>
                           <IoMdArrowDropright className='text-md  me-4'/>
                           <div className='flex flex-col '>
                            <h1 className='text-lg text-gray-500'>Monday</h1>
                            <h3 className='font-bold text-xl'>8:00 to 1:00</h3>

                           </div>
                        </div>
                        <hr className='h-[3px] mt-4 w-full bg-blue-950 mb-4 opacity-20'></hr>
                        <div className='flex flex-row ps-10 mb-3 justify-start items-center'>
                           <IoMdArrowDropright className='text-md  me-4'/>
                           <div className='flex flex-col '>
                            <h1 className='text-lg text-gray-500'>Tuesday</h1>
                            <h3 className='font-bold text-xl'>8:00 to 1:00</h3>

                           </div>
                        </div>
                        <hr className='h-[2px] mt-4 w-full bg-blue-950 mb-4 opacity-20'></hr>
                        <div className='flex flex-row ps-10 mb-3 justify-start items-center'>
                           <IoMdArrowDropright className='text-md  me-4'/>
                           <div className='flex flex-col '>
                            <h1 className='text-lg text-gray-500'>Wednesday</h1>
                            <h3 className='font-bold text-xl'>8:00 to 1:00</h3>

                           </div>
                        </div>
                        <hr className='h-[3px] mt-4 w-full bg-blue-950 mb-4 opacity-20'></hr>
                        <div className='flex flex-row ps-10 mb-3 justify-start items-center'>
                           <IoMdArrowDropright className='text-md  me-4'/>
                           <div className='flex flex-col '>
                            <h1 className='text-lg text-gray-500'>Thursday</h1>
                            <h3 className='font-bold text-xl'>8:00 to 1:00</h3>

                           </div>
                        </div>
                        <hr className='h-[3px] mt-4 w-full bg-blue-950 mb-4 opacity-20'></hr>
                        <div className='flex flex-row ps-10 mb-3 justify-start items-center'>
                           <IoMdArrowDropright className='text-md  me-4'/>
                           <div className='flex flex-col '>
                            <h1 className='text-lg text-gray-500'>Friday</h1>
                            <h3 className='font-bold text-xl'>8:00 to 1:00</h3>

                           </div>
                        </div>
                        <hr className='h-[2px] mt-4 w-full bg-blue-950 mb-4 opacity-20'></hr>
                        <div className='flex flex-row ps-10 mb-3 justify-start items-center'>
                           <IoMdArrowDropright className='text-md  me-4'/>
                           <div className='flex flex-col '>
                            <h1 className='text-lg text-gray-500'>Saturday</h1>
                            <h3 className='font-bold text-xl'>8:00 to 1:00</h3>

                           </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ContactInfo
