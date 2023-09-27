import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath, URL} from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins : [react()],
  resolve : {
    alias : {
      '@Pages'      : fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@Components' : fileURLToPath(new URL('./src/components', import.meta.url)),
      '@Assets'     : fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@Queries'    : fileURLToPath(new URL('./src/queries', import.meta.url)),
      '@Contexts'   : fileURLToPath(new URL('./src/contexts', import.meta.url)),
      '@Datocms'    : fileURLToPath(new URL('./src/datocms', import.meta.url)),
    },
  },
})
