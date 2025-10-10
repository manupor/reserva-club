import React, { useState, useEffect } from 'react'
import { Trophy, Target, Star, Zap } from 'lucide-react'

const Equipo = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const team = [
    {
      name: 'JEAN MICHAEL',
      role: 'Entrenador',
      image: '/Jean Michael.JPG',
      imagePosition: 'object-bottom',
      icon: Trophy,
      stats: [
        { label: 'Nivel', value: 'APA' },
        { label: 'Certificado', value: 'MBA' },
      ],
      features: [
        'Monitor Nivel 1 APA',
        'Coach certificado por Padel MBA',
        'Especializado en guiar a jugadores principiantes',
        'Metodología que combina técnica, estructura y motivación',
      ],
    },
    {
      name: 'JAIME',
      role: 'Profesor',
      image: '/Jaime.JPG',
      imagePosition: 'object-bottom',
      icon: Target,
      stats: [
        { label: 'Experiencia', value: '6 años' },
        { label: 'Título', value: 'RPP' },
      ],
      features: [
        '6 años de experiencia como profesor en España, Holanda y Costa Rica',
        'Título: RPP (Registro Profesional de Pádel) y FMP',
        'Jugador de 1ª-2ª categoría en la FMP',
        'Formado con metodologías europeas de alta competencia',
      ],
    },
    {
      name: 'JUGADORA DESTACADA',
      role: 'Primera Categoría Femenina',
      image: '/jugadora_destacada.jpg',
      imagePosition: 'object-bottom',
      icon: Star,
      stats: [
        { label: 'Nivel', value: 'APA' },
        { label: 'Certificado', value: 'MBA' },
      ],
      features: [
        'Monitor Nivel 1 APA',
        'Coach certificada por Padel MBA',
        'Compite en primera categoría femenina de Costa Rica',
        'Una de las jugadoras más destacadas del país',
      ],
    },
    {
      name: 'DIRECTOR DEPORTIVO',
      role: 'Profesor de Padel',
      image: '/DIrector Deportivo.JPG',
      imagePosition: 'object-bottom',
      icon: Zap,
      stats: [
        { label: 'Monitor', value: '1 y 2' },
        { label: 'Coach', value: 'MBA' },
      ],
      features: [
        'Monitor Nivel 1 y 2 - APA (Asociación de Pádel Argentino)',
        'Head Coach - PÁDEL MBA',
        'Formador de Profesores - PÁDEL MBA',
        'Compite en primera categoría en Costa Rica',
      ],
    },
  ]

  return (
    <section 
      id="equipo" 
      className={`py-20 bg-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent-600 font-semibold mb-4">NUESTRO EQUIPO</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Conoce a nuestro Equipo
          </h2>
        </div>

        {/* Tarjetas Deportivas Estilo Trading Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
          {team.map((member, index) => {
            const IconComponent = member.icon
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-accent-500/50 hover:-translate-y-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                {/* Borde decorativo superior */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-accent-600 to-accent-500"></div>
                
                {/* Imagen principal con overlay */}
                <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.imagePosition || 'object-[center_20%]'} group-hover:scale-105 transition-transform duration-700`}
                    style={member.name === 'JEAN MICHAEL' ? { transform: 'translateY(-100px)' } : member.name === 'JAIME' ? { transform: 'translateY(-30px)' } : member.name === 'DIRECTOR DEPORTIVO' ? { transform: 'translateY(-100px)' } : member.name === 'JUGADORA DESTACADA' ? { transform: 'translateY(-100px)' } : {}}
                  />
                  {/* Overlay gradiente deportivo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                  
                  {/* Overlay adicional para la zona de información */}
                  <div className="absolute inset-x-0 top-1/2 bottom-0 bg-black/70"></div>

                  {/* Stats más abajo */}
                  <div className="absolute top-1/2 translate-y-8 sm:translate-y-12 left-2 right-2 sm:left-4 sm:right-4 flex justify-between gap-2 sm:gap-3">
                    {member.stats.map((stat, idx) => (
                      <div 
                        key={idx} 
                        className={`flex-1 bg-black/70 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                        style={{
                          transitionDelay: `${(index * 200) + (idx * 150) + 400}ms`,
                        }}
                      >
                        <div className="text-accent-400 text-[9px] sm:text-[10px] md:text-xs font-semibold mb-0.5 sm:mb-1">{stat.label}</div>
                        <div className="text-white text-base sm:text-lg md:text-xl font-black">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Contenido debajo de los stats */}
                  <div className="absolute top-1/2 translate-y-24 sm:translate-y-32 md:translate-y-36 left-2 right-2 sm:left-4 sm:right-4 space-y-2 sm:space-y-3 md:space-y-4">
                    {/* Header con icono */}
                    <div 
                      className={`flex items-center gap-2 sm:gap-3 pb-2 sm:pb-3 border-b border-white/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{
                        transitionDelay: `${(index * 200) + 700}ms`,
                      }}
                    >
                      <div className="bg-accent-600/30 backdrop-blur-sm p-1.5 sm:p-2.5 rounded-lg">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white tracking-tight leading-tight drop-shadow-lg">
                          {member.name}
                        </h3>
                        <p className="text-accent-300 text-[10px] sm:text-xs md:text-sm font-semibold">{member.role}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-1.5 sm:space-y-2 bg-black/60 backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4">
                      {member.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className={`flex items-start gap-1.5 sm:gap-2 text-gray-200 text-[10px] sm:text-xs md:text-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                          style={{
                            transitionDelay: `${(index * 200) + (idx * 100) + 900}ms`,
                          }}
                        >
                          <div className="flex-shrink-0 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent-500 rounded-full mt-1 sm:mt-1.5"></div>
                          <span className="leading-snug sm:leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent-500/5 to-transparent"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Equipo
