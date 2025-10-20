import { API_URL, handleResponse } from "./api"


const authApiUrl = `${API_URL}/type`

export const typeService = {

    async getAllTypes () {
        const response = await fetch (`${authApiUrl}/all`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        return handleResponse(response)
    }
}