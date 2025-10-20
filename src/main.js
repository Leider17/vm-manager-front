import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { createPinia } from 'pinia'
import { useAuthStore } from "./stores/authStore";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

const authStore = useAuthStore(); 
authStore.initializeAuth();                           


createApp(App).use(router).use(pinia).mount('#app');
