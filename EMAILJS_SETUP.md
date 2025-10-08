# Configuración de Formspree para Sistema de Reservas

## 📧 Pasos RÁPIDOS para configurar el envío de correos (5 minutos)

### 1. Crear cuenta en Formspree
1. Ve a [https://formspree.io/](https://formspree.io/)
2. Click en **"Get Started"** o **"Sign Up"**
3. Regístrate con tu email: `manuelportuguezmora@gmail.com`
4. Verifica tu email

### 2. Crear un nuevo formulario
1. En el dashboard, click en **"+ New Form"**
2. Dale un nombre: **"Club Reserva - Reservas de Canchas"**
3. En **"Email Address"**, pon: `manuelportuguezmora@gmail.com`
4. Click en **"Create Form"**

### 3. Copiar el Form ID
1. Verás un código como: `https://formspree.io/f/xyzabc123`
2. Copia solo la parte final: **`xyzabc123`** (tu Form ID único)

### 4. Actualizar el código
1. Abre el archivo `/src/components/Reservas.jsx`
2. Ve a la línea 56
3. Reemplaza `YOUR_FORM_ID` con tu Form ID:

```javascript
const response = await fetch('https://formspree.io/f/xyzabc123', {
```

### 5. ¡Listo! Ya funciona
- Los correos llegarán a `manuelportuguezmora@gmail.com`
- Incluyen todos los datos de la reserva
- Se envían automáticamente desde la web

### 6. Cambiar email de destino (cuando quieras)
Para que lleguen a recepción:
1. En Formspree, crea otro formulario
2. Usa el email: `recepcion@clubreservacr.com`
3. Actualiza el Form ID en el código

## 🎯 Ventajas de Formspree
- ✅ **Configuración en 5 minutos**
- ✅ **Gratis hasta 50 envíos/mes**
- ✅ **Sin código de backend**
- ✅ **Protección anti-spam incluida**
- ✅ **Notificaciones por email**

## 📊 Plan Gratuito
- 50 envíos por mes
- Si necesitas más: $10/mes para 1000 envíos

## ✅ Verificación
1. Configura tu Form ID
2. Ve a la página de Reservas
3. Completa el formulario de prueba
4. Haz click en "Enviar"
5. Revisa tu Gmail en 1-2 minutos

---

**Nota:** El formulario ya está listo, solo necesitas el Form ID de Formspree para activarlo.
