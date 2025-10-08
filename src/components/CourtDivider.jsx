import React from 'react'

const CourtDivider = () => {
  return (
    <div className="relative h-px my-16 overflow-hidden">
      {/* Línea sutil y elegante */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
    </div>
  )
}

export default CourtDivider
