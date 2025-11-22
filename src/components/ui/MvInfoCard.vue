<template>
    <div class="border border-gray-300 mx-5 my-2 px-7 rounded-2xl shadow-xl min-w-90 h-70 flex justify-center">
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

</script>