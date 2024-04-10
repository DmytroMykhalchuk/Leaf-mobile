import { CreateAccountType } from "../store/auth/authTypes";
import { instance } from "./api";

export const authApi = {
    async createAccount(user: CreateAccountType, provider?: { id: string | null, name: string }) {
        const formData = new FormData();

        const picture = {
            type: user.avatar.mime,
            uri: user.avatar.path,
            name: 'avatar.jpg',
        };

        formData.append('nickname', user.nickname);
        formData.append('email', user.email);
        formData.append('is_email_notify', +user.isEmailNotify);
        formData.append('picture', picture);

        if (provider?.id) {
            formData.append('provider[id]', provider?.id);
            formData.append('provider[name]', provider?.name);
        }

        return instance.post('/authorization/init-account', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then(response => {
            return response.data;
        }).catch(error => {
            console.error(error);
            return error?.response?.data;
        });
    },

    async requestEmailVerificationCode(email: string) {
        return instance.post('/authorization/request-email-code', { email })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error(error);
                return error?.response?.data;
            });
    },

    async verifyEmailCode(email: string, code: number) {
        return instance.post('/authorization/confirm-email-code', { email, code })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error(error);
                return error?.response?.data;
            });
    },

    async loginByGoogle(email: string, id: string) {
        return instance.post('/authorization/login-by-google', { email, google_id: id })
            .then(response => {
                return response.data;
            }).catch(error => {
                console.error(error);
                return error?.response?.data;
            });
    },

    async confirmEmailByProvider(email: string, providerId: string, providerName: string) {
        return instance.post('/authorization/provider-email-confirmation',
            {
                provider_id: providerId,
                provider_name: providerName,
                email,
            }).then(response => {
                return response.data
            }).catch(error => {
                console.error(error);
                return error?.response?.data;
            });
    },
};