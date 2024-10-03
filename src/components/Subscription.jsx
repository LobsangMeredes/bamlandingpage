import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { Card } from 'primereact/card'; // Importamos el Card de PrimeReact
import { Button } from 'primereact/button'; // Importamos Button de PrimeReact
import { Accordion, AccordionTab } from 'primereact/accordion'; // Importamos el Accordion para las descripciones de los planes
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const subscriptions = [
  {
    name: 'Lector Básico',
    cost: '4.50',
    details: [
      'Libro gratis sorpresa / mes',
      'Recomendaciones personalizadas de libros',
      '10% de descuento en eventos literarios organizados por Books and more'
    ]
  },
  {
    name: 'Lector Avanzado',
    cost: '9.00',
    details: [
      'Libro gratis de la categoría de su elección / mes',
      '5% de descuento en cajitas literarias',
      '15% de descuento en eventos literarios organizados por Books and more'
    ]
  },
  {
    name: 'Lector Premium',
    cost: '14.50',
    details: [
      'Un libro gratis mensual de su elección',
      'Acceso anticipado a eventos literarios organizados por Books and more',
      'Acceso anticipado a publicaciones de libros',
      'Participación en clubes de lectura exclusivos',
      '25% de descuentos en campamentos literarios',
      '10% de descuentos en cajitas literarias'
    ]
  }
];

const commonBenefits = [
  'Soporte Prioritario: Atención preferencial en consultas y pedidos.',
  'Descuentos Especiales: Ofertas y descuentos exclusivos en la compra de libros adicionales.',
  'Contribución Social: Contribuir directamente a los programas de alfabetización en comunidades desfavorecidas.'
];

function Subscription() {
  return (
    <section id="subscriptions" className="p-20 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">NIVELES DE SUSCRIPCIÓN PARA BOOKS AND MORE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {subscriptions.map((subscription, index) => (
            <Card key={index} className="shadow-lg">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-custom-dark">{subscription.name}</h3>
                <p className="text-lg font-semibold text-custom-dark">${subscription.cost} USD mensuales</p>
                <Accordion>
                  <AccordionTab header="Ver más detalles">
                    <ul className="list-disc list-inside space-y-2 text-left">
                      {subscription.details.map((detail, idx) => (
                        <li key={idx} className="text-custom-dark">{detail}</li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <PayPalButtons
                        style={{ layout: 'vertical' }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [{
                              amount: { value: subscription.cost }
                            }]
                          });
                        }}
                        onApprove={(data, actions) => {
                          return actions.order.capture().then((details) => {
                            alert(`Transaction completed by ${details.payer.name.given_name}`);
                          });
                        }}
                      />
                    </div>
                  </AccordionTab>
                </Accordion>
              </div>
            </Card>
          ))}
        </div>
        <Card className="shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-custom-dark">Beneficios Comunes:</h3>
          <ul className="list-disc list-inside space-y-2 text-left text-custom-dark">
            {commonBenefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

export default Subscription;
