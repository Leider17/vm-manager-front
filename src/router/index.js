import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WindowMv from '../views/WindowMv.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import { useAuthStore } from "../stores/authStore";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: { requiresAuth: true }
        },
        {
            path: '/windowmv/:websocketUrl',
            name: 'WindowMv',
            component: WindowMv,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: { requiresAuth: false }
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: { requiresAuth: false }
        }
    ]
})


router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next({ name: 'Login' });
    } else if ((to.name === 'Login' || to.name === 'Register') && authStore.isAuthenticated) {
        next({ name: 'Home' });
    } else {
        next();
    }
})

export default router
