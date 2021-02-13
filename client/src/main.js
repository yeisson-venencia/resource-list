import { createApp } from 'vue';

import App from './App.vue';

import BaseCard from './components/base-component/BaseCard.vue';
import BaseButton from './components/base-component/BaseButton.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
