import React, { useEffect } from 'react'
import { Instagram } from 'lucide-react'

const Noticias = () => {
  useEffect(() => {
    // Cargar el script de Instagram Embed
    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }

    // Procesar embeds después de que se cargue el componente
    const timer = setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Posts de Instagram con imágenes
  const instagramPosts = [
    {
      url: 'https://www.instagram.com/p/DPenj_BETbl/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/560413201_17947708188044176_4035032409274432925_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=58cdad&_nc_ohc=k6VcPLs5XYgQ7kNvwEMB0hb&_nc_ht=scontent.cdninstagram.com&oh=00_Affgk73h-YYck97P7rzdT_xtKnhfRwbGLU5hU2X4FrNNiQ&oe=68EB6098',
    },
    {
      url: 'https://www.instagram.com/p/DNqjytex2dU/',
      image: 'https://instagram.fsjo12-1.fna.fbcdn.net/v/t51.2885-15/537556985_17942492706044176_3814448122539652849_n.jpg?stp=dst-jpg_e35_tt6&_nc_ht=instagram.fsjo12-1.fna.fbcdn.net&_nc_cat=104&ccb=7-5&oh=00_AfdVx-OduZ-BflMas8rM7i8P2TjEeJIzNBJzqrvzGHjHtQ&oe=68EB6BEF',
    },
    {
      url: 'https://www.instagram.com/p/DPXILFgkb2J/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/557780505_17947411449044176_7318962902828839473_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=58cdad&_nc_ohc=vhBmE9I6to0Q7kNvwElFl1z&_nc_ht=scontent.cdninstagram.com&oh=00_AffkSTzfGbmSZm1ZP8s0rwzEEyi9tWtZPa0oF4RO3xMWcw&oe=68EB5FF8',
    },
    {
      url: 'https://www.instagram.com/p/DPUbI1XEbvZ/',
      image: 'https://instagram.fsjo12-1.fna.fbcdn.net/v/t51.2885-15/557540506_17947305732044176_6873624718451397711_n.jpg?stp=dst-jpg_e35_tt6&_nc_ht=instagram.fsjo12-1.fna.fbcdn.net&_nc_cat=104&ccb=7-5&oh=00_AfcZYY0pyIY_EPGsSyvnFLlmrm5YEatE0e7SfTjpECdz0g&oe=68EB788C',
    },
    {
      url: 'https://www.instagram.com/p/DPSMpalkZLd/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/557670509_17947212246044176_2886955140310292643_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=58cdad&_nc_ohc=LEPUW8soirQQ7kNvwEabN5v&_nc_ht=scontent.cdninstagram.com&oh=00_AfcND85hYjvqFwcIm3HEfQcb861mxibvDm3jmNIFR5ZXEw&oe=68EB8AFC',
    },
    {
      url: 'https://www.instagram.com/p/DPNE554jL4Y/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/556237089_17947002858044176_1593904126628493147_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=58cdad&_nc_ohc=PXCpFo-e9OAQ7kNvwEPUJU-&_nc_ht=scontent.cdninstagram.com&oh=00_AfdSO13cULuHFTvhUZhdpmLaNrePXjCyK5pUlJ2iN_KThw&oe=68EB6847',
    },
    {
      url: 'https://www.instagram.com/p/DO7HnTDjKkV/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/553267433_17945963082044176_309981019470315115_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=58cdad&_nc_ohc=UZernYBveM0Q7kNvwEPctmB&_nc_ht=scontent.cdninstagram.com&oh=00_AfedztGRuO_98sjHBkXcCJp0C0mM76c7WWQH9XyHDv5H_w&oe=68EB5DD1',
    },
    {
      url: 'https://www.instagram.com/p/DOv7pH0kcT2/',
      image: 'https://instagram.fsjo12-1.fna.fbcdn.net/v/t51.2885-15/549757934_17945405277044176_7792544594788621185_n.jpg?stp=dst-jpg_e35_tt6&_nc_ht=instagram.fsjo12-1.fna.fbcdn.net&_nc_cat=104&ccb=7-5&oh=00_AfcJ6i7A-IE1xfu7okTztDuNjNHON99FZufyKkfbRCPDEg&oe=68EB6966',
    },
    {
      url: 'https://www.instagram.com/clubreserva.cr/reel/DOrwjnWjMs9/',
      image: 'https://scontent.cdninstagram.com/v/t51.71878-15/549241532_1291987485323989_6382599315861104263_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ccb=1-7&_nc_sid=58cdad&_nc_ohc=kw2LTKvHtKwQ7kNvwHApnLi&_nc_ht=scontent.cdninstagram.com&oh=00_AfdeclYildB2illLyf0P_7BFwJWi-nWveMBK0adfdsMHlg&oe=68EB7EB6',
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

        {/* Instagram Grid - Usando iframes de Instagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Iframe de Instagram para cargar la imagen */}
              <iframe
                src={`${post.url}embed/captioned/`}
                className="w-full h-full border-0"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                style={{ minHeight: '400px' }}
              />
            </div>
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
