import React from 'react'
import { Home, Users, CreditCard, Trophy, Newspaper, Mail, UserPlus, GraduationCap } from 'lucide-react'

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'nosotros', label: 'Nosotros', icon: Users },
    { id: 'membresias', label: 'Membresías', icon: CreditCard },
    { id: 'academia', label: 'Academia', icon: GraduationCap },
    { id: 'equipo', label: 'Equipo', icon: Trophy },
    { id: 'noticias', label: 'Noticias', icon: Newspaper },
    { id: 'contacto', label: 'Contacto', icon: Mail },
    { id: 'registro', label: 'Registro', icon: UserPlus },
  ]

  return (
    <nav className="sticky top-0 z-40 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 shadow-lg border-b-4 border-emerald-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-4 min-w-fit whitespace-nowrap
                  transition-all duration-300 relative group
                  ${activeTab === tab.id 
                    ? 'text-white' 
                    : 'text-emerald-200 hover:text-white'
                  }
                `}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 ${
                  activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'
                }`} />
                <span className="font-semibold">{tab.label}</span>
                
                {/* Active indicator */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-1 bg-emerald-400
                  transition-all duration-300 rounded-t-full
                  ${activeTab === tab.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}
                `} />
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default TabNavigation
