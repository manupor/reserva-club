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
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            NUESTRA UBICACIÓN
          </h3>
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-xl">
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
          </div>
          
          {/* Información de contacto */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h4 className="font-bold text-gray-900 mb-2">Dirección</h4>
              <p className="text-gray-600">WVM5+Q8 Escazú<br />San José Province, 10203</p>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-900 mb-2">Teléfono</h4>
              <a href="tel:+50687980008" className="text-accent-600 hover:text-accent-700">
                8798 0008
              </a>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-900 mb-2">Instagram</h4>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-600 hover:text-accent-700"
              >
                @reservasportsclub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
