import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Preloader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carga progresiva
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            onLoadComplete()
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onLoadComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900"
        >
          {/* Partículas de fondo animadas */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Contenedor del logo con efecto de llenado */}
            <div className="relative w-64 h-64 mb-8">
              {/* Logo base (gris) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src="/reserva logo web.png"
                  alt="Reserva Logo"
                  className="w-full h-full object-contain filter grayscale opacity-30"
                />
              </motion.div>

              {/* Logo con color que se llena desde abajo */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: `${100 - progress}%` }}
                  transition={{ duration: 0.1 }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `translateY(${100 - progress}%)` }}
                >
                  <img
                    src="/reserva logo web.png"
                    alt="Reserva Logo"
                    className="w-64 h-64 object-contain"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(234, 179, 8, 0.5))',
                    }}
                  />
                </motion.div>
              </div>

            </div>

            {/* Barra de progreso */}
            <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 relative"
              >
                <motion.div
                  animate={{ x: ['0%', '100%'] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>

            {/* Porcentaje */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-yellow-400 font-bold text-2xl tracking-wider"
            >
              {Math.round(progress)}%
            </motion.div>

            {/* Texto de carga */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-2 text-gray-400 text-sm tracking-widest uppercase"
            >
              Cargando experiencia...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
