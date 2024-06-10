import React, { useState, useEffect } from 'react';
import Headers from '../components/Headers';
import { RiProfileLine } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";
import { MdSportsSoccer } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'

import classNames from 'classnames';
import Footer from '../components/Footer';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counteron, setCounterOn] = useState(false);
  // Array of slide images
  const slides = [
    'bgImage1.jpg',
    'bgImage2.jpg',
  ];

  // Array of quotes
  const quotes = [
    "Learn, Grow, Succeed.",
    "Dream, Believe, Achieve.",
  ];

  useEffect(() => {
    // Auto play the carousel
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Headers />
      <div className="relative h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={classNames(
              'absolute inset-0 transition-opacity duration-1000',
              {
                'opacity-100': currentSlide === index,
                'opacity-0': currentSlide !== index,
              }
            )}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fill"
            />
            {/* Overlay text */}
            {currentSlide === index && (
              <div className="absolute top-60 bg-transparent left-2   md:left-5 w-[40%]  p-4">
                <p className="text-blue-900 font-bold text-3xl   md:text-6xl ">{quotes[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='bg-blue-950  '>
        <div className='flex flex-wrap flex-col md:flex-row  py-10 px-5 md:px-32 lg:px-0 justify-around '>
               <div className='flex flex-col px-7 rounded-xl w-full lg:w-[20%] py-6 justify-around items-center border border-gray-300 cursor-pointer hover:bg-blue-900 mb-4 lg:mb-0'>
                  <AiOutlineInfoCircle className='text-orange-500 mb-4 text-7xl'/>
                  <h1 className='text-gray-300 text-4xl  font-semibold mb-3'>About</h1>
                  <h3 className='text-gray-300 text-md  font-semibold '>Discover our story, mission,<br/> and vision.</h3>

               </div>
               <div className='flex flex-col px-7 rounded-xl w-full lg:w-[20%] py-6 justify-around items-center border border-gray-300 cursor-pointer hover:bg-blue-900 mb-4 lg:mb-0'>
                  <FaUserGraduate  className='text-orange-500 mb-4 text-7xl'/>
                  <h1 className='text-gray-300 text-4xl  font-semibold mb-3'>Admission</h1>
                  <h3 className='text-gray-300 text-md  font-semibold '>Explore enrollment procedures<br/> and requirements.</h3>

               </div>
               <div className='flex flex-col px-7 rounded-xl w-full lg:w-[20%] py-6 justify-around items-center border border-gray-300 cursor-pointer hover:bg-blue-900 mb-4 lg:mb-0'>
                  <FaBriefcase  className='text-orange-500 mb-4 text-7xl'/>
                  <h1 className='text-gray-300 text-4xl  font-semibold mb-3'>Career</h1>
                  <h3 className='text-gray-300 text-md  font-semibold '>Crafting Futures, Shaping<br/> Careers.</h3>

               </div>
               <div className='flex flex-col px-7 rounded-xl w-full lg:w-[20%] py-6 justify-around items-center border border-gray-300 cursor-pointer hover:bg-blue-900 mb-4 lg:mb-0'>
                  <MdBusiness className='text-orange-500 mb-4 text-7xl'/>
                  <h1 className='text-gray-300 text-4xl  font-semibold mb-3'>Facility</h1>
                  <h3 className='text-gray-300 text-md  font-semibold '>Unmatched Facility<br/> Standards.</h3>

               </div>
        </div>
        
      </div>
      <div className='py-20 px-4 md:px-20 bg-gray-200'>
        <h1 className='lora text-5xl font-bold mb-6 lora bg-gradient-to-l from-orange-500 to-yellow-500 text-transparent bg-clip-text'>Welcome To Kalika Keshari</h1>
        <div className='flex flex-wrap flex-row '>
        <div className='md:w-[45%] ms-3 me-5 my-6'>
            <h3 className='text-3xl font-bold lora mb-5 text-blue-800'>About Us</h3>
            <p className='text-gray-500 font-signika mb-1'>Kalika Keshari Inter College was established in 2005 with the vision of imparting quality education to the students in Tajopur, Mau. Our dedicated team, led by founder Mr. Raj and principal Mrs. Subhadra Mishra, ensures a nurturing learning environment. Over the course of years, the college has passed many milestones and established itself as a reputable institution through relentless efforts in all aspects of college life.</p>
            <p className='text-gray-500 font-signika mb-5'>We believe that every student has their own way of learning, and we provide them with personalised learning at their own pace. At Kalika Keshari, a teacher is a mentor, a coach, a facilitator, and a guide committed to ensuring students success.</p>
            <button className='px-4 py-2 bg-orange-500 rounded-xl text-white hover:text-orange-500 hover:bg-gray-300 font-semibold'>Find Out More</button>
        </div>
        <div className='md:w-[45%] mx-3 my-6'>
            <h3 className='text-3xl font-bold lora mb-5 text-blue-800'>Admission Process</h3>
            <ul className='text-md  list-disc font-signika text-gray-500'>
          <li className='mb-4'>Admission will be granted till the availability of seats on a first come first serve basis.</li>

          <li className='mb-4'>The school academic session commences in April and extends up to March of the following year.</li>
          <li className='mb-4'> Students are admitted to the school throughout the year depending on the vacancies arising in any given class.</li>
          <li className='mb-4'> There will be a student and parent interaction for those who have registered their wards.</li>
           </ul>
            <button className='px-4 py-2 bg-orange-500 rounded-xl text-white hover:text-orange-500 hover:bg-gray-300 font-semibold'>Find Out More</button>
        </div>
        <div className='md:w-[45%] mx-3 my-6'>
            <h3 className='text-3xl font-bold lora mb-5 text-blue-800'>Our Gallery</h3>
            <p className='text-gray-500 font-signika mb-5'>In our school, we celebrate occasions vibrantly and with lots of activities. Celebrating various occasions is an eagerly anticipated tradition that brings the entire student body together. Each event, from cultural festivals to national holidays, is celebrated with so many different engaging activities. These activities not only entertain students but also foster a sense of community, encourage students to participate in different activities, and help them get out of their comfort zone to learn new skills and create long-lasting memories. Whether it's a dance performance, a drawing competition, sports events, or workshops, every occasion is an opportunity for students to bond with their peers and teachers and enjoy the dynamic school spirit.</p>
            <button className='px-4 py-2 bg-orange-500 rounded-xl text-white hover:text-orange-500 hover:bg-gray-300 font-semibold'>Find Out More</button>
        </div>
        <div className='md:w-[45%] mx-3 my-6'>
            <h3 className='text-3xl font-bold lora mb-5 text-blue-800'>Vision, Mission, & Values</h3>
            <ul className='text-lg text-gray-500 font-signika'>
          <li className='mb-2 '><h1 className='text-lg font-bold lora '>Vision</h1></li>

          <li className='mb-4 text-gray-600 font-signika'>Our goal is to provide our students with the 21st century abilities and learner traits they need to stand out in a global environment.</li>

          <li className='mb-2 '><h1 className='text-lg font-bold lora'>Mission</h1></li>

          <li className='mb-4 text-gray-600 font-signika'> Our mission is to provide students with the knowledge, skills and values needed to thrive in this dynamic world.</li></ul>
            <button className='px-4 py-2 bg-orange-500 rounded-xl text-white hover:text-orange-500 hover:bg-gray-300 font-semibold'>Find Out More</button>
        </div>
       
        </div>

      </div>
      <div>
      <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
    <div className='flex justify-between items-center lg:py-16  lg:px-44 bg-gradient-to-r overflow-hidden from-orange-500 to-blue-600 '>
      <div className='flex flex-col lg:justify-center justify-start  items-start'>
        <h1 className='text-white text-lg  lg:text-5xl font-semibold lg:font-bold'>
           { counteron && <CountUp start={0} end={251} duration={2} delay={0}/> }+
        </h1>
        <h3 className='lg:text-xl  text-sm font-semibold text-white font-cabin'>
        Project Complete
        </h3>
        

      </div>
      <div className='flex flex-col lg:justify-center justify-start  items-start '>
        <h1 className='text-white text-lg  lg:text-5xl font-semibold lg:font-bold'>
        { counteron && <CountUp start={0} end={300} duration={2} delay={0}/> }+
        </h1>
        <h3 className='lg:text-xl text-sm font-semibold text-white font-cabin'>
          Students
        </h3>
        

      </div>
      <div className='flex flex-col lg:justify-center justify-start  items-start'>
        <h1 className='text-white text-lg  lg:text-5xl font-semibold lg:font-bold'>
        { counteron && <CountUp start={0} end={100} duration={2} delay={0}/> }+
        </h1>
        <h3 className='lg:text-xl text-sm font-semibold text-white font-cabin'>
          Award Winnings
        </h3>
        

      </div>
      <div className='flex flex-col lg:justify-center justify-start  items-start '>
        <h1 className='text-white text-lg  lg:text-5xl font-semibold lg:font-bold'>
        { counteron && <CountUp start={0} end={15} duration={2} delay={0}/> }+
        </h1>
        <h3 className='lg:text-xl text-sm font-semibold text-white font-cabin'>
          Years of Experience
        </h3>
        

      </div>

    </div>
    </ScrollTrigger>
      </div>
      <div className='md:px-20 px-4 py-20 bg-blue-950 mt-2 pb-60'>
        <h1 className='font-bold text-3xl lg:text-6xl mb-14 text-white'>Why We Are Best In<br/> The Industry.</h1>
        <div className='flex flex-wrap flex-col  md:flex-row justify-around'>
        <div className='flex flex-col justify-center items-center border mb-5 lg:mb-0  border-gray-400 rounded-xl px-5 bg-transparent py-8'>
             <MdSportsSoccer className='text-orange-500 text-7xl mb-4'/>
            <h3 className='font-semibold text-3xl text-gray-300 mb-3 '>Sports</h3> 
            <p className='text-gray-300'>Unleashing Athletic Potential</p>

        </div>
        <div className='flex flex-col justify-center items-center border mb-5 lg:mb-0  border-gray-400 rounded-xl px-5 bg-transparent py-8'>
             <FaBook className='text-orange-500 text-7xl mb-4'/>
            <h3 className='font-semibold text-3xl text-gray-300 mb-3 '>Academics</h3> 
            <p className='text-gray-300'>Nurturing Intellectual Growth</p>

        </div>
        <div className='flex flex-col justify-center items-center border mb-5 lg:mb-0  border-gray-400 rounded-xl px-5 bg-transparent py-8'>
             <FaLaptopCode className='text-orange-500 text-7xl mb-4'/>
            <h3 className='font-semibold text-3xl text-gray-300 mb-3 '>Technology</h3> 
            <p className='text-gray-300'>Empowering with Innovation</p>

        </div>
        <div className='flex flex-col justify-center items-center border mb-5 lg:mb-0  border-gray-400 rounded-xl px-5 bg-transparent py-8'>
             < FaUtensils className='text-orange-500 text-7xl mb-4'/>
            <h3 className='font-semibold text-3xl text-gray-300 mb-3 '>Canteen</h3> 
            <p className='text-gray-300'>Nutritious and Delicious</p>

        </div>
        <div className='flex flex-col justify-center items-center border mb-5 lg:mb-0  border-gray-400 rounded-xl px-5 bg-transparent py-8'>
             <FaBook className='text-orange-500 text-7xl mb-4'/>
            <h3 className='font-semibold text-3xl text-gray-300 mb-3 '>Library</h3> 
            <p className='text-gray-300'>Gateway to Knowledge</p>

        </div>
        
        </div>
        <div className='mt-20'>
          <h3 className='text-orange-500 font-semibold lora text-center'>
            Testimonials
          </h3>
          <h1 className='text-3xl font-bold lora text-white text-center'>Explore The Students Experience</h1>
        </div>
        
      </div>
      <div className='relative bg-transparent -top-48 px-4 md:px-32  lg:px-20'>
      <div className='flex flex-col lg:flex-row '>
           <div className=' w-full lg:w-[30%] rounded-xl shadow-xl bg-gray-200 py-10 px-14 lg:px-20 lg:me-8 mb-4 md:mb-8 lg:mb-0'>
            <p className='text-center text-gray-600 mb-6 font-signika text-xl'>"At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development."</p>
        
           <div className='flex justify-center items-center mb-6'><div className='bg-[url("../public/testimonials1.jpg")] h-14 bg-cover w-14 rounded-full ' > </div></div>
           <h3 className='text-center text-lg text-gray-600 mb-1 font-signika' >Tarini Aggarwal</h3>
           <h4 className='text-center text-md text-gray-600 font-signika'>Student</h4>
           </div>
           <div className='w-full lg:w-[30%] rounded-xl shadow-xl bg-gray-200 py-10 px-14 lg:px-20 lg:me-8 md:mb-8 mb-4 lg:mb-0'>
            <p className='text-center text-gray-600 mb-6 font-signika text-xl'>"We want our students to become engaged global citizens. That requires imagination, flexibility, resilience, the ability to get along with others, and a sense of humor."</p>
        
           <div className='flex justify-center items-center mb-6'><div className='bg-[url("../public/testimonials2.jpg")] h-14 bg-cover w-14 rounded-full ' > </div></div>
           <h3 className='text-center text-lg text-gray-600 mb-1 font-signika' >Manvi Bhardwaj</h3>
           <h4 className='text-center text-md text-gray-600 font-signika'>Student</h4>
           </div>
           <div className='w-full lg:w-[30%] rounded-xl shadow-xl bg-gray-200 py-10 px-14 lg:px-20 lg:me-8 mb-4 md:mb-8 lg:mb-0'>
            <p className='text-center text-gray-600 mb-6 font-signika text-xl'>"At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development."</p>
        
           <div className='flex justify-center items-center mb-6'><div className='bg-[url("../public/testimonials3.jpg")] h-14 bg-cover w-14 rounded-full ' > </div></div>
           <h3 className='text-center text-lg text-gray-600 mb-1 font-signika' >Kanishka</h3>
           <h4 className='text-center text-md text-gray-600 font-signika'>Student</h4>
           </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between px-4 lg:px-20'>
        <div className='w-full lg:w-[50%] lg:ms-20 lg:mt-20 mb-10 lg:mb-0'>
          <h1 className='font-bold text-xl md:text-3xl lg:text-4xl lora mb-5 text-blue-800'>Job openings now available - join our school community!</h1>
          <h3 className='text-gray-600 mb-4 text-xl'>Contact us for more information:</h3>
          <div className='border border-blue-950 hover:bg-slate-300 cursor-pointer rounded-md px-6 py-4 text-center flex flex-row justify-center items-center md:w-[55%] lg:w-[55%]'><BsFillTelephoneFill className='me-4 text-red-500'/><h1 className='text-black font-semibold text-2xl font-signika'>+91 8115338115</h1></div>

        </div>
        <div className='flex justify-end items-baseline '>
          <img src='HomeFooter2.svg' className='w-[500px] '></img>
        </div>

      </div>
      <Footer/>
    </>
  );
}

export default Home;




