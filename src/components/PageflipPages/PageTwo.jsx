import React from 'react';
import ayuda1 from '../../assets/ayuda1.jpg';

function PageTwo() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="w-full flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 p-4 bg-white-100 ">
          <img src={ayuda1} alt="Nuestra Misión" className="w-[600px] max-h-[700px] object-contain rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4 text-left">
          <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
          <p className="text-lg mb-4">
            Nuestra misión es fomentar la lectura y la educación en la República Dominicana, haciendo que los libros sean accesibles para todos.
          </p>
          <p className="text-lg mb-4">
            A través de nuestras iniciativas y programas, buscamos crear un impacto positivo y duradero en las comunidades a las que servimos.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Promoción de la Lectura: Organizamos eventos y talleres para inspirar a los jóvenes a leer.</li>
            <li>Donaciones de Libros: Recibimos y distribuimos libros a comunidades desfavorecidas.</li>
            <li>Programas Educativos: Implementamos programas de alfabetización y apoyo escolar.</li>
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
