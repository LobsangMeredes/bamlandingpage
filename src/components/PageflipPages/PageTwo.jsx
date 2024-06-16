import React from 'react';

function PageTwo() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="w-full flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 p-4">
          <img src="https://via.placeholder.com/600x400" alt="Our Mission" className="w-full h-auto rounded-lg shadow-lg" />
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
            <li>Iniciativa 1: Detalles sobre la iniciativa.</li>
            <li>Iniciativa 2: Detalles sobre la iniciativa.</li>
            <li>Iniciativa 3: Detalles sobre la iniciativa.</li>
            <li>Iniciativa 4: Detalles sobre la iniciativa.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
