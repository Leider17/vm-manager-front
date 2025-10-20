<template>
    <Header />
    <div class="flex justify-center items-center h-screen">
        <AuthForm mode="login" @submit="handleSubmit" />
    </div>
</template>

<script setup>
    import Header from '../components/layout/Header.vue'
    import AuthForm from '../components/form/AuthForm.vue'

    import { useAuthStore } from '../stores/authStore'

    const authStore = useAuthStore()

    const handleSubmit = async (data) => {
        await authStore.login(data)
    }
</script>