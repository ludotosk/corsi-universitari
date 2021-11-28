import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ing: resolve(__dirname, 'corsi-di-laurea-in-inglese/index.html'),
                on: resolve(__dirname, 'corsi-di-laurea-online/index.html'),
                bolo: resolve(__dirname, 'corsi-di-laurea-bologna/index.html')
            }
        }
    }
})