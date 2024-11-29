import axios from 'axios'

export const apiClient = axios.create({
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'd0962240-70a6-4037-b0f1-562d9eb519b6'
  },
  method: 'get',
  timeout: 10000000
})
