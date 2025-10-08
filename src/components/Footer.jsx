import React from 'react'
import { MessageCircle } from 'lucide-react'

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/50687980008', '_blank')
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Encuéntranos Section */}
          <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">Encuéntranos</h3>
          
          <div className="mb-6">
            <h4 className="text-gray-400 text-sm mb-2">Dirección</h4>
            <p className="text-white text-sm">
              Frente a edificio 402 en Zona 400, Avenida Escazú, San José, Costa Rica
            </p>
          </div>

          <div>
            <h4 className="text-gray-400 text-sm mb-2">Horario</h4>
            <p className="text-white text-sm">Lunes a Viernes 6:00 a.m. – 11:00 p.m</p>
            <p className="text-white text-sm">Sábados 7:00 a.m. – 9:00 p.m.</p>
            <p className="text-white text-sm">Domingos 9:00 a.m. – 9:00 p.m.</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Reserva Sports & Social Club. All rights reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </button>
    </footer>
  )
}

export default Footer
