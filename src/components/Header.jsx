import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Tema de PrimeReact
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Header.css'; // Archivo CSS personalizado

import bamlogo from '../assets/bamlogo.png';

function Header() {
  const items = [
    { label: 'Inicio', icon: 'pi pi-home', command: () => scrollTo('home') },
    { label: 'Sobre Nosotros', command: () => scrollTo('about') },
    { label: 'Nuestros Valores', command: () => scrollTo('features') },
    { label: 'Servicios', command: () => scrollTo('services') },
    { label: 'Suscripciones', command: () => scrollTo('subscriptions') },
    { label: 'Galería de Imágenes', command: () => scrollTo('gallery') },
  ];

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  };

  const start = <img alt="logo" src={bamlogo} style={{ width: '120px', height: 'auto' }} />;

  return (
    <header className="header-container">
      <Menubar model={items} start={start} />
    </header>
  );
}

export default Header;
