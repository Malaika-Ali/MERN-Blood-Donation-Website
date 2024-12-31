import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
      // '/socket.io': {
      //   target: 'http://localhost:8000', // Proxy for Socket.IO
      //   ws: true, // Enable WebSocket proxying
      // },
      '/socket.io': {
                target: 'http://localhost:8000', // Backend URL
                ws: true,
                changeOrigin: true,
            },
    }
  },
  plugins: [react()],
})
