import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pxToViewport from 'postcss-px-to-viewport';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        pxToViewport({
          viewportWidth: 750,
          unitPrecision: 5,
          viewportUnit: 'vw',
          selectorBlackList: ['ignore-'],
          minPixelValue: 1,
          mediaQuery: false
        })
      ]
    }
  }
})
