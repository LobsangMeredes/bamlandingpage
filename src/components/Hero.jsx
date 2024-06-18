import React from 'react';
import portada from '../assets/portada.jpg';

function Hero() {
  return (
    <section 
      id="home"
      className="relative bg-cover bg-center h-screen md:h-auto flex items-center justify-center mb-20 md:mb-0"
      style={{ backgroundImage: `url(${portada})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <div className="absolute inset-0 bg-white-800 opacity-50"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h2 className="text-6xl md:text-5xl sm:text-4xl font-bold mb-4 text-white">Nuestro E-commerce se encuentra en mantenimiento</h2>
        <p className="text-2xl md:text-xl lg:text-2xl mb-8 text-white">Pero en esta página podrás conocer más sobre Books and More y nuestra misión de hacer los libros accesibles para todos.</p>
        <button className="px-6 py-3 sm:px-4 sm:py-2 rounded transition duration-300 bg-custom-yellow text-custom-dark">LEARN MORE</button>
      </div>
    </section>
  );
}

export default Hero;
