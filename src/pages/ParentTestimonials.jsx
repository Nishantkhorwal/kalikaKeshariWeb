import React from 'react'
import Headers from '../components/Headers'
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import Footer from '../components/Footer';

function ParentTestimonials() {
    const Ptestimonials = [
        {
            id : "1",
            message : "This school provides us with the best facility and my child is very happy to be a part of this school",
            name : "Mr. Pradeep Khorwal",
          
            category : "Parent"
        },
        {
            id : "2",
            message : "I love the way teachers interact with us. I am very happy that my child studies here.",
            name : "Mr. Rakesh",

            category : "Parent"
        },
        {
            id : "3",
            message : "Atmosphere is great, vibe is great and teachers are so helping.",
            name : "Mrs. Priya",
        
            category : "Parent"
        },
        {
            id : "4",
            message : "Canteen is the heart of a school and I feel like they provide us with the best service here.",
            name : "Mrs. Lata Sarwan",
         
            category : "Parent"
        },
        {
            id : "5",
            message : "I feel like teachers are so helping and caring. My child never feel like taking a break.",
            name : "Mr. Rinku Mahajan",
     
            category : "Parent"
        },
        {
            id : "6",
            message : "Teachers always help and support us.Feels like a second home sometimes",
            name : "Mrs. Jiya Aggarwal",
            category : "Parent"
        },
        {
            id : "7",
            message : "I appreciate the constant support of staff and teachers. They are the best",
            name : "Mrs. Neelu Bhardwaj",
            category : "Parent"
        },

    ]
  return (
    <>
      <Headers/>
      <div className='bg-[url("../public/bgImage9.jpg")] h-[600px] w-full bg-opacity-70  relative bg-cover filter bg-no-repeat flex flex-row justify-start items-center'>
      <div className='bg-orange-400 w-fit ps-10 pe-6 md:pe-28 py-8  md:py-16 flex flex-row text-white bg-opacity-70 '>
                <h1 className=' text-xl md:text-6xl font-bold lora me-4'>Parent's Testimonials</h1>
                <IoIosArrowDown className=' text-xl md:text-6xl font-bold lora'/>

            </div>
     </div>
     <div className='w-full py-20'>
     <h1 className='text-5xl font-bold lora text-orange-600 text-start lg:px-10 mb-4'>Testimonials</h1>
     <div className='flex flex-col lg:flex-row lg:flex-wrap w-full lg:px-4 '>
     {Ptestimonials.map((test, index) => (
           <div className=' w-full lg:w-[31%]  rounded-xl shadow-xl bg-gray-200 py-10 px-14 lg:px-20 hover:shadow-2xl hover:bg-slate-300  lg:mx-4 lg:my-4 mb-4 md:mb-8 lg:mb-0' key={test.id}>
            <p className='text-center text-gray-600 mb-6 font-signika text-xl '>{test.message}</p>
            <div className='flex flex-row text-yellow-500 justify-center mb-2'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> </div>
        
           {/* <div className='flex justify-center items-center mb-6'><div className={`bg-[url("${test.img}")] h-14 bg-cover w-14 rounded-full `} > </div></div> */}
           <h3 className='text-center text-lg text-gray-600 mb-1 font-signika' >{test.name}</h3>
           <h4 className='text-center text-md text-gray-600 font-signika'>{test.category}</h4>
           </div>
     ))}
           </div>
           </div>
           <Footer/>
    </>
  )
}

export default ParentTestimonials
