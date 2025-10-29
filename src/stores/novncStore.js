import { defineStore } from 'pinia'
import { ref } from 'vue'

import { noVncService } from '../services/novncService'

export const useNovncStore = defineStore('novnc', () => {
    const loading = ref(false)
    const error = ref(null)

    const connectNovnc = async ( vm_name, user_id ) => {
        loading.value = true
        error.value = null
        try {
            const response = await noVncService.connectToVnc( vm_name, user_id )
            return response.websocket_url
        } catch (error) {
            error.value = error
        }
        finally {
            loading.value = false
        }
    }

    return {
        loading,
        error,
        connectNovnc
    }
})