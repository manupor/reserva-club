import React, { useState, useEffect } from 'react'

const Nosotros = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Activar animaciones cuando el componente se monta
    setIsVisible(true)
  }, [])

  const services = [
    {
      title: '5 Pistas Indoor Panorámicas',
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: '1 Pista Estadio Súper Panorámica',
      image: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Hooligans Sport Bar',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Zona VIP',
      image: 'https://images.unsplash.com/photo-1617883861744-1c0c0e2a0da5?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Simuladores de Golf',
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Tienda Boutique',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    },
  ]

  return (
    <section 
      id="nosotros" 
      className={`py-20 bg-gray-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Text */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bienvenidos a Reserva
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
            Sports & Social Club
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Un club social y deportivo para toda la familia, que combina lo mejor del Pádel y la naturaleza. 
            En nuestra Reserva, le ofrecemos una experiencia culinaria inigualable, dos simuladores de golf 
            de última generación, nuestras pistas de Pádel profesionales y nuestra tienda boutique, donde 
            encontrará las últimas tendencias. Todo esto rodeado de una vegetación extraordinaria que le 
            dará una sensación de relajación y disfrute a todos los que nos acompañen.
          </p>
        </div>

        {/* Academia Section */}
        <div className="bg-gray-200 py-12 px-8 rounded-lg mb-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">ACADEMIA DE PADEL</h3>
          <div className="space-y-2 text-gray-700">
            <p>CLASES GRUPALES</p>
            <p>CLASES INDIVIDUALES</p>
            <p>CLASES PARA NIÑOS</p>
            <p>ENTRENAMIENTOS</p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">NUESTROS SERVICIOS</h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Club Reserva es un club deportivo y social diseñado para toda la familia, que ofrece instalaciones 
            innovadoras en un entorno exclusivo. Nuestro objetivo es promover el padel en Costa Rica a un nivel 
            superior, brindando una experiencia deportiva única y de alta calidad.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative h-72 overflow-hidden rounded-xl shadow-lg group cursor-pointer hover-lift transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white font-bold text-lg">{service.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-200 py-16 px-8 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            CON TU REGISTRO YA PUEDES DISFRUTAR DE NUESTRO CLUB
          </h3>
          <p className="text-xl text-gray-700 mb-8">VEN A DISFRUTAR DE TU CLUB FAVORITO</p>
          <a
            href="#registro"
            className="inline-block px-10 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            REGISTRARSE AHORA
          </a>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
