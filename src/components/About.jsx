import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import PageOne from './PageflipPages/PageOne';
import PageTwo from './PageflipPages/PageTwo';
import PageThree from './PageflipPages/PageThree';

function AboutUs() {
  const book = useRef();

  const nextButtonHandler = () => {
    book.current.pageFlip().flipNext();
  };

  const prevButtonHandler = () => {
    book.current.pageFlip().flipPrev();
  };

  return (
    <section id="about" className="p-20 bg-white-100 text-center">
      <div className="container mx-auto flex justify-center items-center relative">
        <HTMLFlipBook width={1536} height={600} className="shadow-lg" ref={book}>
          <div className="demoPage"><PageOne /></div>
          <div className="demoPage"><PageTwo /></div>
          <div className="demoPage"><PageThree /></div>
        </HTMLFlipBook>
        <button
          onClick={prevButtonHandler}
          className="absolute left-0 ml-4 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition duration-300"
        >
          &#8592; {/* Left arrow */}
        </button>
        <button
          onClick={nextButtonHandler}
          className="absolute right-0 mr-4 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition duration-300"
        >
          &#8594; {/* Right arrow */}
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
