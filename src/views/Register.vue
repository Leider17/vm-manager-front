<template>
    <Header />
    <div class="flex justify-center items-center h-screen flex-col">
        <AuthForm mode="register" @submit="handleSubmit" />
    </div>
</template>

<script setup>
    import {useAuthStore} from '../stores/authStore'
    import { useRouter } from 'vue-router'

    import Header from '../components/layout/Header.vue'
    import AuthForm from '../components/form/AuthForm.vue'

    const authStore = useAuthStore()
    const router = useRouter()

    const handleSubmit = async (data) => {
        const register = await authStore.register(data)
        if (register) {
            router.push('/login')
        }
    }

</script>