import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  base:'/',
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
    },
  }, 
  build: {
    outDir: 'dist' // Ensure this matches Vercel's expected directory
  }
})
