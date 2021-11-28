import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SmartTable from 'vuejs-smart-table'
import './assets/style.scss'
import VueGtag from "vue-gtag";
import { createHead } from '@vueuse/head'

const head = createHead()


createApp(App).use(router).use(SmartTable).use(head).use(VueGtag, {
    property: {
        id: "G-WSK0D83FEJ"
    }
}).mount('#app')