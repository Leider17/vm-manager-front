<template>
    <div class="border border-gray-300 px-7 rounded-2xl shadow-xl min-w-90 h-70 flex flex-col justify-center">
        <h3 class=" text-xl text-center">{{ name }}</h3>
        <div class="flex flex-col">
            <p class="text-gray-700 text-lg mb-4">Tipo: {{ type_name }}</p>
            <p class="text-gray-700 text-lg mb-4">Estado: {{ state }}</p>
            <div class="flex px-6 py-4 items-center justify-between">
                <Tooltip :text="state === 'running' ? 'detener máquina': state === 'stopped' ? 'iniciar máquina' : ''">
                    <img class="w-12 h-12 hover:scale-110 hover:cursor-pointer"  :src="state === 'running' ? 'images/stop.png' : state === 'stopped' ? 'images/start.png' : 'images/loading.webp'" alt="" @click="handleMv(state)">
                </Tooltip>
                <Tooltip text="eliminar máquina">
                    <img class="w-12 h-12 hover:scale-110 hover:cursor-pointer" :src="'images/delete.png'" alt="" @click="deleteMv">
                </Tooltip>
            </div>
        </div>
        <div class="flex justify-center">
            <Button v-if="state == 'running'" class="w-8/12" @click="enterVm">Acceder</Button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useMvStore } from '../../stores/mvStore'
    import { useAuthStore } from '../../stores/authStore'
    import { useNovncStore } from '../../stores/novncStore'
    import router from '../../router/index'
    import Button from './Button.vue'
    import Tooltip from './Tooltip.vue'

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
        else{
            connectMv(status)
        }
        
    }

    const connectMv = async (status, win = null) =>{
        if (status == "stopped"){
            await mvStore.startVm(props.name)

            websocketUrl.value = await novncStore.connectNovnc(props.name,  authStore.current_user?.id)
            const routerData = router.resolve({ name: 'WindowMv', params: { websocketUrl: websocketUrl.value }, query: {name: props.name + '-' + props.type_name} })
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
        const routerData = router.resolve({ name: 'WindowMv', params: { websocketUrl: websocketUrl.value }, query: {name: props.name + '-' + props.type_name}  })
        win.location = routerData.href
    }

    const deleteMv = async () => {
        await mvStore.destroyVm(props.name)
    }

</script>
