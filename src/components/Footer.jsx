import React from 'react';

function Footer() {
  return (
    <footer className="bg-white text-custom-yellow p-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm md:text-base">&copy; 2024 Virtual Bookstore. Todos los derechos reservados.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-custom-yellow hover:underline">Facebook</a>
          <a href="#" className="text-custom-yellow hover:underline">Twitter</a>
          <a href="#" className="text-custom-yellow hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
