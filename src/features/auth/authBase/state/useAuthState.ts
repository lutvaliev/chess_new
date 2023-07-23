import constate from 'constate'
import { useLocalStorage } from 'react-use'

const UseAuthState = () => {
  const [authData, setAuthData, removeAuthData] = useLocalStorage<any>('user')
  return {
    authData,
    setAuthData,
    removeAuthData
  }
}

export const [AuthProvider, useAuthContext] = constate(UseAuthState)
