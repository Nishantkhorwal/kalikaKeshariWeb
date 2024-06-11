import React,{useState,useEffect} from 'react'
import Headers from '../components/Headers'
import classNames from 'classnames';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ApplyNow() {
    const [currentSlide, setCurrentSlide] = useState(0);
  // Array of slide images
  const slides = [
    'bgImage7.jpg',
    'bgImage8.jpg',
  ];

  // Array of quotes
  const quotes = [
    "Admission Closed!",
    "Wait for the further updates..",
  ];

  useEffect(() => {
    // Auto play the carousel
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Headers/>
      <div className="relative h-[679px] ">
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
              className="w-full h-full object-fill brightness-75"
            />
            {/* Overlay text */}
            {currentSlide === index && (
              <div className="absolute top-72 bg-transparent left-2   md:left-5 w-[40%]  p-4">
                <p className="text-yellow-500 font-bold text-3xl lora   md:text-6xl ">{quotes[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default ApplyNow
