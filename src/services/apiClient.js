    import { API_URL, handleResponse } from "./api";
    import router from "../routes/router";

    async function apiClient ( endpoint, options) {
        const accessToken = localStorage.getItem('access_token')
        const tokenType = localStorage.getItem('token_type') || 'Bearer'

        const headers = { ...(options?.headers )}

        if (accessToken) {
            headers['Authorization'] = `${tokenType} ${accessToken}`
        } else {
            router.push('/login')
            throw new Error("access token not found")
        }

        if (options?.body && !(options.body instanceof FormData) && !headers['Content-Type'])  headers['Content-Type'] = 'application/json'

        const config = {...options, headers: headers,}
        const response = await fetch(`${API_URL}${endpoint}`, config)

        return handleResponse(response)
    }

    export const http = {
        get: (endpoint , options) => apiClient (endpoint, { ...options, method: 'GET' }),
        post: (endpoint, body, options) => apiClient(endpoint, { ...options, method: 'POST', body: body instanceof FormData ? body : JSON.stringify(body) }),
        put: (endpoint, body, options) => apiClient(endpoint, { ...options, method: 'PUT', body: body instanceof FormData ? body : JSON.stringify(body) }),
        patch: (endpoint, body, options) => apiClient(endpoint, { ...options, method: 'PATCH', body: body instanceof FormData ? body : JSON.stringify(body) }),
        delete: (endpoint, options) => apiClient(endpoint, { ...options, method: 'DELETE' }),
    }