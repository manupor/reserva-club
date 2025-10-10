import React, { useState, useEffect } from 'react'
import { Check, X } from 'lucide-react'

const Membresias = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const features = [
    { name: 'Precio', familiar: '$150 + IVA/MES', ejecutiva: '$300 + IVA/MES', corporativa: '$600 + IVA/MES ($500 + IVA PROMO)' },
    { name: 'Beneficiarios', familiar: 'SOCIO Y FAMILIA (HIJOS HASTA 18 AÑOS)', ejecutiva: 'SOCIO', corporativa: '2 SOCIOS + 2 INVITADOS + 10 SOCIOS' },
    { name: 'Acceso ilimitado a Zona VIP', familiar: true, ejecutiva: true, corporativa: true },
    { name: 'Eventos exclusivos', familiar: true, ejecutiva: true, corporativa: true },
    { name: 'Prioridad exclusivo socios', familiar: true, ejecutiva: true, corporativa: true },
    { name: 'Paquete bienvenida', familiar: true, ejecutiva: true, corporativa: true },
    { name: 'Descuento en tienda y restaurant', familiar: '10 %', ejecutiva: '10 %', corporativa: '15 %' },
    { name: 'Reserva Preferente para reservaciones de última hora', familiar: true, ejecutiva: true, corporativa: true },
    { name: 'Una partida por semana en pista sin costo (solo socios)', familiar: true, ejecutiva: true, corporativa: true },
    { name: 'Invitar hasta cero socios y sus acompañantes', familiar: true, ejecutiva: true, corporativa: true },
    { name: 'Servicio de línea exclusiva', familiar: true, ejecutiva: true, corporativa: true },
    { name: 'Descuento en tarifas de renta', familiar: '10 %', ejecutiva: '10 %', corporativa: '15 %' },
    { name: 'Descuento en clases privadas', familiar: '10 %', ejecutiva: '10 %', corporativa: '15 %' },
  ]

  return (
    <section 
      id="membresias" 
      className={`relative py-20 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/two-balls-line-blue-synthetic-grass-paddle-tennis-court-health-sport-concept.jpg)',
        }}
      >
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            MEMBRESÍAS CLUB RESERVA
          </h2>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="text-6xl font-serif text-gray-700">
            <span className="text-gray-800">R</span>
            <span className="text-sm align-super">eserva</span>
          </div>
        </div>

        {/* Membership Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900"></th>
                <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-900">FAMILIAR</th>
                <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-900">INDIVIDUAL / EJECUTIVA</th>
                <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-900">CORPORATIVA</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">
                    {feature.name}
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    {typeof feature.familiar === 'boolean' ? (
                      feature.familiar ? (
                        <Check className="w-6 h-6 text-gold-600 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-700">{feature.familiar}</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    {typeof feature.ejecutiva === 'boolean' ? (
                      feature.ejecutiva ? (
                        <Check className="w-6 h-6 text-gold-600 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-700">{feature.ejecutiva}</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center">
                    {typeof feature.corporativa === 'boolean' ? (
                      feature.corporativa ? (
                        <Check className="w-6 h-6 text-gold-600 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-700">{feature.corporativa}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <a
            href="#contacto"
            className="px-8 py-4 bg-white border-2 border-accent-600 text-accent-600 font-semibold rounded-lg hover:bg-accent-50 transition-all duration-300 text-center"
          >
            ¿AÚN NO ERES SOCIO?
          </a>
          <a
            href="#registro"
            className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 text-center"
          >
            Descarga Aplicación GRATIS
          </a>
        </div>
      </div>
    </section>
  )
}

export default Membresias
