import { instance } from "./api";

export const userApi = {
    async fetchProfile() {
        return instance.post('/auth/me')
            .then(response => {
                return response.data;
            }).catch(error => {
                return error?.response?.data;
            });
    },
};