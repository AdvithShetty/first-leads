import axios from 'axios'

const BASE_URL = 'https://firstleads-dev.azurewebsites.net'

const backend = axios.create({
  baseURL: BASE_URL,
})

export const backendWithAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default backend
