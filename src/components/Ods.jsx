import { motion } from 'framer-motion';
import { useState } from 'react';
import odsonu from '../assets/odsonu.png';
import ods4 from '../assets/ods4.png';
import ods10 from '../assets/ods10.png';
import ods13 from '../assets/ods13.png';
import ods17 from '../assets/ods17.png';

function IconosAnimados() {
  const variantesIcono = {
    inicial: { opacity: 1, y: 0 },
    animado: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 } 
    },
    hover: {
      scale: 1.1, 
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.2
      }
    }
  };

  const [iconoActivo, setIconoActivo] = useState(null);

  const iconos = [
    { src: ods4, alt: "ODS 4: Educación de Calidad" },
    { src: ods10, alt: "ODS 10: Reducción de las Desigualdades" },
    { src: ods13, alt: "ODS 13: Acción por el Clima" },
    { src: ods17, alt: "ODS 17: Alianzas para lograr los Objetivos" }
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <motion.img
        src={odsonu}
        alt="Logo ONU"
        className="w-full md:w-[800px] mb-10 h-auto"
      />

      <div className="flex flex-wrap justify-center md:space-x-8 space-y-4 md:space-y-0">
        {iconos.map((icono, index) => (
          <motion.div
            key={index}
            variants={variantesIcono}
            initial="inicial"
            animate="animado"
            whileHover="hover"
            onClick={() => setIconoActivo(index)}
            className={`cursor-pointer ${iconoActivo === index ? "shadow-lg" : ""}`}
          >
            <img
              src={icono.src}
              alt={icono.alt}
              className="w-[150px] h-[150px] md:w-[210px] md:h-[210px]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default IconosAnimados;
