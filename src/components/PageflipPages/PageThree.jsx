import React from 'react';
import charla6 from '../../assets/charla6.jpg';

function PageThree() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <img src={charla6} alt="Nuestro Equipo" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4 text-left">
          <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-lg mb-4">
            Nuestro equipo está compuesto por 30 voluntarios apasionados y un equipo de gestión comprometido con la misión de Books and More. Cada miembro aporta competencias únicas en educación, gestión de proyectos, marketing y tecnología, asegurando que podamos llevar a cabo nuestra misión con eficacia y pasión.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default PageThree;
