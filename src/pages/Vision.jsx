import React from 'react'
import Headers from '../components/Headers'
import { IoIosArrowDown } from "react-icons/io";
import Footer from '../components/Footer';

function Vision() {
  return (
    <>
      <Headers/>
      <div className='bg-[url("../public/bgImage10.jpg")] h-[600px] w-full bg-opacity-70  relative bg-cover filter bg-no-repeat flex flex-row justify-start items-center'>
      <div className='bg-orange-400 w-fit ps-10 pe-6 md:pe-28 py-8  md:py-16 flex flex-row text-white bg-opacity-70 '>
                <h1 className=' text-xl md:text-6xl font-bold lora me-4'>Vision, Mission & Values</h1>
                <IoIosArrowDown className=' text-xl md:text-6xl font-bold lora'/>

            </div>
     </div>
     {/* <div className='px-44 pt-20 pb-10'>
        <p className='text-center text-xl  font-signika px-72 mb-4'>"Our goal is to provide our students with the 21st century abilities and learner traits they need to stand out in a global environment."</p>
        <h1 className='text-center text-3xl font-bold'> Vision Statement</h1>
     </div>
     <div className='px-44 py-10'>
        <p className='text-center text-xl  font-signika px-72 mb-4'>"Our mission is to provide students with the knowledge, skills and values needed to thrive in this dynamic world."</p>
        <h1 className='text-center text-3xl font-bold '>Mission Statement</h1>
     </div> */}
     <div className='w-full flex flex-col py-20'>
        <div className='flex flex-col lg:flex-row px-20 mb-10' >
                <img src='Vision.jpg' className=' w-full lg:w-[30%] rounded-xl h-[250px] shadow-xl spin-on-hover mb-8 lg:mb-0'></img>
       
            <div className='w-full lg:w-[70%] lg:px-20'>
                <h1 className='text-5xl font-bold lora text-blue-900 mb-6' >
                    Vision 
                </h1>
                <p className='font-signika text-gray-500 text-xl'>
                Our goal is to provide our students with the 21st century abilities and learner traits they need to stand out in a global environment.
                </p>

            </div>

        </div>
        <div className='flex flex-col lg:flex-row-reverse px-20 bg-gray-100 py-8 ' >
                <img src='Mission.svg' className=' w-full lg:w-[30%] rounded-xl h-[250px] shadow-xl spin-on-hover mb-8 lg:mb-0'></img>
       
            <div className='w-full lg:w-[70%] lg:pe-20'>
                <h1 className='text-5xl font-bold lora text-blue-900 mb-6 ' >
                    Mission 
                </h1>
                <p className='font-signika text-gray-500 text-xl'>
                Our mission is to provide students with the knowledge, skills and values needed to thrive in this dynamic world.
                </p>

            </div>

        </div>
        <div className='py-10 bg-gray-50'>
        <h1 className='font-bold text-5xl text-blue-900 px-20 mb-10 text-center lora'>Values</h1>
        <div className='flex justify-center lg:justify-start flex-col md:flex-row flex-wrap  font-signika px-20'> 
              <div className='py-10 w-full md:w-[40%] lg:w-[30%] me-6 mb-8 bg-blue-800 flex flex-col justify-center items-center px-5 rounded-2xl shadow-2xl '>
                  <img src='Value1.jpg' className='w-[120px] h-[120px] mb-4 spin-on-hover'></img>
                  <h1 className='text-center text-xl text-white font-semibold'>Academic Excellence</h1>
              </div>
              <div className='py-10 w-full md:w-[40%] lg:w-[30%] me-6 mb-8 bg-blue-800 flex flex-col justify-center items-center px-5 rounded-2xl shadow-2xl'>
                  <img src='Value2.jpg' className='w-[120px] h-[120px] mb-4 spin-on-hover'></img>
                  <h1 className='text-center text-xl text-white font-semibold'>Integrity</h1>
              </div>
              <div className='py-10 w-full md:w-[40%] lg:w-[30%] me-6 mb-8 bg-blue-800 flex flex-col justify-center items-center px-5 rounded-2xl shadow-2xl'>
                  <img src='Value3.jpg' className='w-[120px] mb-4 h-[120px] spin-on-hover' ></img>
                  <h1 className='text-center text-xl text-white font-semibold'>Honesty</h1>
              </div>
              <div className='py-10 w-full md:w-[40%] lg:w-[30%] me-6  bg-blue-800 flex flex-col justify-center items-center px-5 rounded-2xl shadow-2xl mb-8'>
                  <img src='Value4.jpg' className='w-[120px] mb-4 h-[120px] spin-on-hover'></img>
                  <h1 className='text-center text-xl text-white font-semibold'>Respect</h1>
              </div>
              <div className='py-10 w-full md:w-[40%] lg:w-[30%] me-6 mb-8  bg-blue-800 flex flex-col justify-center items-center px-5 rounded-2xl shadow-2xl'>
                  <img src='Value5.jpg' className='w-[120px] mb-4 h-[120px] spin-on-hover'></img>
                  <h1 className='text-center text-xl text-white font-semibold'>Student success</h1>
              </div>
             
              
          </div>
          </div>
        
     </div>
     <Footer/>
    </>
  )
}

export default Vision
