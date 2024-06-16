import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; 2024 Virtual Bookstore. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="mx-2">Facebook</a>
          <a href="#" className="mx-2">Twitter</a>
          <a href="#" className="mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
