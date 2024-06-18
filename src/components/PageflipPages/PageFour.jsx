import React from 'react';
import charla3 from '../../assets/charla3.jpg';

function PageFour() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="w-full flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 p-4 bg-white-100">
          <img src={charla3} alt="Nuestros Eventos" className="w-[600px] max-h-[700px] object-contain rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4 text-left">
          <h2 className="text-3xl font-bold mb-4">Nuestros Eventos</h2>
          <p className="text-lg mb-4">
            En Books and More, organizamos una variedad de eventos y actividades diseñadas para promover la lectura y la educación en nuestras comunidades.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Campamentos Literarios: Organizamos campamentos donde los jóvenes pueden sumergirse en el mundo de la lectura a través de actividades interactivas.</li>
            <li>Charlas y Talleres: Ofrecemos charlas y talleres educativos en escuelas y comunidades, promoviendo la alfabetización y el amor por los libros.</li>
            <li>Eventos Literarios: Realizamos eventos como ferias del libro y picnics literarios para crear un ambiente de aprendizaje y diversión.</li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PageFour;
