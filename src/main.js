import { createApp } from 'vue';
import App from './views/corsi-di-laurea.vue';
import SmartTable from 'vuejs-smart-table';

createApp(App).use(SmartTable).mount('#app')