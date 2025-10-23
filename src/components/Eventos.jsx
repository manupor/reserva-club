import React, { useState } from 'react'
import { Users, Building2, Cake } from 'lucide-react'

const Eventos = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    attendees: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construir el mensaje para WhatsApp
    let whatsappMessage = `Hola, me gustaría consultar sobre eventos:%0A%0A`
    whatsappMessage += `*Nombre:* ${formData.name}%0A`
    whatsappMessage += `*Email:* ${formData.email}%0A`
    whatsappMessage += `*Teléfono:* ${formData.phone}%0A`
    whatsappMessage += `*Tipo de Evento:* ${formData.eventType}%0A`
    
    if (formData.date) {
      whatsappMessage += `*Fecha Aproximada:* ${formData.date}%0A`
    }
    
    if (formData.attendees) {
      whatsappMessage += `*Número de Asistentes:* ${formData.attendees}%0A`
    }
    
    if (formData.message) {
      whatsappMessage += `*Mensaje:* ${formData.message}`
    }
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/50687980008?text=${whatsappMessage}`, '_blank')
    
    // Limpiar el formulario
    setFormData({ name: '', email: '', phone: '', eventType: '', date: '', attendees: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const eventTypes = [
    { value: 'cumpleanos', label: 'Cumpleaños', icon: Cake },
    { value: 'team-building', label: 'Team Building', icon: Users },
    { value: 'corporativo', label: 'Evento Corporativo', icon: Building2 },
  ]

  return (
    <section id="eventos" className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-none mb-0 bg-[#30544b]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Side - Content */}
          <div className="relative px-8 py-16 md:py-20 lg:py-24 flex items-center bg-[#30544b]">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ba9141]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            {/* Accent line */}
            <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#ba9141]"></div>
            
            <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
              {/* Small badge */}
              <div className="inline-block mb-4">
                <span className="px-3 py-1 bg-[#ba9141] text-white text-xs font-bold tracking-wider rounded-full">
                  TEAM BUILDING
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Eventos
              </h2>
              
              <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
                En Reserva padel te damos la posibilidad de combinar lo mejor del deporte con eventos empresariales. 
                Para promover la salud física y social en todas sus formas. Personalicemos tu próximo evento en un 
                club totalmente equipado a tu disposición.
              </p>
              
              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {[
                  'Instalaciones de clase mundial',
                  'Catering personalizado',
                  'Actividades deportivas y sociales',
                  'Espacios flexibles para grupos'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center text-white/90">
                    <svg className="w-5 h-5 text-[#ba9141] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="relative h-64 lg:h-auto min-h-[400px]">
            <img 
              src="/537171622_17942193438044176_861054818191775635_n.jpg"
              alt="Eventos - Team Building Pádel"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle gradient overlay on image for better blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#30544b]/40 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solicita Información
            </h3>
            <p className="text-lg text-gray-600">
              Completa el formulario y nos pondremos en contacto contigo
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Tipo de Evento *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {eventTypes.map((type) => (
                  <label
                    key={type.value}
                    className={`relative flex flex-col items-center p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      formData.eventType === type.value
                        ? 'border-[#30544b] bg-[#30544b]/5'
                        : 'border-gray-300 hover:border-[#30544b]/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="eventType"
                      value={type.value}
                      checked={formData.eventType === type.value}
                      onChange={handleChange}
                      className="sr-only"
                      required
                    />
                    <type.icon 
                      className={`w-8 h-8 mb-3 ${
                        formData.eventType === type.value ? 'text-[#30544b]' : 'text-gray-400'
                      }`} 
                    />
                    <span className={`text-center font-medium ${
                      formData.eventType === type.value ? 'text-[#30544b]' : 'text-gray-700'
                    }`}>
                      {type.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30544b] focus:border-transparent transition-all bg-white"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30544b] focus:border-transparent transition-all bg-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30544b] focus:border-transparent transition-all bg-white"
                />
              </div>
            </div>

            {/* Date and Attendees */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha aproximada (opcional)
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30544b] focus:border-transparent transition-all bg-white"
                />
              </div>

              <div>
                <label htmlFor="attendees" className="block text-sm font-medium text-gray-700 mb-2">
                  Número de asistentes (opcional)
                </label>
                <input
                  type="number"
                  id="attendees"
                  name="attendees"
                  min="1"
                  value={formData.attendees}
                  onChange={handleChange}
                  placeholder="Ej: 20"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30544b] focus:border-transparent transition-all bg-white"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje adicional (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Cuéntanos más sobre tu evento..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30544b] focus:border-transparent transition-all resize-none bg-white"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#30544b] text-white font-semibold rounded-lg hover:bg-[#243d36] transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Eventos
