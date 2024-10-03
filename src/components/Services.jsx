import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate, faTags, faChalkboardTeacher, faBookReader, faProjectDiagram, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'primereact/card'; // Importando PrimeReact Card
import { Button } from 'primereact/button'; // Importando PrimeReact Button
import 'primereact/resources/primereact.min.css'; // Estilos de PrimeReact
import 'primeicons/primeicons.css';

function Services() {
  const services = [
    {
      icon: faDonate,
      title: 'Donaciones de Libros',
      description: [
        'Recepción de libros donados por particulares y organizaciones.',
        'Clasificación y distribución de libros donados a comunidades y escuelas desfavorecidas.'
      ]
    },
    {
      icon: faTags,
      title: 'Ventas Accesibles',
      description: [
        'Venta de libros nuevos y usados a precios muy bajos (desde RD$ 10) e incluso gratuitos.',
        'Plataforma de e-commerce para facilitar la compra de libros de forma accesible.'
      ]
    },
    {
      icon: faChalkboardTeacher,
      title: 'Eventos Educativos',
      description: [
        'Organización de talleres literarios, charlas y actividades educativas en comunidades y escuelas.',
        'Campamentos literarios y picnics literarios para promover la lectura y el aprendizaje.'
      ]
    },
    {
      icon: faBookReader,
      title: 'Programas de Alfabetización',
      description: [
        'Implementación de programas de alfabetización en comunidades vulnerables.',
        'Colaboración con escuelas para mejorar las habilidades de lectura y escritura de los estudiantes.'
      ]
    },
    {
      icon: faProjectDiagram,
      title: 'Colaboraciones y Proyectos Especiales',
      description: [
        'Participación en proyectos como "Dominicana Lee" del Ministerio de Educación.',
        'Alianzas con otras organizaciones para expandir el alcance y el impacto del proyecto.'
      ]
    },
    {
      icon: faLockOpen,
      title: 'Acceso Anticipado y Exclusivo',
      description: [
        'Planes de suscripción que ofrecen acceso anticipado a los libros publicados.',
        'Entradas exclusivas a eventos y libros gratuitos mensuales.'
      ]
    }
  ];

  return (
    <section id="services" className="p-20 bg-custom-dark text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-custom-yellow">SERVICIOS DE BOOKS AND MORE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-lg bg-white" 
              title={service.title}
              subTitle={
                <FontAwesomeIcon icon={service.icon} size="3x" className="mb-4 text-custom-yellow" />
              }
            >
              <ul className="text-left list-disc list-inside space-y-2">
                {service.description.map((desc, i) => (
                  <li key={i} className="text-custom-dark">{desc}</li>
                ))}
              </ul>
              <Button label="Más información" icon="pi pi-info-circle" className="p-button-rounded p-button-outlined mt-4" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
