import React, { useState } from 'react'

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construir el mensaje para WhatsApp
    let whatsappMessage = `Hola, me gustaría contactar con ustedes:%0A%0A`
    whatsappMessage += `*Nombre:* ${formData.name}%0A`
    whatsappMessage += `*Email:* ${formData.email}%0A`
    whatsappMessage += `*Asunto:* ${formData.subject}%0A`
    
    if (formData.message) {
      whatsappMessage += `*Mensaje:* ${formData.message}`
    }
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/50687980008?text=${whatsappMessage}`, '_blank')
    
    // Limpiar el formulario
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            CONTACTO
          </h2>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Tu nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all bg-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Tu correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all bg-white"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all bg-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Tu mensaje (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none bg-white"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-none hover:bg-gray-800 transition-all duration-300"
          >
            ENVIAR
          </button>
        </form>

        {/* Google Maps */}
        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            NUESTRA UBICACIÓN
          </h3>
          <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0234567890123!2d-84.1417464!3d9.9344193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fde9301dd921%3A0xca0949cf5cf42edc!2sReserva%20Sports%20and%20Social%20Club!5e0!3m2!1sen!2scr!4v1234567890123!5m2!1sen!2scr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Reserva Sports and Social Club Location"
            ></iframe>
            
            {/* Floating Info Card */}
            <div className="absolute top-6 left-6 bg-white rounded-xl shadow-2xl p-6 max-w-sm z-10">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Reserva Sports and Social Club</h4>
              <p className="text-gray-600 text-sm mb-3">10203, San José, Escazú, 10203</p>
              
              {/* Rating */}
              <div className="flex items-center mb-3">
                <span className="text-lg font-bold text-gray-900 mr-2">5.0</span>
                <div className="flex text-yellow-400">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Reserva+Sports+and+Social+Club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-sm text-blue-600 hover:underline"
                >
                  5 reviews
                </a>
              </div>
              
              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Reserva+Sports+and+Social+Club,+Escazu,+Costa+Rica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Directions
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Reserva+Sports+and+Social+Club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-blue-600 text-sm font-semibold hover:bg-blue-50 rounded-lg transition-colors"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
