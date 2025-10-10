import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Hero = ({ scrollY }) => {
  const bgRef = useRef(null)
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const servicesRef = useRef(null)
  const eventosRef = useRef(null)
  const registroRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [splitProgress, setSplitProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const offset = window.scrollY
        const parallaxSpeed = 0.5
        bgRef.current.style.transform = `translate3d(0, ${offset * parallaxSpeed}px, 0)`
      }
      
      // Calcular progreso del scroll para la línea de cancha
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const progress = (window.scrollY / documentHeight) * 100
      setScrollProgress(progress)

      // Calcular progreso de división del hero (0-100%)
      // La división comienza cuando empiezas a hacer scroll y termina al 70% del viewport
      const maxSplit = windowHeight * 0.7
      const splitAmount = Math.min((window.scrollY / maxSplit) * 100, 100)
      setSplitProgress(splitAmount)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsVisible(true)

    // Lazy load video con mejor calidad
    const loadVideo = () => {
      if (videoRef.current) {
        const video = videoRef.current
        
        // Cargar el video de forma progresiva
        video.load()
        
        // Manejar cuando el video está listo para reproducir
        video.addEventListener('loadeddata', () => {
          setVideoLoaded(true)
          video.play().catch(err => {
            console.log('Video autoplay prevented:', err)
          })
        })

        // Manejar errores de carga
        video.addEventListener('error', () => {
          setVideoError(true)
        })
      }
    }

    // Cargar video después de un pequeño delay para priorizar contenido crítico
    const timer = setTimeout(loadVideo, 100)

    // Intersection Observer para animaciones de entrada
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, observerOptions)

    if (servicesRef.current) observer.observe(servicesRef.current)
    if (eventosRef.current) observer.observe(eventosRef.current)
    if (registroRef.current) observer.observe(registroRef.current)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
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
      title: 'Pro Shop',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    },
  ]

  return (
    <>
    {/* Efectos Parallax Exagerados y Elegantes */}
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Orbes gigantes flotantes con movimiento dramático */}
      <div 
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#30544b]/20 to-transparent blur-3xl transition-all duration-[2000ms] ease-out"
        style={{ 
          transform: `translate(${scrollProgress * 3}px, ${scrollProgress * 2}px) scale(${1 + scrollProgress / 100})`,
          opacity: 0.6 - scrollProgress / 200
        }}
      ></div>
      
      <div 
        className="absolute top-1/4 -right-32 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-[#ba9141]/15 to-transparent blur-3xl transition-all duration-[2000ms] ease-out"
        style={{ 
          transform: `translate(${-scrollProgress * 2}px, ${scrollProgress * 1.5}px) rotate(${scrollProgress}deg)`,
          opacity: 0.5
        }}
      ></div>
      
      <div 
        className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#30544b]/10 to-[#ba9141]/10 blur-3xl transition-all duration-[2000ms] ease-out"
        style={{ 
          transform: `translate(${scrollProgress * -1.5}px, ${-scrollProgress * 2}px) scale(${1 + scrollProgress / 150})`,
          opacity: 0.4
        }}
      ></div>

      {/* Partículas doradas flotantes */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#ba9141]/40 blur-sm transition-all duration-[1500ms]"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            transform: `translateY(${scrollProgress * (i % 2 === 0 ? 1 : -1) * 0.5}px) scale(${1 + Math.sin(scrollProgress / 10 + i) * 0.3})`,
            opacity: 0.3 + Math.sin(scrollProgress / 20 + i) * 0.2
          }}
        ></div>
      ))}

      {/* Ondas expansivas elegantes */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-[#30544b]/10 transition-all duration-[2000ms]"
        style={{ 
          transform: `translate(-50%, -50%) scale(${1 + scrollProgress / 50})`,
          opacity: 0.3 - scrollProgress / 300
        }}
      ></div>
      
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-[#ba9141]/10 transition-all duration-[2500ms]"
        style={{ 
          transform: `translate(-50%, -50%) scale(${1 + scrollProgress / 40})`,
          opacity: 0.2 - scrollProgress / 400
        }}
      ></div>
    </div>

    <section id="hero" className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image Principal - Pelotas de Pádel */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/two-balls-line-blue-synthetic-grass-paddle-tennis-court-health-sport-concept.jpg)',
          backgroundPosition: 'center 40%',
        }}
      >
        {/* Overlay con gradiente sofisticado para elegancia - Reducido para ver más el fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#30544b]/70 via-[#1a2f2a]/60 to-black/75" />
        
        {/* Overlay adicional para profundidad - Reducido */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-[#30544b]/40" />
        
        {/* Efecto de viñeta elegante - Más sutil */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.25) 100%)'
        }} />
        
        {/* Textura sutil para añadir sofisticación */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      {/* Elementos decorativos dorados flotantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Líneas decorativas elegantes */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[#ba9141]/40 to-transparent" />
        <div className="absolute top-1/3 right-0 w-40 h-px bg-gradient-to-l from-transparent via-[#ba9141]/40 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-36 h-px bg-gradient-to-r from-transparent via-[#ba9141]/30 to-transparent" />
        
        {/* Acentos dorados en las esquinas */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#ba9141]/30" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#ba9141]/30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#ba9141]/30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#ba9141]/30" />
      </div>

      {/* Content con diseño elegante */}
      <div className="relative h-full flex items-center justify-center px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge elegante superior */}
          <div className="inline-block mb-6 opacity-0 animate-slide-up">
            <div className="px-6 py-2 border border-[#ba9141]/40 rounded-full backdrop-blur-sm bg-white/5">
              <span className="text-[#ba9141] text-sm font-semibold tracking-widest uppercase">
                Premium Padel Experience
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 opacity-0 animate-slide-left drop-shadow-2xl">
            Bienvenidos a <span className="text-[#ba9141]">Reserva</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white/95 mb-8 opacity-0 animate-slide-right delay-400 drop-shadow-lg">
            Sports & Social Club
          </h2>
          
          {/* Línea decorativa dorada */}
          <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-slide-up delay-500">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#ba9141]/60"></div>
            <div className="w-2 h-2 rotate-45 bg-[#ba9141]/60"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#ba9141]/60"></div>
          </div>
          
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed opacity-0 animate-slide-up delay-600 drop-shadow-lg backdrop-blur-sm bg-black/20 p-5 rounded-2xl border border-white/10">
            Un club social y deportivo para toda la familia, que combina lo mejor del Padel y la naturaleza. En nuestra Reserva, le ofrecemos una experiencia culinaria inigualable, dos simuladores de golf de última generación, nuestras pistas de Padel profesionales y nuestra tienda boutique.
          </p>
          
          {/* CTA Button mejorado */}
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-2 md:gap-3 px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-[#ba9141] to-[#d4a853] text-white text-base md:text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-[#ba9141]/50 transition-all duration-500 transform hover:scale-105 opacity-0 animate-gentle-scale delay-600 overflow-hidden"
          >
            <span className="relative z-10">Descubre más</span>
            <svg className="relative z-10 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {/* Efecto de brillo al hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </div>
      </div>

    </section>

    {/* Nosotros Content */}
    <section className="py-20">
      <div ref={servicesRef} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">NUESTROS SERVICIOS</h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Club Reserva es un club deportivo y social diseñado para toda la familia, que ofrece instalaciones innovadoras en un entorno exclusivo. Nuestro objetivo es promover el padel en costa Rica a un nivel superior, brindando una experiencia deportiva única y de alta calidad.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative h-72 overflow-hidden rounded-xl shadow-lg group cursor-pointer hover-lift transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white font-bold text-lg">{service.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eventos Empresariales Section - Split Layout Design */}
        <div ref={eventosRef} className="fade-in-left relative overflow-hidden rounded-2xl mb-16 shadow-2xl bg-[#30544b]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="relative px-8 py-16 md:py-20 lg:py-24 flex items-center bg-[#30544b]">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ba9141]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              
              {/* Accent line */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#ba9141]"></div>
              
              <div className="relative z-10 max-w-xl">
                {/* Small badge */}
                <div className="inline-block mb-4">
                  <span className="px-3 py-1 bg-[#ba9141] text-white text-xs font-bold tracking-wider rounded-full">
                    TEAM BUILDING
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Eventos Empresariales
                </h3>
                
                <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
                  En Reserva padel te damos la posibilidad de combinar lo mejor del deporte con eventos empresariales. 
                  Para promover la salud física y social en todas sus formas. Personalicemos tu próximo evento en un 
                  club totalmente equipado a tu disposición.
                </p>
                
                <button 
                  onClick={() => window.open('https://wa.me/50687980008?text=Hola, me gustaría consultar disponibilidad para eventos empresariales', '_blank')}
                  className="group inline-flex items-center px-8 py-4 bg-[#ba9141] text-white font-bold text-base rounded-full hover:bg-[#a67f3a] hover:shadow-2xl hover:shadow-[#ba9141]/50 transition-all duration-500 transform hover:scale-105"
                >
                  <span>Consultar Disponibilidad</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative h-64 lg:h-auto min-h-[400px]">
              <img 
                src="/537171622_17942193438044176_861054818191775635_n.jpg"
                alt="Eventos Empresariales - Team Building Pádel"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Subtle gradient overlay on image for better blend */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#30544b]/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Separador visual elegante */}
        <div className="h-20 bg-gradient-to-b from-gray-50 to-white"></div>

        <div ref={registroRef} className="fade-in-right relative overflow-hidden rounded-2xl shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50"></div>
          
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative px-8 py-20 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              {/* Elegant Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-gold-500 text-white text-xs font-bold tracking-wider rounded-full shadow-lg">
                  MEMBRESÍA EXCLUSIVA
                </span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Únete a la Comunidad
                <span className="block text-gold-600 mt-2">
                  Más Exclusiva de Costa Rica
                </span>
              </h3>
              
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Vive el estilo de vida que mereces. Acceso ilimitado a instalaciones de clase mundial, 
                eventos exclusivos y una comunidad de personas extraordinarias.
              </p>
              
              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['Acceso Ilimitado', 'Eventos Exclusivos', 'Descuentos VIP', 'Prioridad en Reservas'].map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white px-5 py-3 rounded-full shadow-md border border-gray-200">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => window.open('https://wa.me/50687980008?text=Hola, me gustaría registrarme en Club Reserva', '_blank')}
                className="group relative inline-flex items-center px-12 py-5 bg-gray-900 text-white font-bold text-lg rounded-full hover:bg-black transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Comenzar Ahora</span>
                <svg className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <p className="text-sm text-gray-500 mt-6">
                Sin compromiso • Respuesta inmediata • Asesoría personalizada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero
