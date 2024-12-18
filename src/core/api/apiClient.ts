import axios from 'axios'

const getTokenFromQuery = (): string => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('apiToken') || 'fe973d1e-3c60-4c18-bb78-8f9e8ef3fa21'
//   return urlParams.get('apiToken') || 'd0962240-70a6-4037-b0f1-562d9eb519b6'
}

export const apiClient = axios.create({
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${getTokenFromQuery()}`
  },
  method: 'get',
  timeout: 10000000
})
