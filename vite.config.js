import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-chat-application",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
