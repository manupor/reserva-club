import React, { useState, useEffect } from 'react'

const Equipo = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const team = [
    {
      name: 'JAIME NAVARRO',
      role: 'Profesor / Instructor Padel & Sport Club',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      experience: '6 años',
      specialty: 'Técnica Avanzada',
      achievements: [
        '6 años dando clases (3 en España / 1 en Holanda / 2 en CR)',
        'Título RPP y Federación Menorquina de Padel',
        'Jugador de 1ra-2da categoría en la FMP',
        'Encargado de la liga por equipos en Madrid y Holanda',
      ],
    },
    {
      name: 'JUAN CRUZ',
      role: 'Profesor / Instructor Padel & Sport Club',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
      experience: '8 años',
      specialty: 'Alto Rendimiento',
      achievements: [
        'Head coach en Mérida, Mx. Academia Épica Padel Club',
        'Encargado de la academia de alto rendimiento',
        'Profesor en la academia de Propadel',
        'Head coach en Área Padel',
        'Padel Academy en Panama como profesor',
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conoce a nuestro Equipo
          </h2>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover-lift transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: `${index * 300}ms`,
              }}
            >
              {/* Header con foto */}
              <div className="relative h-64 bg-gradient-to-br from-accent-600 to-accent-800 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Info sobre la foto */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-accent-200 font-medium">{member.role}</p>
                </div>

                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white text-sm font-semibold">{member.experience}</span>
                  </div>
                  <div className="bg-gold-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white text-sm font-semibold">{member.specialty}</span>
                  </div>
                </div>
              </div>

              {/* Contenido - Logros */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-1 h-6 bg-accent-600 mr-3 rounded"></span>
                  Logros y Experiencia
                </h4>
                
                <ul className="space-y-3">
                  {member.achievements.map((achievement, idx) => (
                    <li 
                      key={idx} 
                      className={`flex items-start transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{
                        transitionDelay: `${(index * 300) + (idx * 100) + 400}ms`,
                      }}
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipo
