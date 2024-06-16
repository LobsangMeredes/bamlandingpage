import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  {
    url: 'https://via.placeholder.com/600x400',
    description: 'Descripción de la imagen 1'
  },
  {
    url: 'https://via.placeholder.com/600x400',
    description: 'Descripción de la imagen 2'
  },
  {
    url: 'https://via.placeholder.com/600x400',
    description: 'Descripción de la imagen 3'
  },
  {
    url: 'https://via.placeholder.com/600x400',
    description: 'Descripción de la imagen 4'
  },
  {
    url: 'https://via.placeholder.com/600x400',
    description: 'Descripción de la imagen 4'
  },
  {
    url: 'https://via.placeholder.com/600x400',
    description: 'Descripción de la imagen 4'
  },
];

function ImageGallery() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-20 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Galería de Imágenes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {images.map((image, index) => (
            <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl">
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
                <p className="text-white text-lg">{image.description}</p>
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
