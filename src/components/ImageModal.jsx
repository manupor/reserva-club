import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const ImageModal = ({ isOpen, onClose, image, title }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

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
            {/* Título elegante */}
            {title && (
              <div className="px-8 py-3 bg-[#ba9141] text-white font-bold text-xl rounded-full shadow-2xl">
                {title}
              </div>
            )}

            {/* Imagen sin límite de altura - tamaño completo */}
            <div className="relative flex items-center justify-center w-full">
              <img
                src={image}
                alt={title || 'Imagen'}
                className="max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl"
                style={{ imageRendering: 'high-quality' }}
              />
            </div>

            {/* Instrucciones de uso */}
            <div className="text-white/80 text-sm font-medium text-center bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm">
              Haz scroll para ver toda la imagen • Presiona ESC o haz clic fuera para cerrar
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageModal;
