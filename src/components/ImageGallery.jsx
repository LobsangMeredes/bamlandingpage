import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// Imports de imágenes
import aln1 from '../assets/alanna1.jpg';
import charla7 from '../assets/charla7.jpg';
import ventas1 from '../assets/ventas1.jpg';
import campamento1 from '../assets/campamento1.jpg';
import charlagrande1 from '../assets/charlagrande1.jpg';
import programa2 from '../assets/programa2.jpg';

const images = [
  {
    url: aln1,
    description: 'Descripción de la imagen 1'
  },
  {
    url: charla7,
    description: 'Descripción de la imagen 2'
  },
  {
    url: ventas1,
    description: 'Descripción de la imagen 3'
  },
  {
    url: campamento1,
    description: 'Descripción de la imagen 4'
  },
  {
    url: charlagrande1,
    description: 'Descripción de la imagen 5'
  },
  {
    url: programa2,
    description: 'Descripción de la imagen 6'
  },
];

function ImageGallery() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-20 bg-custom-dark text-center" id="gallery">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-custom-yellow">Galería de Imágenes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {images.map((image, index) => (
            <div key={index} className="relative bg-custom-gray p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
              <img
                src={image.url}
                alt={`Gallery ${index}`}
                className="cursor-pointer w-full h-full object-cover"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <p className="text-custom-yellow text-lg">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].url}
            nextSrc={images[(photoIndex + 1) % images.length].url}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
      </div>
    </div>
  );
}

export default ImageGallery;
