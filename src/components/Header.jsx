import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Membresías', id: 'membresias' },
    { name: 'Academia', id: 'academia' },
    { name: 'Nuestro Equipo', id: 'equipo' },
    { name: 'Noticias', id: 'noticias' },
    { name: 'Contacto', id: 'contacto' },
    { name: 'Reservas', id: 'reservas' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-white/95 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <button onClick={() => setActiveTab('inicio')} className="flex items-center space-x-2">
            <img 
              src="/reserva logo web.png" 
              alt="Reserva Sports & Social Club" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </button>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.id)}
                className={`group px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                  activeTab === item.id
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {/* Bola de pádel en hover */}
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#30544b] rounded-full opacity-0 group-hover:opacity-100 group-hover:-top-3 transition-all duration-300 shadow-lg">
                  {/* Textura de bola de pádel */}
                  <span className="absolute inset-0 rounded-full border border-white/30"></span>
                  <span className="absolute top-1/2 left-0 right-0 h-px bg-white/20"></span>
                  <span className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20"></span>
                </span>
                
                {item.name}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#30544b]" />
                )}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => window.open('https://wa.me/50687980008?text=Hola, me gustaría hacer una reserva en Club Reserva', '_blank')}
              className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Reservar ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-accent-600 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveTab(item.id)
                  setIsMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'text-accent-600 bg-accent-50'
                    : 'text-gray-700 hover:text-accent-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                window.open('https://wa.me/50687980008?text=Hola, me gustaría hacer una reserva en Club Reserva', '_blank')
                setIsMobileMenuOpen(false)
              }}
              className="block w-full px-4 py-3 bg-gray-900 text-white font-semibold rounded-lg text-center hover:bg-gray-800 transition-colors"
            >
              Reservar ahora
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
