import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const VIPCarousel = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    '/VIP.jpg',
    '/image001.jpg',
    '/image003.jpg'
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, images.length]);

  if (!isOpen) return null;

  return (
    <>
      {/* Botón de cerrar - Posición fija superior derecha */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-[60] p-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full transition-all duration-200 hover:scale-110 shadow-2xl group"
        aria-label="Cerrar galería"
      >
        <X size={24} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Contenedor principal con scroll y overlay */}
      <div 
        className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      >
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 py-20">
          <div 
            className="w-full max-w-7xl flex flex-col items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Título y contador */}
            <div className="flex items-center gap-4">
              <div className="px-8 py-3 bg-[#ba9141] text-white font-bold text-xl rounded-full shadow-2xl">
                ZONA VIP
              </div>
              <div className="px-5 py-2 bg-white/90 text-gray-900 text-sm font-bold rounded-full shadow-xl">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Carousel de imágenes sin límite de altura */}
            <div className="relative flex items-center justify-center w-full">
              <img
                src={images[currentIndex]}
                alt={`Zona VIP - Imagen ${currentIndex + 1}`}
                className="max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl transition-opacity duration-300"
                style={{ imageRendering: 'high-quality' }}
              />
              
              {/* Botón Anterior */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full transition-all duration-200 hover:scale-110 shadow-2xl"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={28} strokeWidth={2.5} />
              </button>

              {/* Botón Siguiente */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full transition-all duration-200 hover:scale-110 shadow-2xl"
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={28} strokeWidth={2.5} />
              </button>
            </div>

            {/* Indicadores de navegación */}
            <div className="flex flex-col items-center gap-4">
              {/* Puntos indicadores */}
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75 w-2'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Instrucciones */}
              <div className="text-white/80 text-sm font-medium text-center bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm">
                Haz scroll para ver la imagen completa • Usa las flechas para navegar • ESC para cerrar
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VIPCarousel;
