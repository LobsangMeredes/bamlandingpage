import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess, faGraduationCap, faRecycle, faHandHoldingHeart, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'primereact/card'; // Importando PrimeReact Card
import 'primereact/resources/primereact.min.css'; // Estilos de PrimeReact
import 'primeicons/primeicons.css';

function Features() {
  const features = [
    {
      icon: faUniversalAccess,
      title: 'Accesibilidad',
      description: 'Hacer que los libros sean accesibles para todos, independientemente de su situación económica.'
    },
    {
      icon: faGraduationCap,
      title: 'Educación',
      description: 'Promover la educación y la alfabetización como herramientas fundamentales para el desarrollo personal y comunitario.'
    },
    {
      icon: faRecycle,
      title: 'Sostenibilidad',
      description: 'Fomentar la cultura del reciclaje y la sostenibilidad ambiental a través de la reutilización de libros.'
    },
    {
      icon: faHandHoldingHeart,
      title: 'Impacto Social',
      description: 'Trabajar en colaboración con comunidades y organizaciones para crear un impacto positivo y duradero.'
    },
    {
      icon: faLightbulb,
      title: 'Innovación',
      description: 'Desarrollar soluciones creativas e innovadoras para superar las barreras de acceso a la lectura y la educación.'
    }
  ];

  return (
    <section id="features" className="p-20 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-custom-dark">VALORES</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-lg p-6 bg-custom-yellow rounded-lg">
              <div className="text-custom-dark mb-4">
                <FontAwesomeIcon icon={feature.icon} size="3x" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-custom-dark">{feature.title}</h3>
              <p className="text-custom-dark">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
