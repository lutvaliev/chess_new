import axios from 'axios'

export const apiClient = axios.create({
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'get',
  timeout: 10000000
})
