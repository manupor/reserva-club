import React, { useState } from 'react'
import { Calendar, Clock, User, Mail, Lock, CreditCard } from 'lucide-react'

const Registro = () => {
  const [activeTab, setActiveTab] = useState('reservar')
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    court: '',
    duration: '60',
  })
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  })

  const courts = [
    'Cancha 1 - Indoor Panorámica',
    'Cancha 2 - Indoor Panorámica',
    'Cancha 3 - Indoor Panorámica',
    'Cancha 4 - Indoor Panorámica',
    'Cancha 5 - Indoor Panorámica',
    'Cancha 6 - Estadio Súper Panorámica',
  ]

  const timeSlots = [
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00',
  ]

  const handleReservationSubmit = (e) => {
    e.preventDefault()
    console.log('Reservation:', reservationData)
    alert('¡Reservación exitosa! Te enviaremos un correo de confirmación.')
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', loginData)
    alert('¡Bienvenido de vuelta!')
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    console.log('Register:', registerData)
    alert('¡Registro exitoso! Ahora puedes reservar canchas.')
  }

  return (
    <section id="registro" className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Registro & <span className="text-accent-600">Reservaciones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reserva tu cancha en segundos o crea tu cuenta para acceder a beneficios exclusivos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Forms Section */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('reservar')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeTab === 'reservar'
                    ? 'bg-accent-500 text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                Reservar Cancha
              </button>
              <button
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeTab === 'login'
                    ? 'bg-accent-500 text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                Iniciar Sesión
              </button>
              <button
                onClick={() => setActiveTab('registro')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeTab === 'registro'
                    ? 'bg-accent-500 text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                Registrarse
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {/* Reservation Form */}
              {activeTab === 'reservar' && (
                <form onSubmit={handleReservationSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Fecha
                    </label>
                    <input
                      type="date"
                      required
                      value={reservationData.date}
                      onChange={(e) => setReservationData({ ...reservationData, date: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline w-4 h-4 mr-2" />
                      Hora
                    </label>
                    <select
                      required
                      value={reservationData.time}
                      onChange={(e) => setReservationData({ ...reservationData, time: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selecciona una hora</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cancha
                    </label>
                    <select
                      required
                      value={reservationData.court}
                      onChange={(e) => setReservationData({ ...reservationData, court: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selecciona una cancha</option>
                      {courts.map((court) => (
                        <option key={court} value={court}>{court}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duración (minutos)
                    </label>
                    <select
                      value={reservationData.duration}
                      onChange={(e) => setReservationData({ ...reservationData, duration: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    >
                      <option value="60">60 minutos</option>
                      <option value="90">90 minutos</option>
                      <option value="120">120 minutos</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-lg rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-accent-500/50"
                  >
                    Confirmar Reservación
                  </button>
                </form>
              )}

              {/* Login Form */}
              {activeTab === 'login' && (
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Lock className="inline w-4 h-4 mr-2" />
                      Contraseña
                    </label>
                    <input
                      type="password"
                      required
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-accent-600 focus:ring-accent-500" />
                      <span className="ml-2 text-sm text-gray-600">Recordarme</span>
                    </label>
                    <a href="#" className="text-sm text-accent-600 hover:text-accent-700 font-medium">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-lg rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-accent-500/50"
                  >
                    Iniciar Sesión
                  </button>
                </form>
              )}

              {/* Register Form */}
              {activeTab === 'registro' && (
                <form onSubmit={handleRegisterSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      required
                      value={registerData.name}
                      onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      required
                      value={registerData.phone}
                      onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      placeholder="+506 1234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Lock className="inline w-4 h-4 mr-2" />
                      Contraseña
                    </label>
                    <input
                      type="password"
                      required
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-lg rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-accent-500/50"
                  >
                    Crear Cuenta
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop"
              alt="Padel Court"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-accent-900/80" />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="text-center text-white">
                <h3 className="text-4xl font-bold mb-6">¡Únete a Club Reserva!</h3>
                <p className="text-xl mb-8 opacity-90">
                  Disfruta de las mejores instalaciones de pádel en Costa Rica
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-3xl font-bold mb-2">6</div>
                    <div className="text-sm opacity-90">Canchas Premium</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">Miembros Activos</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-sm opacity-90">Eventos al Año</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">Soporte Online</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registro
