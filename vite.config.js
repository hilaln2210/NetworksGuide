import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Cache-busting: every build gets a unique version stamp for iframe src
    __APP_VERSION__: JSON.stringify(Date.now().toString(36)),
  },
})
