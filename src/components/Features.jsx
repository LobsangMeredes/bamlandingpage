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
        <h2 className="text-3xl font-bold mb-8 text-custom-dark">VALORES</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="bg-custom-yellow p-6 rounded-lg shadow-lg">
            <div className="text-custom-dark mb-4">
              <FontAwesomeIcon icon={faUniversalAccess} size="3x" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-custom-dark">Accesibilidad</h3>
            <p className="text-custom-dark">Hacer que los libros sean accesibles para todos, independientemente de su situación económica.</p>
          </div>
          <div className="bg-custom-yellow p-6 rounded-lg shadow-lg">
            <div className="text-custom-dark mb-4">
              <FontAwesomeIcon icon={faGraduationCap} size="3x" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-custom-dark">Educación</h3>
            <p className="text-custom-dark">Promover la educación y la alfabetización como herramientas fundamentales para el desarrollo personal y comunitario.</p>
          </div>
          <div className="bg-custom-yellow p-6 rounded-lg shadow-lg">
            <div className="text-custom-dark mb-4">
              <FontAwesomeIcon icon={faRecycle} size="3x" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-custom-dark">Sostenibilidad</h3>
            <p className="text-custom-dark">Fomentar la cultura del reciclaje y la sostenibilidad ambiental a través de la reutilización de libros.</p>
          </div>
          <div className="bg-custom-yellow p-6 rounded-lg shadow-lg">
            <div className="text-custom-dark mb-4">
              <FontAwesomeIcon icon={faHandHoldingHeart} size="3x" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-custom-dark">Impacto Social</h3>
            <p className="text-custom-dark">Trabajar en colaboración con comunidades y organizaciones para crear un impacto positivo y duradero.</p>
          </div>
          <div className="bg-custom-yellow p-6 rounded-lg shadow-lg">
            <div className="text-custom-dark mb-4">
              <FontAwesomeIcon icon={faLightbulb} size="3x" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-custom-dark">Innovación</h3>
            <p className="text-custom-dark">Desarrollar soluciones creativas e innovadoras para superar las barreras de acceso a la lectura y la educación.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
