import { createApp } from 'vue';

import App from './App.vue';

import BaseCard from './components/base-component/BaseCard.vue';

const app = createApp(App).mount('#app');

app.component('base-card', BaseCard);
