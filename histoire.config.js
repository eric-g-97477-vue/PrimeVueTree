import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { fileURLToPath } from 'node:url';

export default defineConfig({
  setupFile: 'histoire-setup.js',
  plugins: [
    HstVue(),
  ],
  vite: {
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
  },
  tree: {
    groups: [
        {
            id: 'components',
            title: 'Components',
            include: (file) => file.path.includes('components')
        }
    ]
  }  

})
