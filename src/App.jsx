import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Membresias from './components/Membresias'
import Academia from './components/Academia'
import Equipo from './components/Equipo'
import Noticias from './components/Noticias'
import Contacto from './components/Contacto'
import Registro from './components/Registro'
import Reservas from './components/Reservas'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [activeTab, setActiveTab] = useState('inicio')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderContent = () => {
    switch(activeTab) {
      case 'inicio':
        return <Hero scrollY={scrollY} />
      case 'membresias':
        return <Membresias />
      case 'academia':
        return <Academia />
      case 'equipo':
        return <Equipo scrollY={scrollY} />
      case 'noticias':
        return <Noticias />
      case 'contacto':
        return <Contacto />
      case 'registro':
        return <Registro />
      case 'reservas':
        return <Reservas />
      default:
        return <Hero scrollY={scrollY} />
    }
  }

  return (
    <>
      <Preloader onLoadComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <div className="min-h-screen">
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="pt-16 md:pt-20">
            <div key={activeTab} className={`${activeTab === 'inicio' ? '' : 'min-h-[calc(100vh-200px)]'} tab-content-enter`}>
              {renderContent()}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
