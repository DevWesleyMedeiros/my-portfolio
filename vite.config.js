import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/src',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@img': path.resolve(__dirname, 'src/img'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  preview: {
    port: 4173,
  },
})
