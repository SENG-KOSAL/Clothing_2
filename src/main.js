import { createApp } from 'vue';
import App from './App.vue';
import router from './routers'; // Correct path to the router file



createApp(App)
  .use(router)
  .mount('#app');
