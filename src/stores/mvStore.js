import { defineStore } from 'pinia'
import { ref } from 'vue'
import { mvService } from '../services/mvService'

export const useMvStore = defineStore('mv', () => {
    const mvs = ref([])
    const allMvs = ref([])
    const mv = ref(null)
    const loading = ref(false)
    const provisionLoading = ref(false)
    const error = ref(null)

    const socket = ref(null)
    const isConnected = ref(false)

    const connectWebSocket = (url) => {
        if (socket.value) {
            return;
        }

        const ws = new WebSocket(url);

        ws.onopen = () => {
            socket.value = ws;
            isConnected.value = true;
        };

        ws.onmessage = (event) => {
            const update = JSON.parse(event.data);
            const index = mvs.value.findIndex(vm => vm.name === update.vm_name)
            if (index !== -1) mvs.value[index].state = update.event

        };

        ws.onclose = () => {
            isConnected.value = false;
            socket.value = null;            
        };

        ws.onerror = (err) => {
            console.error("WebSocket Error:", err);
        };
    }

    const provisionVm = async (userId, vmType) => {
        provisionLoading.value = true
        error.value = null

        try {
            const result = await mvService.provisionVm(userId, vmType)
            mvs.value.push(result)
            return result
        } catch (err) {
            error.value = err.message
        } finally {
            provisionLoading.value = false
        }
    }

    const startVm = async (vm_name) => {
        loading.value = true
        error.value = null

        try {
            const result = await mvService.startVm(vm_name)
            const index = mvs.value.findIndex(vm => vm.name === vm_name)

            mvs.value[index] = { ...result }
            return true
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    const stopVm = async (vm_name) => {
        loading.value = true
        error.value = null

        try {
            const result = await mvService.stopVm(vm_name)
            const index = mvs.value.findIndex(vm => vm.name === vm_name)

            mvs.value[index] = { ...result }
            return true
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    const destroyVm = async (vm_name) => {
        loading.value = true
        error.value = null 

        try {
            await mvService.destroyVm(vm_name)
            const index = mvs.value.findIndex(vm => vm.name === vm_name)

            if ( index !== -1) {
                mvs.value.splice(index, 1)
            }

            return true
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    const getVmsUser = async (userId) => {
        loading.value = true
        error.value = null

        try {
            mvs.value = await mvService.getVmsUser(userId)
        } catch (error) {
            error.value = error.message
        } finally {
            loading.value = false
        }
    }

    const getAllVms = async () => {
        loading.value = true
        error.value = null

        try {
            allMvs.value = await mvService.getAllVms()
        } catch (error) {
            error.value = error.message
        } finally {
            loading.value = false
        }
    }

    const getInfoVm = async (vmName) => {
        loading.value = true
        error.value = null 

        try {
            const info = await mvService.getInfoVm(vmName)
            return info
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    const shutdownVmsUser = async (userId) => {
        loading.value = true
        error.value = null

        try {
            await mvService.shutdownVmUser(userId)
        } catch (error) {
            error.value = error.message
        } finally {
            loading.value = false
        }
    }

    return {
        mvs,
        allMvs,
        mv,
        connectWebSocket,
        provisionVm,
        startVm,
        stopVm,
        destroyVm,
        getVmsUser,
        getAllVms,
        getInfoVm,
        shutdownVmsUser,
        loading,
        provisionLoading,
        error
    }
})