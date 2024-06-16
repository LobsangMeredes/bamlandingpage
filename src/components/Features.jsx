import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUniversalAccess, 
  faGraduationCap, 
  faRecycle, 
  faHandHoldingHeart, 
  faLightbulb 
} from '@fortawesome/free-solid-svg-icons';

function Features() {
  return (
    <section id="features" className="p-20 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">VALORES</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-blue-500 mb-4">
              <FontAwesomeIcon icon={faUniversalAccess} size="3x" />
            </div>
            <h3 className="text-xl font-bold mb-2">Accesibilidad</h3>
            <p>Hacer que los libros sean accesibles para todos, independientemente de su situación económica.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-blue-500 mb-4">
              <FontAwesomeIcon icon={faGraduationCap} size="3x" />
            </div>
            <h3 className="text-xl font-bold mb-2">Educación</h3>
            <p>Promover la educación y la alfabetización como herramientas fundamentales para el desarrollo personal y comunitario.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-blue-500 mb-4">
              <FontAwesomeIcon icon={faRecycle} size="3x" />
            </div>
            <h3 className="text-xl font-bold mb-2">Sostenibilidad</h3>
            <p>Fomentar la cultura del reciclaje y la sostenibilidad ambiental a través de la reutilización de libros.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-blue-500 mb-4">
              <FontAwesomeIcon icon={faHandHoldingHeart} size="3x" />
            </div>
            <h3 className="text-xl font-bold mb-2">Impacto Social</h3>
            <p>Trabajar en colaboración con comunidades y organizaciones para crear un impacto positivo y duradero.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-blue-500 mb-4">
              <FontAwesomeIcon icon={faLightbulb} size="3x" />
            </div>
            <h3 className="text-xl font-bold mb-2">Innovación</h3>
            <p>Desarrollar soluciones creativas e innovadoras para superar las barreras de acceso a la lectura y la educación.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
