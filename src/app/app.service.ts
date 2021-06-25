import axios from 'axios';
import { API_BASE_URL } from './app.config';

/**
 * HTTP 客户端
 */
 const apiHttpClient = axios.create({
 // baseURL: 'http://localhost:3000',
 baseURL:API_BASE_URL
});

export {axios, apiHttpClient};