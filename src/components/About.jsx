import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import PageOne from './PageflipPages/PageOne';
import PageTwo from './PageflipPages/PageTwo';
import PageThree from './PageflipPages/PageThree';
import PageFour from './PageflipPages/PageFour';
import { Button } from 'primereact/button'; // Importando PrimeReact Button
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

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

        {/* Botones de navegación minimalistas en desktop */}
        <Button 
          icon="pi pi-arrow-left" 
          className="p-button-rounded p-button-secondary absolute left-0 ml-4 hidden md:block"
          onClick={prevButtonHandler} 
        />
        <Button 
          icon="pi pi-arrow-right" 
          className="p-button-rounded p-button-secondary absolute right-0 mr-4 hidden md:block"
          onClick={nextButtonHandler} 
        />
      </div>

      {/* Botones de navegación minimalistas en mobile */}
      <div className="block md:hidden w-full flex justify-between px-4 pb-5 absolute bottom-10 right-2 items-center">
        <Button 
          icon="pi pi-arrow-left" 
          className="p-button-rounded p-button-secondary w-[40px] h-[40px]" 
          onClick={prevButtonHandler} 
        />
        <Button 
          icon="pi pi-arrow-right" 
          className="p-button-rounded p-button-secondary w-[40px] h-[40px]" 
          onClick={nextButtonHandler} 
        />
      </div>
    </section>
  );
}

export default AboutUs;
