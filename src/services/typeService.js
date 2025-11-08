import { http } from "./apiClient";

const apiUrl = "/type"

export const typeService = {

    async getAllTypes () {
        return http.get(`${apiUrl}/all`);
    }
}