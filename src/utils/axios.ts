import axios from 'axios'

const backend = axios.create({
  baseURL: 'https://firstleads-dev.azurewebsites.net',
})

export default backend
