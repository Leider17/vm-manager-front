import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { createPinia } from 'pinia'
import { useAuthStore } from "./stores/authStore";
import { useMvStore } from './stores/mvStore'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

const authStore = useAuthStore(); 
const mvStore = useMvStore();
authStore.initializeAuth(); 
mvStore.connectWebSocket("wss://192.99.37.28:8000/ws")                          


createApp(App).use(router).use(pinia).mount('#app');
