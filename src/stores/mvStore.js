import { defineStore } from 'pinia'
import { ref } from 'vue'
import { mvService } from '../services/mvService'

export const useMvStore = defineStore('mv', () => {
    const mvs = ref([])
    const mv = ref(null)
    const loading = ref(false)
    const error = ref(null)

    const provisionVm = async (userId, vmType) => {
        loading.value = true
        error.value = null

        try {
            const result = await mvService.provisionVm(userId, vmType)
            mvs.value.push(result)
            return result
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    const startVm = async (vm_name) => {
        loading.value = true
        error.value = null

        try {
            const result = await mvService.startVm(vm_name)
            const index = mvs.value.findIndex(vm => vm.name === vm_name)

            mvs.value[index] = { ...result.vm }
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

            mvs.value[index] = { ...result.vm }
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
            const allVms = await mvService.getAllVms()
            return allVms
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
        } catch (error) {
            error.value = error.message
        } finally {
            loading.value = false
        }
    }

    return {
        mvs,
        mv,
        provisionVm,
        startVm,
        stopVm,
        destroyVm,
        getVmsUser,
        getAllVms,
        getInfoVm,
        loading,
        error
    }
})