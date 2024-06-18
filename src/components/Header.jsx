import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import { FaHome, FaInfoCircle, FaStar, FaConciergeBell, FaBook, FaImages, FaEnvelope } from 'react-icons/fa';
import './Header.css'; // Asegúrate de crear este archivo CSS para los estilos

import bamlogo from '../assets/bamlogo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-custom-yellow text-custom-dark p-4 fixed w-full z-20 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <img src={bamlogo} alt="Books and More" style={{ width: '200px', height: 'auto '  }} />
      </h1>
      <div className="md:hidden">
        <Menu right isOpen={isOpen} onStateChange={handleStateChange}>
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="menu-item" onClick={closeMenu}>
            <FaHome className="inline mr-2" /> Inicio
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="menu-item" onClick={closeMenu}>
            <FaInfoCircle className="inline mr-2" /> Sobre Nosotros
          </Link>
          <Link to="features" spy={true} smooth={true} offset={-70} duration={500} className="menu-item" onClick={closeMenu}>
            <FaStar className="inline mr-2" /> Nuestros Valores
          </Link>
          <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className="menu-item" onClick={closeMenu}>
            <FaConciergeBell className="inline mr-2" /> Servicios
          </Link>
          <Link to="subscriptions" spy={true} smooth={true} offset={-70} duration={500} className="menu-item" onClick={closeMenu}>
            <FaBook className="inline mr-2" /> Suscripciones
          </Link>
          <Link to="gallery" spy={true} smooth={true} offset={-70} duration={500} className="menu-item" onClick={closeMenu}>
            <FaImages className="inline mr-2" /> Galería de Imágenes
          </Link>
          <Link to="newsletter" spy={true} smooth={true} offset={-70} duration={500} className="menu-item" onClick={closeMenu}>
            <FaEnvelope className="inline mr-2" /> Mantente al tanto
          </Link>
        </Menu>
      </div>
      <nav className="hidden md:flex space-x-8">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="flex items-center space-x-1 cursor-pointer">
          <FaHome />
          <span>Inicio</span>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="flex items-center space-x-1 cursor-pointer">
          <FaInfoCircle />
          <span>Sobre Nosotros</span>
        </Link>
        <Link to="features" spy={true} smooth={true} offset={-70} duration={500} className="flex items-center space-x-1 cursor-pointer">
          <FaStar />
          <span>Nuestros Valores</span>
        </Link>
        <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className="flex items-center space-x-1 cursor-pointer">
          <FaConciergeBell />
          <span>Servicios</span>
        </Link>
        <Link to="subscriptions" spy={true} smooth={true} offset={-70} duration={500} className="flex items-center space-x-1 cursor-pointer">
          <FaBook />
          <span>Suscripciones</span>
        </Link>
        <Link to="gallery" spy={true} smooth={true} offset={-70} duration={500} className="flex items-center space-x-1 cursor-pointer">
          <FaImages />
          <span>Galería de Imágenes</span>
        </Link>
        <Link to="newsletter" spy={true} smooth={true} offset={-70} duration={500} className="flex items-center space-x-1 cursor-pointer">
          <FaEnvelope />
          <span>Mantente al tanto</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
