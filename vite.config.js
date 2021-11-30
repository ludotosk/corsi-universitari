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
                'corsi-di-laurea-in-inglese': resolve(__dirname, 'corsi-di-laurea-in-inglese/index.html'),
                on: resolve(__dirname, 'corsi-di-laurea-online/index.html'),
                bolo: resolve(__dirname, 'corsi-di-laurea-bologna/index.html'),
                fire: resolve(__dirname, 'corsi-di-laurea-firenze/index.html'),
                pado: resolve(__dirname, 'corsi-di-laurea-padova/index.html'),
                mila: resolve(__dirname, 'corsi-di-laurea-milano/index.html'),
                tri: resolve(__dirname, 'lauree-triennali-elenco/index.html'),
                mag: resolve(__dirname, 'lista-corsi-di-laurea-magistrale/index.html'),
                inter: resolve(__dirname, 'corsi-di-laurea-internazionali/index.html'),
                bari: resolve(__dirname, 'corsi-di-laurea-bari/index.html'),
                roma: resolve(__dirname, 'corsi-di-laurea-roma/index.html'),
                pisa: resolve(__dirname, 'corsi-di-laurea-pisa/index.html'),
                palermo: resolve(__dirname, 'corsi-di-laurea-palermo/index.html'),
                torino: resolve(__dirname, 'corsi-di-laurea-torino/index.html'),
                napoli: resolve(__dirname, 'corsi-di-laurea-napoli/index.html'),
                notest: resolve(__dirname, 'lista-corsi-di-laurea-senza-test/index.html'),
                link: resolve(__dirname, 'link/index.html'),
                miglioriCdl: resolve(__dirname, 'migliori-corsi-di-laurea/index.html'),
                miglioriUni: resolve(__dirname, 'migliori-universita-italiane/index.html'),
                med: resolve(__dirname, 'migliori-universita-medicina/index.html'),
                cont: resolve(__dirname, 'contattami/index.html'),
                pol: resolve(__dirname, 'cookie-policy/index.html'),
                tabella: resolve(__dirname, 'tabella/index.html')
            }
        }
    }
})