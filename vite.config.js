import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
    root,
    plugins: [
        vue()
    ],
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                'corsi-di-laurea-in-inglese': resolve(root, 'corsi-di-laurea-in-inglese/index.html'),
                on: resolve(root, 'corsi-di-laurea-online/index.html'),
                bolo: resolve(root, 'corsi-di-laurea-bologna/index.html'),
                fire: resolve(root, 'corsi-di-laurea-firenze/index.html'),
                pado: resolve(root, 'corsi-di-laurea-padova/index.html'),
                mila: resolve(root, 'corsi-di-laurea-milano/index.html'),
                tri: resolve(root, 'lauree-triennali-elenco/index.html'),
                mag: resolve(root, 'lista-corsi-di-laurea-magistrale/index.html'),
                inter: resolve(root, 'corsi-di-laurea-internazionali/index.html'),
                bari: resolve(root, 'corsi-di-laurea-bari/index.html'),
                roma: resolve(root, 'corsi-di-laurea-roma/index.html'),
                pisa: resolve(root, 'corsi-di-laurea-pisa/index.html'),
                palermo: resolve(root, 'corsi-di-laurea-palermo/index.html'),
                torino: resolve(root, 'corsi-di-laurea-torino/index.html'),
                napoli: resolve(root, 'corsi-di-laurea-napoli/index.html'),
                notest: resolve(root, 'lista-corsi-di-laurea-senza-test/index.html'),
                link: resolve(root, 'link/index.html'),
                miglioriCdl: resolve(root, 'migliori-corsi-di-laurea/index.html'),
                miglioriUni: resolve(root, 'migliori-universita-italiane/index.html'),
                med: resolve(root, 'migliori-universita-medicina/index.html'),
                cont: resolve(root, 'contattami/index.html'),
                pol: resolve(root, 'cookie-policy/index.html'),
                tabella: resolve(root, 'tabella/index.html'),
                genova: resolve(root, 'corsi-di-laurea-genova/index.html'),
                master: resolve(root, 'master/index.html')
            }
        }
    }
})