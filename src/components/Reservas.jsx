import React, { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send, Loader } from 'lucide-react'

const Reservas = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    cancha: 'Cancha 1',
    mensaje: '',
  })

  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState(false)

  // Horarios disponibles
  const horarios = [
    '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM'
  ]

  const canchas = ['Cancha 1', 'Cancha 2', 'Cancha 3', 'Cancha 4']

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEnviando(true)
    setError(false)
    
    // Crear el objeto con los datos
    const emailData = {
      access_key: "TU_ACCESS_KEY_AQUI", // Necesitas obtener esto de web3forms.com
      subject: `Nueva Solicitud de Reserva - ${formData.nombre}`,
      from_name: "Club Reserva - Sistema de Reservas",
      to_email: "manuelportuguezmora@gmail.com",
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      fecha: formData.fecha,
      hora: formData.hora,
      cancha: formData.cancha,
      mensaje: formData.mensaje || 'Sin mensaje adicional',
    }

    try {
      // Enviar usando Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailData)
      })

      const data = await response.json()
      
      console.log('Response status:', response.status)
      console.log('Response data:', data)
      
      if (data.success) {
        setEnviando(false)
        setEnviado(true)
        
        // Resetear formulario después de 5 segundos
        setTimeout(() => {
          setFormData({
            nombre: '',
            email: '',
            telefono: '',
            fecha: '',
            hora: '',
            cancha: 'Cancha 1',
            mensaje: '',
          })
          setEnviado(false)
        }, 5000)
      } else {
        console.error('Error response:', data)
        throw new Error(data.message || 'Error al enviar')
      }
      
    } catch (error) {
      console.error('Error completo:', error)
      setEnviando(false)
      setError(true)
      
      // Ocultar error después de 5 segundos
      setTimeout(() => {
        setError(false)
      }, 5000)
    }
  }

  // Obtener fecha mínima (hoy)
  const today = new Date().toISOString().split('T')[0]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Reserva tu Cancha
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Selecciona la fecha y hora que prefieras. Nuestro equipo confirmará la disponibilidad.
          </p>
        </div>

        {/* Formulario de Reserva */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Información Personal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <User size={18} className="mr-2 text-accent-600" />
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <Phone size={18} className="mr-2 text-accent-600" />
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                  placeholder="+506 1234 5678"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Mail size={18} className="mr-2 text-accent-600" />
                Correo Electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                placeholder="tu@email.com"
              />
            </div>

            {/* Detalles de la Reserva */}
            <div className="border-t-2 border-gray-100 pt-6 mt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Detalles de la Reserva</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="fecha" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Calendar size={18} className="mr-2 text-accent-600" />
                    Fecha *
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    required
                    min={today}
                    value={formData.fecha}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="hora" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Clock size={18} className="mr-2 text-accent-600" />
                    Hora *
                  </label>
                  <select
                    id="hora"
                    name="hora"
                    required
                    value={formData.hora}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                  >
                    <option value="">Seleccionar</option>
                    {horarios.map((horario) => (
                      <option key={horario} value={horario}>
                        {horario}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="cancha" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Calendar size={18} className="mr-2 text-accent-600" />
                    Cancha *
                  </label>
                  <select
                    id="cancha"
                    name="cancha"
                    required
                    value={formData.cancha}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                  >
                    {canchas.map((cancha) => (
                      <option key={cancha} value={cancha}>
                        {cancha}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Mensaje Adicional */}
            <div>
              <label htmlFor="mensaje" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <MessageSquare size={18} className="mr-2 text-accent-600" />
                Mensaje Adicional (Opcional)
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                placeholder="¿Alguna solicitud especial?"
              />
            </div>

            {/* Botón de Envío */}
            <div className="pt-4">
              {enviado ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 text-center animate-fadeIn">
                  <p className="text-green-700 font-semibold text-lg">
                    ✓ ¡Solicitud enviada correctamente!
                  </p>
                  <p className="text-green-600 text-sm mt-2">
                    Te contactaremos pronto para confirmar tu reserva.
                  </p>
                </div>
              ) : error ? (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-center animate-fadeIn">
                  <p className="text-red-700 font-semibold text-lg">
                    ✗ Error al enviar la solicitud
                  </p>
                  <p className="text-red-600 text-sm mt-2">
                    Por favor, intenta nuevamente o contáctanos por WhatsApp.
                  </p>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={enviando}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-lg ${
                    enviando 
                      ? 'opacity-75 cursor-not-allowed' 
                      : 'hover:from-accent-700 hover:to-accent-800 transform hover:scale-[1.02] hover:shadow-xl'
                  }`}
                >
                  {enviando ? (
                    <>
                      <Loader size={24} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      Enviar Solicitud de Reserva
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Nota Informativa */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-sm text-blue-800">
                <strong>Nota:</strong> Esta es una solicitud de reserva. Nuestro equipo verificará la disponibilidad 
                y te contactará para confirmar tu reserva en las próximas horas.
              </p>
            </div>
          </form>
        </div>

        {/* Información de Contacto Directo */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">¿Prefieres reservar por teléfono o WhatsApp?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+50687980008"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-black transition-all duration-300"
            >
              <Phone size={20} />
              Llamar Ahora
            </a>
            <a
              href="https://wa.me/50687980008?text=Hola, me gustaría hacer una reserva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              <MessageSquare size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reservas
