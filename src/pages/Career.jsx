import React from 'react'
import Headers from '../components/Headers'
import { IoIosArrowDown } from "react-icons/io";
import Footer from '../components/Footer';

function Career() {
  return (
    <>
      <Headers/>
      <div className='bg-[url("../public/bgImage5.jpg")] h-[600px] w-full bg-opacity-70  relative bg-cover filter bg-no-repeat flex flex-row justify-start items-center'>
            
            <div className='bg-orange-400 w-fit ps-10 pe-56  py-16 flex flex-row text-white bg-opacity-70'>
                <h1 className='text-6xl font-bold lora me-4'>Career</h1>
                <IoIosArrowDown className='text-6xl font-bold lora'/>

            </div>
     </div>
     <div className='w-full px-6 md:px-20 py-20 flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-[70%] lg:px-6'>
                            <h1 className='text-5xl font-bold mb-8 lora'>Join Us</h1>
                            <p className='text-lg text-gray-500 mb-8 font-signika'>We welcome applications from dynamic and energetic candidates wishing to contribute to our team.</p>
                            <h1 className='text-3xl font-semibold mb-10'>Fill this form and attach your resume:</h1>
                            <div className='w-full  border rounded-xl shadow-xl duration-100 transition '>
                            <form className='flex flex-col py-20 md:px-20 px-8' >
          <h1 className='text-5xl mb-14 text-blue-500 font-bold lora'>Apply for a Career</h1>
          <div className='flex flex-col  md:flex-row md:justify-between mb-8 '>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='client_name' className='text-lg font-signika'>Full Name<span className='text-red-500'>*</span></label>
              <input id='client_name' name='client_name'  className='border-0 focus:border-b-2 focus:border-b-blue-700 border-b p-2 w-full focus:outline-none border-b-blue-300 focus:border-t-0 focus:border-l-0 focus:border-r-0' required />
            </div>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='client_email' className='text-lg font-signika'>Email<span className='text-red-500'>*</span></label>
              <input id='client_email' name='client_email' type='email'  className='border-0 border-b focus:border-b-2 focus:border-b-blue-700 p-2 w-full focus:outline-none border-b-blue-300' required />
              {/* {errors.client_email && <span className="text-red-500">{errors.client_email}</span>} */}
            </div>
          </div>
          <div className='flex flex-col  md:flex-row md:justify-between mb-8'>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
              <label htmlFor='client_number' className='text-lg font-signika'>Phone Number<span className='text-red-500'>*</span></label>
              <input id='client_number' name='client_number' type='tel'  className='border-0 focus:border-b-2 focus:border-b-blue-700 border-b p-2 w-full focus:outline-none border-b-blue-300' required />
              {/* {errors.client_number && <span className="text-red-500">{errors.client_number}</span>} */}
            </div>
            <div className='w-full md:w-[48%] mb-3 md:mb-0'>
            <label htmlFor='address' className='text-lg font-signika'>Address<span className='text-red-500'>*</span></label>
            <input id='address' name='address' className='border-0 focus:border-b-2 focus:border-b-blue-700 border-b p-2 w-full focus:outline-none border-b-blue-300' required />
          </div>
        </div>
        <div className='flex flex-col  md:flex-row md:justify-between mb-8'>
          <div className='w-full mb-3 md:mb-0'>
            <label htmlFor='resume' className='text-lg mb-4 font-signika'>Please Upload Your Resume<span className='text-red-500'>*</span></label><br /><br />
            <input type='file' id='resume' name='resume'  className='border-0  p-2 w-full focus:outline-none' required />
          </div>
        </div>
        {/* {isSuccess && <p className="text-green-500">Form submitted successfully!</p>} */}
        <div className='flex flex-row justify-center'>
          <button type='submit' className='px-4 py-2 bg-yellow-300 rounded-3xl w-32 relative overflow-hidden hover-effect hover:text-white font-signika'>Apply</button>
        </div>
      </form>

                            </div>
                        </div>
                        <div className='w-[30%]  ms-10 hidden lg:block'>
                            <img src='quote-6.jpg' className='w-full'></img>
                            <div className=" flex flex-col justify-center relative -top-2 -left-2">
                                <img src='quote-1.webp' className='self-start'></img>
                                <h1 className='font-semibold text-xl font-signika'>Teaching is not just a career, it's a calling. Each day, you have the power to inspire, to ignite curiosity, and to shape futures. Embrace the opportunity to make a difference in the lives of your students.</h1>
                                <img src='quote-2.webp' className='self-end'></img>
                            </div>
                        </div>
                    </div>
                    <Footer/>
    </>
  )
}

export default Career
