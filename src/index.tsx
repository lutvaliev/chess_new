import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './core/api/queryClient'
import Routes from './Routes'
import { AuthProvider } from './features/auth/authBase'
import './core/styles/_reset.scss'

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  </QueryClientProvider>
)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
