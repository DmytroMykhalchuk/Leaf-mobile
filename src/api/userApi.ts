import { updateProfile } from "../store/auth/authReducer";
import { UpdateProfileType } from "../store/auth/authTypes";
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

    async updateProfile(user: UpdateProfileType) {
        const formData = new FormData();

        const picture = user.avatar
            ? {
                type: user.avatar.mime,
                uri: user.avatar.path,
                name: 'avatar.jpg',
            }
            : null;
        picture && formData.append('picture', picture);

        formData.append('nickname', user.nickname);
        formData.append('is_email_notify', +user.isEmailNotify);
        formData.append('country', user.country);
        formData.append('role', user.role);

        return instance.post('profile/update', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(response => {
            return response.data;
        }).catch(error => {
            console.error(error);
            return error?.response?.data;
        })
    },

    async changeEmailRequest(email: string) {
        return instance.post('/profile/change-email-request', { email })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error(error);
                return error?.response?.data;
            });
    },

    async confirmChangeEmailCode(code: string) {
        return instance.post('/profile/confirm-email-changing', { code })
            .then(response => {
                return response.data;
            }).catch(error => {
                console.log(error);
                return error?.response?.data;
            });
    },
};