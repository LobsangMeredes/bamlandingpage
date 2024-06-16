import React from 'react';

function Hero() {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1581092580497-e0d14eb2a6b3'; // URL de la imagen de fondo

  return (
    <section 
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h2 className="text-4xl font-bold mb-4">WE ARE A LANDING PAGE</h2>
        <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p>
        <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition duration-300">LEARN MORE</button>
      </div>
    </section>
  );
}

export default Hero;
