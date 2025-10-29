<template>
    <div class="border border-gray-300 px-7 py-4 rounded-2xl shadow-xl w-64 h-64">
        <h3 class="text-g text-center">{{ name }}</h3>
        <p class="text-gray-700 text-base mb-4">Tipo: {{ type_name }}</p>
        <p class="text-gray-700 text-base mb-4">Estado: {{ state }}</p>
        <div class="flex px-6 py-4 items-center justify-between">
            <img class="w-10 h-10"  :src="state === 'running' ? 'images/stop.png' : state === 'stopped' ? 'images/start.png' : ''" alt="" @click="handleMv(state)">
            <img class="w-10 h-10" :src="'images/delete.png'" alt="" @click="deleteMv">
        </div>
        <Button v-if="state == 'running'" @click="enterVm">Acceder</Button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useMvStore } from '../../stores/mvStore'
    import { useAuthStore } from '../../stores/authStore'
    import { useNovncStore } from '../../stores/novncStore'
    import router from '../../router/index'
    import Button from './Button.vue'

    const props = defineProps({
        state: {
            type: String,
            required: true,
            default: "stopped"
        },
        name: {
            type: String,
            required: true,
            default: ""
        },
        type_name: {
            type: String,
            required: true,
            default: ""
        },
    })

    const mvStore = useMvStore()
    const authStore = useAuthStore()
    const novncStore = useNovncStore()

    const emit = defineEmits(['provision'])

    const websocketUrl = ref("")

    const handleMv = (status) =>{
        if (status == "stopped"){
            const win = window.open('', '_blank')
            connectMv(status, win)
        }
        connectMv(status)
    }

    const connectMv = async (status, win = null) =>{
        if (status == "stopped"){
            await mvStore.startVm(props.name)

            websocketUrl.value = await novncStore.connectNovnc(props.name,  authStore.current_user?.id)
            const routerData = router.resolve({ name: 'WindowMv', params: { websocketUrl: websocketUrl.value } })
            if (win) win.location = routerData.href
        }

        if (status == "running"){
            await mvStore.stopVm(props.name)
        }
    }

    const enterVm = () => {
        const win = window.open('', '_blank')
            accessVM(win)
    }

    const accessVM = async (win = null) => {
        
        websocketUrl.value = await novncStore.connectNovnc(props.name, authStore.current_user?.id)
        const routerData = router.resolve({ name: 'WindowMv', params: { websocketUrl: websocketUrl.value } })
        win.location = routerData.href
    }

    const deleteMv = async () => {
        await mvStore.destroyVm(props.name)
    }

</script>
