import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WindowMv from '../views/WindowMv.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import { useAuthStore } from "../stores/authStore"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: { requiresAuth: true, roles: ['student'] }
        },
        {
            path: '/windowmv/:websocketUrl',
            name: 'WindowMv',
            component: WindowMv,
            meta: { requiresAuth: true, roles: ['student']}
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            meta: { requiresAuth: true, roles: ['admin']}
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

const getDefaultRoute = (role) => {
    const routes = {
        admin: 'Admin',
        student: 'Home'
    }
    return routes[role] || 'Login'
}

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    const isAuthenticated = authStore.isAuthenticated
    const userRole = authStore.current_user?.role
    
    const publicRoutes = ['Login', 'Register']


    if (to.matched.length === 0) {
        if (!authStore.isAuthenticated) {
            return next({ name: 'Login' })
        }
        return next({ name: getDefaultRoute(authStore.current_user?.role) })
    }
    
    if (publicRoutes.includes(to.name)) {
        if (isAuthenticated) {
            return next({ name: getDefaultRoute(userRole) })
        }
        return next()
    }
    
    if (!isAuthenticated) {
        return next({ name: 'Login' })
    }
    
    if (to.meta.roles && !to.meta.roles.includes(userRole)) {
        return next({ name: getDefaultRoute(userRole) })
    }
    
    next()
})

export default router