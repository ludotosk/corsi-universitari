import { createApp } from 'vue';
import App from './App.vue';
import SmartTable from 'vuejs-smart-table';
import './assets/style.scss';

createApp(App).use(SmartTable).mount('#app')

window.dataLayer = window.dataLayer || [];

function gtag() {
    window.dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-WSK0D83FEJ');