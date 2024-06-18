import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      user_email: email,
    };

    emailjs.send('service_u6rugxw', 'template_aqpehzm', templateParams, 'Phh_zVPnj7lEdHIqt')
      .then((response) => {
        setMessage('Suscripción exitosa');
        setEmail('');
      }, (error) => {
        setMessage('Ocurrió un error. Por favor, inténtelo de nuevo.');
      });
  };

  return (
    <section id="newsletter" className="p-20 bg-custom-dark text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-custom-yellow">Mantente al tanto</h2>
        <p className="text-lg mb-4 text-custom-yellow">Suscríbete a nuestro boletín para recibir las últimas actualizaciones y ofertas especiales.</p>
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Introduce tu correo electrónico"
            className="p-2 border border-gray-300 rounded-l-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="p-2 bg-custom-yellow text-custom-dark rounded-r-lg">Suscribirse</button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>
    </section>
  );
}

export default Newsletter;
