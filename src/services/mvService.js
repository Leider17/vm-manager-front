import { http } from "./apiClient"


const apiUrl = "/vm"

export const mvService = {
    async provisionVm(userId, vmType) {
        const data = { UserId: userId, vmType: vmType }
        return http.post(`${apiUrl}/provision`, data)
    },

    async startVm(vm_name) {
        const data = { vm_name }
        return http.post(`${apiUrl}/start`, data)
    },

    async stopVm(vm_name) {
        const data = { vm_name }
        return http.post(`${apiUrl}/stop`, data)
    },

    async destroyVm(vm_name) {
        const data = { vm_name }
        return http.post(`${apiUrl}/destroy`, data)
    },

    async getVmsUser (userId) {
        return http.get(`${apiUrl}/${userId}`)
    },

    async getAllVms () {
        return http.get(`${apiUrl}/all`)
    },

    async getInfoVm (vm_name) {
        return http.get(`${apiUrl}/${vm_name}`)
    },

    async shutdownVmUser (userId){
        return http.post(`${apiUrl}/shutdown/all/${userId}`)
    },

    async shutdownVmAll (){
        return http.post(`${apiUrl}/shutdown/all`)
    }
}