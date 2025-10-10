import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'Public',
  server: {
    port: 4000,
    open: true
  }
})
