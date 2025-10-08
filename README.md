# Club Reserva - Pádel & Social Club Website

Una página web moderna y profesional para un club de pádel en Costa Rica, diseñada con React, TailwindCSS y las mejores prácticas de UX/UI.

## 🎯 Características

### Diseño y Estilo
- **Colores**: Paleta de verdes, azules y naranjas vibrantes
- **Tipografía**: Inter (Google Fonts) - moderna y legible
- **Efectos**: Parallax, animaciones suaves, microinteracciones
- **Responsivo**: Optimizado para desktop, tablet y móvil

### Secciones Implementadas

1. **Header/Navigation**
   - Logo sin círculo
   - Navegación sticky con 7 tabs
   - CTA destacado "Reservar ahora"
   - Menú móvil hamburguesa
   - Altura: 80px desktop, 60px móvil

2. **Hero Section**
   - Fullscreen (100vh)
   - Efecto parallax en imagen de fondo
   - Texto centrado con CTA animado
   - Overlay para legibilidad
   - Indicador de scroll

3. **Nosotros**
   - Layout 50/50 (texto/imagen)
   - Parallax sutil en imagen
   - Grid de características con iconos
   - Espaciado 80px top/bottom

4. **Membresías**
   - 3 tarjetas responsivas (3/2/1 columnas)
   - Tarjetas 300x400px con hover scale-up
   - Badge "Más Popular"
   - Iconos y beneficios listados
   - Botón CTA por tarjeta

5. **Academia Pádel**
   - 6 cursos en grid responsivo (3/2/1)
   - Animación fade-in al scroll
   - Información detallada: nivel, horario, instructor
   - Imágenes con zoom hover
   - Botón "Inscribirse"

6. **Nuestro Equipo**
   - Grid 4/2/1 columnas
   - Fotos con hover lift (10px)
   - Parallax ligero
   - Iconos de redes sociales
   - 8 miembros del equipo

7. **Noticias/Eventos**
   - Grid 3/2/1 columnas
   - Tarjetas con imagen (200px height)
   - Categorías con colores
   - Hover zoom en imagen
   - Botón "Leer más"

8. **Contacto**
   - Formulario completo (nombre, email, teléfono, mensaje)
   - Información de contacto con iconos
   - Mapa interactivo (400px height)
   - Container max-width 1000px

9. **Registro & Reservaciones**
   - 3 tabs: Reservar/Login/Registro
   - Layout 50/50 (formulario/imagen)
   - Formulario de reservación con fecha/hora/cancha
   - Botón naranja con efecto glow
   - Estadísticas del club

10. **Footer**
    - Background oscuro con texto claro
    - Redes sociales
    - Newsletter con input + botón
    - Información de contacto completa
    - Links organizados por categorías

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 16+ instalado
- npm o yarn

### Pasos de Instalación

1. Navega al directorio del proyecto:
```bash
cd /Users/manu/CascadeProjects/club-reserva-padel
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:3000`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## 🎨 Tecnologías Utilizadas

- **React 18** - Framework de UI
- **Vite** - Build tool y dev server
- **TailwindCSS 3** - Framework de CSS utility-first
- **Lucide React** - Iconografía moderna y minimalista
- **Framer Motion** - Animaciones (preparado para uso futuro)

## 📱 Características Responsivas

### Desktop (lg: 1024px+)
- Header: 80px altura
- Grid de membresías: 3 columnas
- Grid de academia: 3 columnas
- Grid de equipo: 4 columnas
- Grid de noticias: 3 columnas

### Tablet (md: 768px - 1023px)
- Header: 80px altura
- Grid de membresías: 2 columnas
- Grid de academia: 2 columnas
- Grid de equipo: 2 columnas
- Grid de noticias: 2 columnas

### Móvil (< 768px)
- Header: 60px altura con menú hamburguesa
- Todos los grids: 1 columna
- Layout de registro: 100% ancho

## 🎭 Efectos y Animaciones

- **Parallax**: Hero section, imágenes de Nosotros y Equipo
- **Hover Effects**: 
  - Scale-up en tarjetas (105%)
  - Lift en tarjetas de equipo (10px)
  - Zoom en imágenes
  - Glow en botones CTA
- **Scroll Animations**: Fade-in desde abajo en Academia
- **Transitions**: Suaves (300ms) en todos los elementos interactivos

## 🎯 Próximos Pasos Recomendados

1. **Backend Integration**
   - Conectar formularios a API
   - Sistema de autenticación real
   - Base de datos para reservaciones

2. **Funcionalidades Adicionales**
   - Sistema de pago integrado
   - Calendario de disponibilidad en tiempo real
   - Panel de administración
   - Sistema de notificaciones

3. **Optimizaciones**
   - Lazy loading de imágenes
   - Optimización de assets
   - SEO mejorado
   - Analytics integration

4. **Contenido**
   - Reemplazar imágenes de Unsplash con fotos reales del club
   - Actualizar textos con información específica
   - Agregar testimonios de clientes

## 📄 Licencia

Este proyecto fue creado para Club Reserva Costa Rica.

## 👨‍💻 Soporte

Para soporte o consultas:
- Email: info@clubreserva.com
- WhatsApp: +506 8798-0008
