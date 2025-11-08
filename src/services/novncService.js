import { http } from "./apiClient"


const apiUrl = `/novnc`


export const noVncService = {
    async connectToVnc ( vm_name, user_id ) {
        const data = { vm_name,user_id }
        return http.post(`${apiUrl}/connect`, data)
    }
        
}