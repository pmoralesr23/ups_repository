// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

export default defineConfig({
  plugins: [reactRefresh()],
  optimizeDeps:{
    esbuildOptions:{
      plugins:[
        esbuildCommonjs(['react-calendar','react-date-picker'])
      ]
    }
  }
})