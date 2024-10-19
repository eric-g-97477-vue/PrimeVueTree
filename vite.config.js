import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';
import { fileURLToPath, URL } from 'node:url';
import vueDevTools from 'vite-plugin-vue-devtools';


// https://vitejs.dev/config/
export default defineConfig({
  define: {
		__VUE_PROD_DEVTOOLS__: 'true'
	},
  plugins: [
      vue(),
      vueDevTools(),
      Components({
          resolvers: [
              PrimeVueResolver()
          ]
      })
  ],
  resolve: {
      alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
      }
  }
});
