import React, { useEffect, useRef, useState } from 'react'
import { Clock, Users, TrendingUp, Calendar } from 'lucide-react'

const Academia = () => {
  const [isVisible, setIsVisible] = useState(false)
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const courses = [
    {
      image: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=2070&auto=format&fit=crop',
      title: 'Iniciación al Pádel',
      level: 'Principiante',
      schedule: 'Lun, Mié, Vie - 6:00 AM',
      instructor: 'Carlos Rodríguez',
      duration: '8 semanas',
      students: '6-8 personas',
    },
    {
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop',
      title: 'Técnica Avanzada',
      level: 'Intermedio',
      schedule: 'Mar, Jue - 7:00 PM',
      instructor: 'Ana Martínez',
      duration: '12 semanas',
      students: '4-6 personas',
    },
    {
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2070&auto=format&fit=crop',
      title: 'Competición Profesional',
      level: 'Avanzado',
      schedule: 'Lun-Vie - 5:00 PM',
      instructor: 'Diego Fernández',
      duration: '16 semanas',
      students: '2-4 personas',
    },
    {
      image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2069&auto=format&fit=crop',
      title: 'Pádel Kids',
      level: 'Niños 8-14 años',
      schedule: 'Sáb - 9:00 AM',
      instructor: 'Laura Sánchez',
      duration: '10 semanas',
      students: '8-10 niños',
    },
    {
      image: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?q=80&w=2070&auto=format&fit=crop',
      title: 'Clases Privadas',
      level: 'Todos los niveles',
      schedule: 'Horario flexible',
      instructor: 'Varios instructores',
      duration: 'Personalizado',
      students: '1-2 personas',
    },
    {
      image: 'https://images.unsplash.com/photo-1617883861744-1c0c0e2a0da5?q=80&w=2070&auto=format&fit=crop',
      title: 'Estrategia y Táctica',
      level: 'Intermedio-Avanzado',
      schedule: 'Mié, Vie - 6:30 PM',
      instructor: 'Roberto Gómez',
      duration: '8 semanas',
      students: '4-6 personas',
    },
  ]

  return (
    <section id="academia" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Academia <span className="text-primary-600">Pádel</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Aprende de los mejores con nuestros programas especializados
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </div>
              </div>

              {/* Course Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-primary-600" />
                    {course.schedule}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="w-4 h-4 mr-2 text-primary-600" />
                    {course.students}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <TrendingUp className="w-4 h-4 mr-2 text-primary-600" />
                    {course.instructor}
                  </div>
                </div>

                <button className="w-full py-3 px-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105">
                  Inscribirse
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Academia
