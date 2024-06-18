import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import PageOne from './PageflipPages/PageOne';
import PageTwo from './PageflipPages/PageTwo';
import PageThree from './PageflipPages/PageThree';
import PageFour from './PageflipPages/PageFour';
import { BiRightArrow } from 'react-icons/bi';
import { BiLeftArrow } from 'react-icons/bi';
import { SlArrowLeftCircle } from "react-icons/sl";


function AboutUs() {
  const book = useRef();

  const nextButtonHandler = () => {
    book.current.pageFlip().flipNext();
  };

  const prevButtonHandler = () => {
    book.current.pageFlip().flipPrev();
  };

  return (
    <section id="about" className="p-20 bg-white text-center mt-20 mb-20 relative">
      <div className="container mx-auto flex justify-center items-center relative bg-white">
        <HTMLFlipBook 
          width={window.innerWidth > 768 ? 800 : window.innerWidth - 40} 
          height={window.innerWidth > 768 ? 500 : 800} 
          className="bg-white" 
          ref={book}
        >
          <div className="demoPage"><PageOne /></div>
          <div className="demoPage"><PageTwo /></div>
          <div className="demoPage"><PageThree /></div>
          <div className="demoPage"><PageFour /></div>
        </HTMLFlipBook>
        <button
          onClick={prevButtonHandler}
          className="absolute left-0 ml-4 p-2 rounded-full shadow-md hover:bg-yellow-500 transition duration-300 bg-custom-yellow text-custom-dark hidden md:block"
        >
          <BiLeftArrow />
        </button>
        <button
          onClick={nextButtonHandler}
          className="absolute right-0 mr-4 p-2 rounded-full shadow-md hover:bg-yellow-500 transition duration-300 bg-custom-yellow text-custom-dark hidden md:block"
        >
          <BiRightArrow />
        </button>
      </div>
      <div className="block md:hidden w-full flex justify-between px-4 pb-5 absolute bottom--10  right-2 items-center ">
        <button
          onClick={prevButtonHandler}
          className="p-1 rounded-full shadow-md hover:bg-yellow-500 transition duration-300 bg-custom-yellow text-custom-dark w-[40px] h-[40px] mb-2 flex justify-center items-center"
        >
          <BiLeftArrow  className=''/>
          
        </button>
        <button
          onClick={nextButtonHandler}
          className="p-1 rounded-full shadow-md hover:bg-yellow-500 transition duration-300 bg-custom-yellow text-custom-dark w-[40px] h-[40px] justify-center items-center flex"
        >
          <BiRightArrow className=' text-2x1'/>
        </button>
        
       
      </div>
    </section>
  );
}

export default AboutUs;
