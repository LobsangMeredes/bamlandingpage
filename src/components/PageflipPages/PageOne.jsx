import React from 'react';
import charlagrande1 from '../../assets/charlagrande1.jpg';

function PageOne() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-white">
      <div className="w-full flex flex-col md:flex-row items-center h-full">
        <div className="w-full md:w-1/2 p-4">
          <img src={charlagrande1} alt="Sobre Nosotros" className="w-full h-auto max-h-full rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4 text-left overflow-y-auto">
          <h2 className="text-3xl md:text-2xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-lg md:text-base mb-4">
            Books and More es una organización dedicada a hacer que los libros sean accesibles para todos, especialmente para los jóvenes en comunidades desfavorecidas. 
          </p>
          <p className="text-lg md:text-base mb-4">
            A través de donaciones de libros, ventas accesibles y eventos educativos, hemos impactado a más de 2,500 niños en 15 escuelas y colegios en ciudades como Santo Domingo, Santiago, Baní, La Vega y San Cristóbal.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default PageOne;
