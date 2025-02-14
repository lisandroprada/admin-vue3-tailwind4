import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // Importa el módulo 'path' de Node.js


export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
    resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Define el alias '@' para 'src'
    }
  }
})