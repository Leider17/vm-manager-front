<template>
    <div class="border border-gray-300 px-7 py-4 rounded-2xl shadow-xl w-64 h-64">
        <h3 class="text-g text-center">{{ name }}</h3>
        <p class="text-gray-700 text-base mb-4">Tipo: {{ type }}</p>
        <p class="text-gray-700 text-base mb-4">Estado: {{ state }}</p>
        <div class="flex px-6 py-4 items-center justify-between">
            <img class="w-10 h-10"  :src="state === 'running' ? 'images/stop.png' : state === 'stopped' ? 'images/start.png' : ''" alt="" @click="handleMv(state)">
            <img class="w-10 h-10" :src="'images/delete.png'" alt="" @click="deleteMv">
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
import { useMvStore } from '../../stores/mvStore'
    import { useAuthStore } from '../../stores/authStore'
    import { useNovncStore } from '../../stores/novncStore'
    import router from '../../router/index'

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
        type: {
            type: String,
            required: true,
            default: ""
        },
    })
    
    const userId = ref(null)


    const mvStore = useMvStore()
    const authStore = useAuthStore()
    const novncStore = useNovncStore()

    const emit = defineEmits(['provision'])


    const handleMv = (status) =>{
        if (status == "stopped"){
            const win = window.open('', '_blank')
            connectMv(status, win)
        }
        connectMv(status)
    }

    const connectMv = async (status, win = null) =>{
        if (status == "stopped"){
            console.log(props.name)
            await mvStore.startVm(props.name)
            userId.value = authStore.current_user?.id
            console.log(props.name)


            const websocketUrl = await novncStore.connectNovnc(props.name, userId.value)
            const routerData = router.resolve({ name: 'WindowMv', params: { websocketUrl: websocketUrl } })
                // const window = window.open(routerData.href, '_blank')
            // router.push({ name: 'WindowMv', params: { websocketUrl: websoscketUrl } })
            win.location = routerData.href
        }

        if (status == "running"){
            await mvStore.stopVm(props.name)
        }
    }

    const deleteMv = async () => {
        await mvStore.destroyVm(props.name)
    }

</script>
