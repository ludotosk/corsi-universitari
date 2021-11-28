import { createApp } from 'vue';
import App from './App.vue';
import SmartTable from 'vuejs-smart-table';
import './assets/style.scss';
import VueGtag from "vue-gtag";

createApp(App).use(SmartTable).use(VueGtag, {
    property: {
        id: "G-WSK0D83FEJ"
    }
}).mount('#app')