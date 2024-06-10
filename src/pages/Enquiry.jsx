import React from 'react'
import Headers from '../components/Headers'
import { IoIosArrowDown } from "react-icons/io";
import '../App.css'
import Footer from '../components/Footer';

function Enquiry() {
  return (
    <>
      <Headers/>
      <div className='bg-[url("../public/bgImage4.svg")] h-[800px] w-full bg-opacity-70  relative bg-cover filter bg-no-repeat flex flex-row justify-start items-center'>
            
            <div className='bg-orange-400 w-fit ps-10 pe-56  py-16 flex flex-row text-white bg-opacity-70'>
                <h1 className='text-6xl font-bold lora me-4'>Enquiry Form</h1>
                <IoIosArrowDown className='text-6xl font-bold lora'/>

            </div>
     </div>
     <div className='py-20 px-20 bg-gray-100'>
     <div className='w-full border rounded-[50px] shadow-xl duration-100 transition bg-white' id='Contact'>
        <form className='flex flex-col py-20 md:px-20 px-8'>
          <h1 className='text-5xl mb-14 text-orange-600 font-bold lora'>Enquiry Form</h1>
          <div className='flex flex-col  md:flex-row md:justify-between mb-8 '>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='first_name' className='text-lg font-signika'>Full Name<span className='text-red-500'>*</span></label>
              <input id='first_name' name='first_name' className='border-0 focus:border-b-2 focus:border-b-blue-700 border-b p-2 w-full focus:outline-none border-b-blue-300 focus:border-t-0 focus:border-l-0 focus:border-r-0' required />
            </div>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='last_name' className='text-lg font-signika'>Last Name<span className='text-red-500'>*</span></label>
              <input id='last_name' name='last_name'  className='border-0 focus:border-b-2 focus:border-b-blue-700 border-b p-2 w-full focus:outline-none border-b-blue-300' required />
            </div>
          </div>
          <div className='flex flex-col  md:flex-row md:justify-between mb-8'>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='email' className='text-lg font-signika'>Email<span className='text-red-500'>*</span></label>
              <input id='email' name='email' type='email' className='border-0 border-b focus:border-b-2 focus:border-b-blue-700 p-2 w-full focus:outline-none border-b-blue-300' required />
              {/* {errors.email && <span className="text-red-500">{errors.email}</span>} */}
            </div>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='phone_number' className='text-lg font-signika'>Phone Number<span className='text-red-500'>*</span></label>
              <input id='phone_number' name='phone_number' type='tel'  className='border-0 focus:border-b-2 focus:border-b-blue-700 border-b p-2 w-full focus:outline-none border-b-blue-300' required />
              {/* {errors.phone_number && <span className="text-red-500">{errors.phone_number}</span>} */}
            </div>
            </div>
          <div className='flex flex-col  md:flex-row md:justify-between mb-14'>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='message' className='text-lg font-signika'>Message<span className='text-red-500'>*</span></label>
              <textarea id='message' name='message'  className='border-0 resize-none border-b p-2 w-full focus:border-b-blue-700 focus:outline-none border-b-blue-300 focus:border-b-2' required />
            </div>
          </div>
          {/* {isSuccess && <p className="text-green-500">Form submitted successfully!</p>} */}
          <div className='flex flex-row justify-center'>
            <button type='submit' className='px-4 py-2 bg-yellow-300 rounded-3xl w-32 relative overflow-hidden hover-effect hover:text-white font-signika'>Send</button>
          </div>
        </form>
      </div>

     </div>
     <Footer/>
    </>
  )
}

export default Enquiry
