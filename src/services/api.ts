import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ignews2-dusky.vercel.app/api/'
});
