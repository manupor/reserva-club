import React from 'react'
import { Instagram } from 'lucide-react'

const Noticias = () => {

  // Posts de Instagram con imágenes reales
  const instagramPosts = [
    { 
      url: 'https://www.instagram.com/p/DPenj_BETbl/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/560413201_17947708188044176_4035032409274432925_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzczNzU5ODczMDg4MDIzMDUwMg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMS5zZHIuQzMifQ%3D%3D&_nc_ohc=Tx-XrdAlx7YQ7kNvwHichVK&_nc_oc=AdlD6IrDqIkEl3UnN45pxwIl_N3P90Xndoqx7gwAuuAhSESBcM4Cw9reDRsJj8YBXr4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=j4bixEShSuUZZJsFyLGO4w&oh=00_AfdZN2LGX5NL2JUXUzPeT-lW1K8tefzSw_l2q9kJQo7Kiw&oe=69004058'
    },
    { 
      url: 'https://www.instagram.com/p/DNqjytex2dU/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/537556985_17942492706044176_3814448122539652849_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzcwNDkzMTA1MzQwOTM4NjUxOQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyODB4MTYwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=X0XlYETQxuQQ7kNvwESe1M4&_nc_oc=AdkUa6jy8s82t7i-VhABZPhVT8WiH8KTrfP7CRse59_r5mS0DweSuvySn5dBi9wFaNQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=j4bixEShSuUZZJsFyLGO4w&oh=00_Afc8RVzAt-TBoY9cj9Ro5nlRF0APKerZxkEK7R3_cExbow&oe=690053B9'
    },
    { 
      url: 'https://www.instagram.com/p/DPXILFgkb2J/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/557780505_17947411449044176_7318962902828839473_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzczNTQ5MDM1NTcxMTI2MzQxMw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyODB4MTYwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=mEZzx4gM4rUQ7kNvwHdWPth&_nc_oc=AdlUXIUuDAbo6Ah-dz7Wjqc3szB1VxtWQmfiBRD2XPr3XWVgxiKTbosJ8XSFuBcWSCU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=j4bixEShSuUZZJsFyLGO4w&oh=00_AfeM0Or58jAUnclwlvrMe36nohszsUtLlcJftWLEkNvOkQ&oe=69003FB8'
    },
    { 
      url: 'https://www.instagram.com/p/DQH7eHakabG/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/568034869_17949274656044176_4605542821317851356_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzc0OTIyNjc2OTA5OTYzMDI3OA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyNzd4MTU5NC5zZHIuQzMifQ%3D%3D&_nc_ohc=BXqKgWpuPocQ7kNvwFWt6WA&_nc_oc=Adm9yzVfQFsV6WNzxDmhdYecTrL8aY2Qh92t7qs-9lB3botxgqrHO-4W-uVCROvjuMM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=j4bixEShSuUZZJsFyLGO4w&oh=00_Aff-6J14dzq34m_RQL7BkM6VHauJXysa5KjQiCIwPY9NFA&oe=690043A5'
    },
    { 
      url: 'https://www.instagram.com/p/DQBDsBNDDgF/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/567326342_17949006756044176_9052359150294201316_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzc0NzI5MjU4NDAzODExOTQyOQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMi5zZHIuQzMifQ%3D%3D&_nc_ohc=mKBuxpu-2OoQ7kNvwH7EM2v&_nc_oc=AdkW5EDZDmg1Dy0NI3en0_N__P6XwUXfUxZRGAp9MEhqT-3yFVz8qvJn8qoGEuXHVV8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=j4bixEShSuUZZJsFyLGO4w&oh=00_Afe6TxuwZEN7C_6aOce9f6t-mKCVBHh3NQfdui_Mpqkr7g&oe=69004816'
    },
    { 
      url: 'https://www.instagram.com/p/DP2WcAKkcX-/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/565801906_17948606685044176_8103302885193306983_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzc0NDI3ODgyMTU1MTA2NDU3NA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=buvblbd8eqYQ7kNvwGvijDK&_nc_oc=AdloVAM3jN0iSMJk6PzjFkqmHoFFMTFkZNc68kcgzn_oDr6i8I2AoMbjN0DA6ltWCX4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=j4bixEShSuUZZJsFyLGO4w&oh=00_AffNqCSKDSLJtnLeCvYqOE2rwthSYPT_w7rIm9AXSAGm-A&oe=69002CF8'
    },
    { 
      url: 'https://www.instagram.com/p/DPxIpo1jFYK/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/564253991_17948426316044176_7594092486324726478_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzc0MjgxMDgwMTIzNDA0NzM4OA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMS5zZHIuQzMifQ%3D%3D&_nc_ohc=4CMtwOiMPiAQ7kNvwHSGSD5&_nc_oc=AdmoEVCF9MxONKYNa8bV3rG6jCRCIRwLVwjbTJmqEz5U8O-WVzGs500xC319WtJwCCY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=j4bixEShSuUZZJsFyLGO4w&oh=00_AfdpuQy3VbYqhmdsgWMuBGlSxHhCkQB_Lihf1Bc1m0IssQ&oe=690025C7'
    },
    { 
      url: 'https://www.instagram.com/p/DPkZ-HPkUcL/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/561957679_17947893891044176_62784157115954453_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzczOTIyNzgxMDE3MjA2MTQ1MQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=xZt4ZEygH5gQ7kNvwHDTfZT&_nc_oc=Adn6KnWOdiw7ajb74xhtjTpf-mjBrdUbYB82nNq_iTY4z_Njof4_P3b3X0_JIAJX-ys&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=j4bixEShSuUZZJsFyLGO4w&oh=00_Afc9G7-fjnwuRrm1ZWM9bjI7KMQ3v2rC79jzVAVdQgD8zw&oe=6900364E'
    },
    { 
      url: 'https://www.instagram.com/p/DPUbI1XEbvZ/',
      image: 'https://scontent.cdninstagram.com/v/t51.82787-15/557540506_17947305732044176_6873624718451397711_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzczNDcyOTM0NTMwMzk1MjM0NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMi5zZHIuQzMifQ%3D%3D&_nc_ohc=dLDMLniy7SoQ7kNvwFpqWKF&_nc_oc=AdnbVfJGSvgFfMRHJbjQLd0dn5CIw07oDYCNHGyHnK3PMAaSaoqMsLbAD_UunBRVsFI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=VQhOsWhoySMX3_tf3AbB3w&oh=00_AfffWNIGOKOjoxlanum1hYpQKGyLMObkpiCUkW2ep7wwmQ&oe=69004C5E'
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
