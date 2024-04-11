import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { REACT_NATIVE_API_URL } from '@env';
import { refreshToken } from '../utils/apiInterceptors';

let savedToken = null as string | null;


export const baseUrl = REACT_NATIVE_API_URL;

export const refreshInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

let requestStartTime: any;

instance.interceptors.request.use(
  async (config) => {
    requestStartTime = performance.now();
    const token = await getTokenFromAsyncStorage();

    token || console.log('\x1b[31m%s\x1b[0m', 'token: ', token)
    console.log('\x1b[33;40m%s\x1b[0m', `[${new Date().toLocaleTimeString()}] Request Data:`, config.data);

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log('\x1b[31m%s\x1b[0m', `[${new Date().toLocaleTimeString()}] Request Error:`, error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const requestEndTime = performance.now();
    const requestDuration = requestEndTime - requestStartTime;

    console.log('\x1b[32;1m%s\x1b[0m', `[${new Date().toLocaleTimeString()}] ${Math.round(requestDuration)} ms Response Data:`, response.data);

    if (typeof response.data === 'string') {
      console.log('\x1b[31m%s\x1b[0m', 'String');
      return instance.request(response.config);
    }

    return response;
  },
  async (error) => {
    console.log('\x1b[31m%s\x1b[0m', `[${new Date().toLocaleTimeString()}] Response Error:`, error);

    if (error?.response?.status === 401) {
      const token = await getTokenFromAsyncStorage();

      const response = refreshToken(error, token);
      if (response)
        return response;

    } else if (error?.response?.data.message === 'The token has been blacklisted' || error?.response?.status === 401) {
      await removeAccessToken();
      console.log('\x1b[31m%s\x1b[0m', 'interceptors request error2 :', error)
      return Promise.reject(error);
    }
    console.log('\x1b[31m%s\x1b[0m', 'interceptors request error3 :', error?.response?.data)
    return Promise.reject(error);
  }
);

export const api = {

};

export const getTokenFromAsyncStorage = async () => {
  if (!savedToken) {
    savedToken = await AsyncStorage.getItem('@token');
  }
  return savedToken;
};

export const saveAccessToken = async (token: string) => {
  await AsyncStorage.setItem('@token', token);
  savedToken = token;
};

export const removeAccessToken = async () => {
  await AsyncStorage.removeItem('@token');
  savedToken = null;
};


