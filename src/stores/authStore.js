import { defineStore} from 'pinia'
import { authService } from '../services/authService'
import { useMvStore } from './mvStore'
import router from '../router/index'
import { ref , computed} from 'vue'

export const useAuthStore = defineStore('auth', () => {

    const user = ref({})
    const current_user = ref(null)
    const access_token = ref(null)
    const token_type = ref(null)
    const loading = ref(false)
    const error = ref(null)

    const isAuthenticated = computed(() => user.value && access_token.value)

    const mvStore = useMvStore()

    const initializeAuth = () => {
        const accessToken = localStorage.getItem('access_token')
        const tokenType = localStorage.getItem('token_type')
        const currentUser = localStorage.getItem('current_user')

        if (accessToken && tokenType && currentUser) {
            access_token.value = accessToken
            token_type.value = tokenType
            user.value = { access_token: accessToken, token_type: tokenType }
            current_user.value = JSON.parse(currentUser)
            return true
        }

        return false
    }

    const register = async (userData) => {
        loading.value = true
        error.value = null

        try {
            await authService.register(userData)
            return true
        } catch (err) {
            error.value = err.message || 'Registration failed'
        } finally {
            loading.value = false
        }
    }
    
    const login = async (credentials) => {
        loading.value = true
        error.value = null
        
        try {
            const response = await authService.login(credentials)
            access_token.value = response.access_token
            token_type.value = response.token_type
            user.value = credentials
            current_user.value = response.user

            localStorage.setItem('access_token', response.access_token)
            localStorage.setItem('token_type', response.token_type)
            localStorage.setItem('current_user', JSON.stringify(response.user))

            router.push('/')
            return true
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    const logout = async () => {
        await mvStore.shutdownVmsUser(current_user.value?.id)
        authService.logout()
        user.value = {}
        access_token.value = null
        token_type.value = null
        router.push({ name: 'Login' })
    }

    return {
        user,
        current_user,
        access_token,
        token_type,
        loading,
        error,
        isAuthenticated,
        initializeAuth,
        register,
        login,
        logout
    }
})