import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaInfoCircle, FaStar, FaConciergeBell, FaBook, FaImages, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full z-20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Virtual Bookstore</h1>
        <nav className="flex space-x-4">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center space-x-1 cursor-pointer"
          >
            <FaHome />
            <span>Inicio</span>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center space-x-1 cursor-pointer"
          >
            <FaInfoCircle />
            <span>Sobre Nosotros</span>
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center space-x-1 cursor-pointer"
          >
            <FaStar />
            <span>Nuetros Valores</span>
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center space-x-1 cursor-pointer"
          >
            <FaConciergeBell />
            <span>Servicios</span>
          </Link>
          <Link
            to="subscriptions"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center space-x-1 cursor-pointer"
          >
            <FaBook />
            <span>Suscripciones</span>
          </Link>
          <Link
            to="imageGallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center space-x-1 cursor-pointer"
          >
            <FaImages />
            <span>Galeria de Imagenes</span>
          </Link>
          <Link
            to="newsletter"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center space-x-1 cursor-pointer"
          >
            <FaEnvelope />
            <span>Mantente al tanto</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
