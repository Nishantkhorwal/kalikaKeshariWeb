import React from 'react'
import Headers from '../components/Headers'
import { IoIosArrowDown } from "react-icons/io";
import Footer from '../components/Footer';

function PrincipalMessage() {
  return (
    <>
      <Headers/>
      <div className='bg-[url("../public/bgImage10.jpg")] h-[600px] w-full bg-opacity-70  relative bg-cover filter bg-no-repeat flex flex-row justify-start items-center'>
      <div className='bg-orange-400 w-fit ps-10 pe-6 md:pe-28 py-8  md:py-16 flex flex-row text-white bg-opacity-70 '>
                <h1 className=' text-xl md:text-6xl font-bold lora me-4'>Principal's Message</h1>
                <IoIosArrowDown className=' text-xl md:text-6xl font-bold lora'/>

            </div>
     </div>
     <div className='flex flex-col lg:flex-row px-20 py-20'>
         <img src='Value4.jpg' className='shadow-xl w-full lg:w-[40%] h-[400px]'></img>
         <div className='px-10'>
          <h1 className='font-bold text-5xl text-blue-900 mb-6'> 
            Principal's Message
          </h1>
          <p>At Kalika Keshari Inter College, we believe that education is key to not just success but everything. In this dynamic world, we ensure that we adapt to situations and times to make learning easier for students.
            Our school is an ecosystem that creates in students a thirst for knowledge and success. We keep motivating our students to learn more and develop useful skills. Our educators have a mindset that looks beyond rote learning. Every student is unique and bright; it is our responsibility to encourage them to learn more and make them independent and capable of standing face first in the presence of a challenge.
            As the principal, I am proud to lead a team that emphasizes collaboration, respect, and a commitment to lifelong learning. Together, let's assist them as they begin their educational adventure.</p>
            <h1 className='text-3xl font-bold text-center mt-6 lora'>-  Mrs. Subhadra Mishra</h1>
         </div>
     </div>
     <Footer/>
    </>
  )
}

export default PrincipalMessage

