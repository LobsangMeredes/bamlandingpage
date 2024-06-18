import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const subscriptions = [
  {
    name: 'Lector Básico',
    cost: '4.50',
    details: [
      'Libro gratis sorpresa / mes',
      'Recomendaciones personalizadas de libros',
      '10% de descuento en las boletas para los eventos literarios organizados por Books and more'
    ]
  },
  {
    name: 'Lector Avanzado',
    cost: '9.00',
    details: [
      'Libro gratis de la categoría de su elección / mes',
      '5% de descuento en cajitas literarias',
      '15% de descuento en las boletas para los eventos literarios organizados por Books and more'
    ]
  },
  {
    name: 'Lector Premium',
    cost: '14.50',
    details: [
      'Un libro gratis mensual de su elección',
      'Acceso anticipado y gratuito a eventos literarios organizados por Books and more',
      'Acceso anticipado a las publicaciones de libros del día',
      'Participación en clubes de lectura exclusivos y encuentros con autores',
      '25% de descuentos en campamentos literarios',
      '10% de descuentos en cajitas literarias'
    ]
  }
];

const commonBenefits = [
  'Soporte Prioritario: Atención preferencial en consultas y pedidos.',
  'Descuentos Especiales: Ofertas y descuentos exclusivos en la compra de libros adicionales.',
  'Contribución Social: Contribuir directamente a los programas de alfabetización y donación de libros en comunidades desfavorecidas.'
];

function Subscription() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="subscriptions" className="p-20 bg-white text-custom-yellow text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">NIVELES DE SUSCRIPCIÓN PARA EL E-COMMERCE DE BOOKS AND MORE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {subscriptions.map((subscription, index) => (
            <div key={index} className="relative bg-custom-yellow p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-custom-dark">{subscription.name}</h3>
                  <p className="text-lg font-semibold text-custom-dark">${subscription.cost} USD mensuales</p>
                </div>
                <button
                  onClick={() => toggleDetails(index)}
                  className="text-custom-dark focus:outline-none"
                >
                  {openIndex === index ? '▲' : '▼'}
                </button>
              </div>
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                {openIndex === index && (
                  <div className="mt-4 text-left text-custom-dark">
                    <ul className="list-disc list-inside space-y-2">
                      {subscription.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <PayPalButtons
                        style={{ layout: 'vertical' }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [{
                              amount: {
                                value: subscription.cost
                              }
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
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-custom-yellow p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 text-custom-dark">Beneficios Comunes:</h3>
          <ul className="list-disc list-inside space-y-2 text-left text-custom-dark">
            {commonBenefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
