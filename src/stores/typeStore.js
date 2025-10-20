import { defineStore } from 'pinia'
import { ref } from 'vue'
import { typeService } from '../services/typeService'

export const useTypeStore = defineStore('type', () => {
    const types = ref([])
    const loading = ref(false)
    const error = ref(null)

    const getAllTypes = async () => {
        loading.value = true
        error.value = null

        try {
            types.value = await typeService.getAllTypes()
        } catch (error) {
            error.value = error.message
        } finally {
            loading.value = false
        }
    }

    return {
        types,
        getAllTypes
    }
})