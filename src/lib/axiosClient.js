// lib/axiosClient.ts
import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://staging.wavetec.com/wp-json/headless/v1', // ✅ Base URL
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default axiosClient;
