import { REACT_NATIVE_API_URL } from '@env';
import axios, { AxiosResponse } from 'axios';
import { instance, removeAccessToken, saveAccessToken } from '../api/api';

export const baseUrl = REACT_NATIVE_API_URL;

const refreshInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export const refreshToken = async (error: any, token: string | null) => {

    const refreshThenFunction = async (responseRefreshToken: AxiosResponse<any, any>) => {
        const newToken = responseRefreshToken.data?.authorization?.token;
        console.log('Auth token ', newToken)

        if (newToken) {
            await saveAccessToken(newToken);
            error.config.headers.authorization = `Bearer ${newToken}`;

            return instance.request(error.config);
        };
    };

    const refreshErrorFunction = async (error: any) => {
        if (
            error?.response?.data.message === 'The token has been blacklisted'
            || error?.response?.data.message === 'Token has expired and can no longer be refreshed'
            || error?.response?.data.message === 'Token could not be parsed from the request.'
            || error?.response.data?.code === 500
        ) {
            await removeAccessToken();
            console.log('\x1b[31m%s\x1b[0m', 'interceptors response :', error?.response?.data)
            return Promise.reject(error);
        }
    };

    if (token) {
        return refreshInstance.post('/auth/refresh', {}, {
            headers: {
                'authorization': `Bearer ${token}`,
            },
        })
            .then(refreshThenFunction)
            .catch(refreshErrorFunction);
    }
};