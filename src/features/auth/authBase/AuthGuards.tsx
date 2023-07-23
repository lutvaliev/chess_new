import { Navigate } from 'react-router-dom'
import React, { ReactNode } from 'react'
import { useAuthContext } from './index'

type TRequireAuth = {
  children: ReactNode
}

const AuthGuard = ({ children }: TRequireAuth) => {
  const { authData } = useAuthContext()
  // return authData?.accessToken ? children : <Navigate to="/login" />
  return <Navigate to="/login" />
}

export default AuthGuard
