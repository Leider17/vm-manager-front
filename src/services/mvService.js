import { API_URL, handleResponse } from "./api"


const authApiUrl = `${API_URL}/vm`

export const mvService = {
    async provisionVm(userId, vmType) {
        console.log(vmType)
        const response = await fetch(`${authApiUrl}/provision`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ UserId: userId, vmType: vmType }),
        })

        return handleResponse(response)
    },

    async startVm(vm_name) {
        const response = await fetch(`${authApiUrl}/start`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ vm_name }),
        })

        return handleResponse(response)
    },

    async stopVm(vm_name) {
        const response = await fetch(`${authApiUrl}/stop`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ vm_name }),
        })

        return handleResponse(response)
    },

    async destroyVm(vm_name) {
        const response = await fetch(`${authApiUrl}/destroy`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ vm_name }),
        })

        return handleResponse(response)
    },

    async getVmsUser (userId) {
        const response = await fetch(`${authApiUrl}/${userId}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        return handleResponse(response)
    },

    async getAllVms () {
        const response = await fecth (`${authApiUrl}/all`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        return handleResponse(response)
    },

    async getInfoVm (vm_name) {
        const response = await fecth (`${authApiUrl}/info/${vm_name}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        return handleResponse(response)
    }
}