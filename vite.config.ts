import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
// https://vueschool.io/articles/vuejs-tutorials/how-to-package-and-distribute-a-vue-js-3-plugin-on-npm/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $tablet-max-width: 640px;
          $mobile-max-width: 480px;
          $light-theme: true;
          $dark-theme: true;
          $theme: 'purple';
        `
      }
    }
  },
  plugins: [
    vue(),
    dts(),
  ],
  build: {
    sourcemap: 'inline',
    lib: {
      // the entry file that is loaded whenever someone imports
      // your plugin in their app
      entry: path.resolve(__dirname, 'src/index.ts'),

      // the exposed global variable
      // is required when formats includes 'umd' or 'iife'
      name: 'ez-table',

      // the proper extensions will be added, ie:
      // name.js (es module)
      // name.umd.cjs) (common js module)
      // default fileName is the name option of package.json
      fileName: 'ez-table'
    },

    rollupOptions: {

      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
