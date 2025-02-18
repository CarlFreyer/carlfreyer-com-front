import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' 

// https://vite.dev/config/
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(), 
      svgr({ svgrOptions: {}}),
    ],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    } 
  }
}
) 