import React from 'react';

function PageOne() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <img src="https://via.placeholder.com/600x400" alt="About us" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4 text-left">
          <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>Lorem ipsum dolor</li>
            <li>Tempor incididunt</li>
            <li>Lorem ipsum dolor</li>
            <li>Incididunt ut labore</li>
            <li>Aliquip ex ea commodo</li>
            <li>Lorem ipsum dolor</li>
            <li>Exercitation ullamco</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PageOne;
