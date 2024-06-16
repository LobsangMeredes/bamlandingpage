import React from 'react';

function PageThree() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <img src="https://via.placeholder.com/600x400" alt="Our Team" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4 text-left">
          <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-lg mb-4">
            Conozca al equipo dedicado detrás de nuestra misión. Cada uno de nuestros miembros juega un papel crucial en el éxito de nuestra organización.
          </p>
          <h3 className="text-2xl font-bold mb-4">Miembros del Equipo</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>Juan Pérez - Director Ejecutivo</li>
            <li>María Gómez - Coordinadora de Proyectos</li>
            <li>Carlos Rodríguez - Gerente de Marketing</li>
            <li>Ana Martínez - Coordinadora de Eventos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PageThree;
