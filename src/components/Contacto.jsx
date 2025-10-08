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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
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
      </div>
    </section>
  )
}

export default Contacto
