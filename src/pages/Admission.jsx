import React,{useState} from 'react'
import Headers from '../components/Headers'
import { IoIosArrowDown } from "react-icons/io";
import Footer from '../components/Footer';

function Admission() {
    const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <>
      <Headers/>
      <div className='bg-[url("../public/bgImage6.jpg")] h-[700px] w-full bg-opacity-70  relative bg-cover filter bg-no-repeat flex flex-row justify-start items-center'>
            
            <div className='bg-orange-400 w-fit ps-10 pe-28  py-16 flex flex-row text-white bg-opacity-70 '>
                <h1 className='text-6xl font-bold lora me-4'>Admission Process</h1>
                <IoIosArrowDown className='text-6xl font-bold lora'/>

            </div>
     </div>
     <div className='px-8  py-20 flex flex-row lg:px-20  w-full bg-gray-100'>
      <div className=' w-full lg:w-[75%] px-5 lg:px-10'>
        <h1 className='text-5xl text-black mb-10 font-bold lora'>
          Admission Process
        </h1>
        <ul className='text-gray-500  list-disc font-signika'>
          <li className='mb-4'>Admission will be granted till the availability of seats on a first come first serve basis.</li>

          <li className='mb-4'>The school academic session commences in April and extends up to March of the following year.</li>
          <li className='mb-4'> Students are admitted to the school throughout the year depending on the vacancies arising in any given class.</li>
          <li className='mb-4'> There will be a student and parent interaction for those who have registered their wards.</li>
          <li className='mb-4'> The parents must inform the school in case their child requires some special assistance due to any health reasons at the time of admission.</li>
          <li className='mb-4'> Parents are expected to make a good faith disclosure of any suspected or identified special needs when they apply for admission.</li></ul>
          
         </div> 
         <div className='w-[25%]  ms-10 hidden lg:block'>
           <img src='quote-5.jpg' className='w-full '></img>
           <div className=" flex flex-col justify-center relative -top-2 -left-2">
            <img src='quote-1.webp' className='self-start'></img>
            <h1 className='font-semibold text-xl font-signika'>Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.</h1>
            <img src='quote-2.webp' className='self-end'></img>
              
            </div>

         </div>
         </div>
         <div className="container mx-auto p-4 px-20 mb-10">
            <h1 className="text-5xl font-bold mb-10 lora">Fee Structure</h1>
            <div className="border border-gray-200 rounded-lg overflow-hidden duration-75 transition-all">
              <h2 id="accordionHeading ">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 bg-gray-100 focus:outline-none"
                  onClick={toggleAccordion}
                  aria-expanded={isAccordionOpen}
                  aria-controls="accordionBody"
                >
                  <span>Fees and Payment Information</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              {isAccordionOpen && (
                <div
                  id="accordionBody"
                  className="p-5 border-t border-gray-200 transition-all duration-100"
                  aria-labelledby="accordionHeading"

                >
                  <table className="min-w-full bg-white border-collapse">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b">Fees</th>
                        <th className="py-2 px-4 border-b">Payment Frequency</th>
                        <th className="py-2 px-4 border-b">Amount (INR)</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td className="py-2 px-4 border-b">Registration Fee</td>
                        <td className="py-2 px-4 border-b">One Time Payment</td>
                        <td className="py-2 px-4 border-b">100</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Admission Fee</td>
                        <td className="py-2 px-4 border-b">One Time Payment</td>
                        <td className="py-2 px-4 border-b">500</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b font-bold ">Tution Fee(Per Month)</td>
                        <td className="py-2 px-4 border-b"></td>
                        <td className="py-2 px-4 border-b"></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Nursery To 5th</td>
                        <td className="py-2 px-4 border-b">Monthly</td>
                        <td className="py-2 px-4 border-b">300</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">6th to 8th </td>
                        <td className="py-2 px-4 border-b">Monthly</td>
                        <td className="py-2 px-4 border-b">400</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">9th to 12th</td>
                        <td className="py-2 px-4 border-b">Monthly</td>
                        <td className="py-2 px-4 border-b">500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          <Footer/>
    </>
  )
}

export default Admission
