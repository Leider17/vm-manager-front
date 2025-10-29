import { API_URL, handleResponse } from "./api"


const authApiUrl = `${API_URL}/novnc`


export const noVncService = {

    async connectToVnc ( vm_name, user_id ) {
        const response = await fetch(`${authApiUrl}/connect`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ vm_name: vm_name, user_id: parseInt(user_id)  }),
        })
        return handleResponse(response)
    }
}