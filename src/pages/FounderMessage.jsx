import React from 'react'
import Headers from '../components/Headers'
import { IoIosArrowDown } from "react-icons/io";
import Footer from '../components/Footer';

function FounderMessage() {
  return (
    <>
      <Headers/>
      <div className='bg-[url("../public/bgImage10.jpg")] h-[600px] w-full bg-opacity-70  relative bg-cover filter bg-no-repeat flex flex-row justify-start items-center'>
      <div className='bg-orange-400 w-fit ps-10 pe-6 md:pe-28 py-8  md:py-16 flex flex-row text-white bg-opacity-70 '>
                <h1 className=' text-xl md:text-6xl font-bold lora me-4'>Founder's Message</h1>
                <IoIosArrowDown className=' text-xl md:text-6xl font-bold lora'/>

            </div>
     </div>
     <div className='flex flex-col lg:flex-row px-20 py-20'>
         <img src='Value1.jpg' className='shadow-xl w-full lg:w-[40%] h-[400px]'></img>
         <div className='px-10'>
          <h1 className='font-bold text-5xl text-blue-900 mb-6'> 
            Founder's Message
          </h1>
          <p>It gives me great pleasure to welcome you to the online home of our institute as the founder and leader of the dedicated team behind our institution. We at Kalika Keshari Inter College are dedicated to creating a learning environment that supports creativity, academic excellence and a passion for life long learning.

            Our mission is to provide students with the values, ability and knowledge necessary to thrive in this dynamic world. We provide comprehensive education that extends beyond the classroom by encouraging students to take part in extra curricular activities.

            We believe that every student has their own way of learning and has their own potential, and our goal is to help each one to achieve their goals and ambition. With a passionate team of educators and state-of-the-art facilities, we strive to create an inspiring place for students where they can thrive. We look forward to being a part of your educational journey and helping you achieve your dreams.</p>
            <h1 className='text-3xl font-bold text-center mt-6 lora'>- Mr. Raj Mishra</h1>
         </div>
     </div>
     <Footer/>
    </>
  )
}

export default FounderMessage
