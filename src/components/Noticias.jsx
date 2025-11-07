import React from 'react'
import { Instagram } from 'lucide-react'

const Noticias = () => {

  // Posts de Instagram con imágenes locales (orden invertido - más reciente primero)
  const instagramPosts = [
    { 
      url: 'https://www.instagram.com/p/DPUbI1XEbvZ/',
      image: '/9.png'
    },
    { 
      url: 'https://www.instagram.com/p/DPkZ-HPkUcL/',
      image: '/8.png'
    },
    { 
      url: 'https://www.instagram.com/p/DPxIpo1jFYK/',
      image: '/7.png'
    },
    { 
      url: 'https://www.instagram.com/p/DP2WcAKkcX-/',
      image: '/6.png'
    },
    { 
      url: 'https://www.instagram.com/p/DQBDsBNDDgF/',
      image: '/5.png'
    },
    { 
      url: 'https://www.instagram.com/p/DQH7eHakabG/',
      image: '/4.png'
    },
    { 
      url: 'https://www.instagram.com/p/DPXILFgkb2J/',
      image: '/3.png'
    },
    { 
      url: 'https://www.instagram.com/p/DNqjytex2dU/',
      image: '/posr 2.png'
    },
    { 
      url: 'https://www.instagram.com/p/DPenj_BETbl/',
      image: '/post1.png'
    },
  ]

  return (
    <section id="noticias" className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="text-primary-600 mr-3" size={40} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600">
              Noticias y Eventos
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Mantente al día con las últimas novedades, eventos y momentos especiales del club
          </p>
          <a 
            href="https://www.instagram.com/clubreserva.cr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="mr-2" size={20} />
            @clubreserva.cr
          </a>
        </div>

        {/* Instagram Grid - Imágenes reales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={post.image}
                alt={`Post de Instagram ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Instagram overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                  <Instagram className="w-16 h-16 text-white mx-auto mb-3 drop-shadow-2xl" strokeWidth={1.5} />
                  <p className="text-white font-semibold text-sm">Ver en Instagram</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Síguenos para contenido exclusivo y actualizaciones en tiempo real
          </p>
          <a 
            href="https://www.instagram.com/clubreserva.cr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-white font-bold rounded-full hover:bg-gold-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Instagram size={24} />
            Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Noticias
