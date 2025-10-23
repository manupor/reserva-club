import React, { useEffect, useRef, useState } from 'react'
import { Clock, Users, Calendar, Trophy, Heart, Target, Activity, Award, CheckCircle } from 'lucide-react'

const Academia = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Parallax scroll effect
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
        setScrollY(scrollProgress * 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const academias = [
    {
      id: 'infantiles',
      title: 'Academias Infantiles',
      subtitle: 'Desarrollo y diversión para todas las edades',
      icon: Heart,
      gradient: 'from-emerald-500 via-green-500 to-amber-400',
      bgImage: '/kids.jpg',
      description: 'Contamos con academias de niños de todas las edades, divididas por nivel y edad en grupos de 4 – 8 o 12 jugadores.',
      features: [
        {
          icon: Users,
          title: 'Grupos Reducidos',
          description: 'Grupos de 4 a 12 jugadores según edad y nivel'
        },
        {
          icon: Clock,
          title: 'Clases Semanales',
          description: '1 hora de entrenamiento por semana'
        },
        {
          icon: Calendar,
          title: 'Pago Mensual',
          description: 'Modalidad de pago mensual flexible'
        },
        {
          icon: Heart,
          title: 'Ambiente Divertido',
          description: 'Clases dinámicas y competitivas'
        },
        {
          icon: Trophy,
          title: 'Mejora Constante',
          description: 'Enfoque en el progreso continuo del deporte'
        }
      ],
      highlights: [
        'Divididos por nivel y edad',
        'Entrenamiento divertido y competitivo',
        'Desarrollo integral de habilidades',
        'Instructores especializados en niños'
      ]
    },
    {
      id: 'competicion',
      title: 'Academia de Competición',
      subtitle: 'El siguiente nivel para jugadores exigentes',
      icon: Trophy,
      gradient: 'from-emerald-600 via-green-600 to-amber-500',
      bgImage: '/pro.jpg',
      description: 'Academia diseñada para jugadores que buscan el siguiente paso en la competencia de torneos con un entrenamiento más exigente.',
      features: [],
      trainingStructure: [
        {
          icon: Activity,
          title: 'Apartado Físico',
          duration: '20 minutos',
          color: 'bg-emerald-500',
          description: 'Ejercicios físicos 100% enfocados en padel dentro de la cancha'
        },
        {
          icon: Target,
          title: 'Apartado Técnico',
          duration: '40 minutos',
          color: 'bg-green-500',
          description: 'Repetición de golpes, estrategias y técnicas de juego'
        },
        {
          icon: Award,
          title: 'Apartado Estratégico',
          duration: '30 minutos',
          color: 'bg-teal-500',
          description: 'Situaciones reales de partido con condicionantes específicos'
        }
      ],
      highlights: [
        'Preparación para torneos',
        'Entrenamiento de alto rendimiento',
        'Desarrollo táctico y estratégico',
        'Seguimiento personalizado'
      ]
    }
  ]

  return (
    <section id="academia" ref={sectionRef} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#30544b]/10 blur-3xl transition-all duration-1000"
          style={{ 
            transform: `translate(${scrollY * 0.5}px, ${scrollY * 0.3}px) scale(${1 + scrollY / 200})`,
            opacity: 0.3 - scrollY / 400
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#ba9141]/10 blur-3xl transition-all duration-1000"
          style={{ 
            transform: `translate(${-scrollY * 0.4}px, ${scrollY * 0.2}px) rotate(${scrollY * 0.5}deg)`,
            opacity: 0.4
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with entrance animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ba9141] mb-6 transition-all duration-700">
            ACADEMIAS RESERVA
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Programas de entrenamiento diseñados para todos los niveles, desde iniciación hasta competición profesional
          </p>
        </div>

        {/* Academias Grid */}
        <div className="space-y-16">
          {academias.map((academia, academiaIndex) => (
            <div
              key={academia.id}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${academiaIndex * 200}ms`,
              }}
            >
              {/* Academia Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                {/* Header with Image */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img
                    src={academia.bgImage}
                    alt={academia.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      objectPosition: academia.id === 'competicion' ? 'center 35%' : 'center 30%'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 group-hover:translate-y-0">
                    <div className="flex items-center space-x-3 mb-2 transform transition-all duration-500 group-hover:translate-x-2">
                      <academia.icon className="w-8 h-8 text-[#ba9141] transition-all duration-300 group-hover:scale-110" />
                      <span className="px-3 py-1 bg-[#ba9141] text-white text-xs font-bold tracking-wider rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#ba9141]/50">
                        {academiaIndex === 0 ? 'INFANTILES' : 'COMPETICIÓN'}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white transition-all duration-300 group-hover:text-[#ba9141]">{academia.title}</h3>
                    <p className="text-white/90 mt-2">{academia.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Description */}
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {academia.description}
                  </p>

                  {/* Training Structure for Competición */}
                  {academia.trainingStructure && (
                    <div className="mb-10 bg-white p-8 rounded-lg">
                      <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        ESTRUCTURA DEL ENTRENAMIENTO
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {academia.trainingStructure.map((section, idx) => (
                          <div 
                            key={idx} 
                            className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 transform"
                            style={{
                              animation: isVisible ? `fadeInUp 0.6s ease-out ${idx * 0.15 + 0.4}s both` : 'none'
                            }}
                          >
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#30544b] rounded-lg mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
                              <section.icon className="w-6 h-6 text-[#ba9141]" />
                            </div>
                            <h5 className="font-bold text-gray-900 text-lg mb-2">{section.title}</h5>
                            <span className="inline-block px-3 py-1 bg-[#ba9141] text-white text-sm font-bold rounded-full mb-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#ba9141]/50">{section.duration}</span>
                            <p className="text-gray-600 text-sm">{section.description}</p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Duración centered below */}
                      <div className="flex justify-center">
                        <div 
                          className="text-center p-6 bg-gray-50 rounded-lg max-w-xs hover:bg-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 transform"
                          style={{
                            animation: isVisible ? 'fadeInUp 0.6s ease-out 0.85s both' : 'none'
                          }}
                        >
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#30544b] rounded-lg mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
                            <Clock className="w-6 h-6 text-[#ba9141]" />
                          </div>
                          <h5 className="font-bold text-gray-900 text-lg mb-2">Duración</h5>
                          <p className="text-gray-600 text-sm">1.5 horas de entrenamiento intensivo</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Features Grid - 3 top, 2 bottom centered */}
                  <div className="mb-10">
                    {/* Top row - 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      {academia.features.slice(0, 3).map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 transform"
                          style={{
                            animation: isVisible ? `fadeInUp 0.6s ease-out ${idx * 0.1 + 0.3}s both` : 'none'
                          }}
                        >
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#30544b] rounded-lg mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
                            <feature.icon className="w-6 h-6 text-[#ba9141]" />
                          </div>
                          <h5 className="font-bold text-gray-900 mb-2">{feature.title}</h5>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom row - 2 cards centered */}
                    {academia.features.length > 3 && (
                      <div className="flex flex-wrap justify-center gap-6">
                        {academia.features.slice(3).map((feature, idx) => (
                          <div 
                            key={idx + 3} 
                            className="text-center p-6 bg-gray-50 rounded-lg w-full md:w-[calc(33.333%-1rem)] hover:bg-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 transform"
                            style={{
                              animation: isVisible ? `fadeInUp 0.6s ease-out ${(idx + 3) * 0.1 + 0.3}s both` : 'none'
                            }}
                          >
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#30544b] rounded-lg mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
                              <feature.icon className="w-6 h-6 text-[#ba9141]" />
                            </div>
                            <h5 className="font-bold text-gray-900 mb-2">{feature.title}</h5>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="bg-gray-200 p-8 rounded-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">DESTACADOS</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                      {academia.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center justify-center sm:justify-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#ba9141] flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-10 flex justify-center">
                    <button 
                      onClick={() => window.open(`https://wa.me/50687980008?text=Hola, me gustaría obtener más información sobre ${academia.title}`, '_blank')}
                      className="px-10 py-4 bg-[#ba9141] text-white font-bold rounded-lg hover:bg-[#a67f3a] transition-all duration-300 transform hover:scale-105"
                    >
                      MÁS INFORMACIÓN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gray-200 py-16 px-8 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿LISTO PARA UNIRTE A NUESTRAS ACADEMIAS?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contáctanos para más información y encuentra el programa perfecto para ti
          </p>
          <button
            onClick={() => window.open('https://wa.me/50687980008?text=Hola, me gustaría obtener información sobre las academias de Reserva', '_blank')}
            className="inline-block px-10 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            CONTÁCTANOS AHORA
          </button>
        </div>
      </div>
    </section>
  )
}

export default Academia
