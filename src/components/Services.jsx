import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDonate, 
  faTags, 
  faChalkboardTeacher, 
  faBookReader, 
  faProjectDiagram, 
  faRecycle, 
  faLockOpen 
} from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <section id="services" className="p-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">SERVICIOS DE BOOKS AND MORE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="text-blue-200 mb-4">
              <FontAwesomeIcon icon={faDonate} size="3x" className="transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold mb-2">Donaciones de Libros</h3>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>Recepción de libros donados por particulares y organizaciones.</li>
              <li>Clasificación y distribución de libros donados a comunidades y escuelas desfavorecidas.</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="text-blue-200 mb-4">
              <FontAwesomeIcon icon={faTags} size="3x" className="transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold mb-2">Ventas Accesibles</h3>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>Venta de libros nuevos y usados a precios muy bajos (desde RD$ 10) e incluso gratuitos.</li>
              <li>Plataforma de e-commerce para facilitar la compra de libros de forma accesible.</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="text-blue-200 mb-4">
              <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" className="transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold mb-2">Eventos Educativos</h3>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>Organización de talleres literarios, charlas y actividades educativas en comunidades y escuelas.</li>
              <li>Campamentos literarios y picnics literarios para promover la lectura y el aprendizaje.</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="text-blue-200 mb-4">
              <FontAwesomeIcon icon={faBookReader} size="3x" className="transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold mb-2">Programas de Alfabetización</h3>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>Implementación de programas de alfabetización en comunidades vulnerables.</li>
              <li>Colaboración con escuelas para mejorar las habilidades de lectura y escritura de los estudiantes.</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="text-blue-200 mb-4">
              <FontAwesomeIcon icon={faProjectDiagram} size="3x" className="transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold mb-2">Colaboraciones y Proyectos Especiales</h3>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>Participación en proyectos como "Dominicana Lee" del Ministerio de Educación.</li>
              <li>Alianzas con otras organizaciones para expandir el alcance y el impacto del proyecto.</li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="text-blue-200 mb-4">
              <FontAwesomeIcon icon={faLockOpen} size="3x" className="transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold mb-2">Acceso Anticipado y Exclusivo</h3>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>Planes de suscripción que ofrecen acceso anticipado a los libros publicados.</li>
              <li>Entradas exclusivas a eventos y libros gratuitos mensuales.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
