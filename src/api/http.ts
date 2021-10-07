import axios, { AxiosInstance } from 'axios';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    'Accept-Version': 'v1',
  },
});

export { instance as http };
