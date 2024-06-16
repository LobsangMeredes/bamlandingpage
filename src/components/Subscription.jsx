import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const subscriptions = [
  {
    name: 'Lector Básico',
    cost: '$4.50 USD mensuales',
    details: [
      'Acceso Anticipado: Acceso a la publicación de nuevos libros antes que el público general.'
    ]
  },
  {
    name: 'Lector Avanzado',
    cost: '$9.00 USD mensuales',
    details: [
      'Acceso Anticipado: Acceso a la publicación de nuevos libros antes que el público general.',
      'Eventos Exclusivos: Entradas en horarios exclusivos a eventos literarios.'
    ]
  },
  {
    name: 'Lector Premium',
    cost: '$14.50 USD mensuales',
    details: [
      'Acceso Anticipado: Acceso a la publicación de nuevos libros antes que el público general.',
      'Eventos Exclusivos: Entradas en horarios exclusivos a eventos literarios.',
      'Libros Gratuitos: Un libro gratuito cada mes.'
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
    <section id="subscriptions" className="p-20 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">NIVELES DE SUSCRIPCIÓN PARA EL E-COMMERCE DE BOOKS AND MORE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {subscriptions.map((subscription, index) => (
            <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">{subscription.name}</h3>
                  <p className="text-lg font-semibold">{subscription.cost}</p>
                </div>
                <button
                  onClick={() => toggleDetails(index)}
                  className="text-blue-500 focus:outline-none"
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
                  <div className="mt-4 text-left">
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
                                value: subscription.cost.split(' ')[0].replace('$', '')
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
        <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Beneficios Comunes:</h3>
          <ul className="list-disc list-inside space-y-2 text-left">
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
