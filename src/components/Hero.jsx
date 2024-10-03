import React from 'react';
import { Button } from 'primereact/button'; // Importando el botón de PrimeReact
import portada from '../assets/portada.jpg';

function Hero() {
  return (
    <section 
      id="home"
      className="relative bg-cover bg-center h-screen flex items-center justify-center mb-20"
      style={{ backgroundImage: `url(${portada})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      {/* Overlay con un degradado para el fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
      
      {/* Contenido del Hero */}
      <div className="relative z-10 text-center text-white p-4 max-w-2xl">
        <h2 className="text-5xl md:text-4xl font-bold mb-4 text-white">Nuestro E-commerce se encuentra en mantenimiento</h2>
        <p className="text-2xl md:text-xl lg:text-2xl mb-8 text-white">Conoce más sobre Books and More y nuestra misión de hacer los libros accesibles para todos.</p>

        {/* Botones PrimeReact */}
        <div className="flex justify-center gap-4">
          <Button label="Aprende mas" className="p-button p-button-rounded p-button-primary px-6 py-3 sm:px-4 sm:py-2" />
          <Button label="Contactanos" className="p-button p-button-rounded p-button-secondary px-6 py-3 sm:px-4 sm:py-2" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
