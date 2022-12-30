import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'spa',
  rollupOptions: {
    input: './index.html',
  },
  plugins: [react()],
})
