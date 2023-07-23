import React from 'react'
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'
import Login from './features/auth/login/components/Login/Login'
import Chess from './features/chess/components/Chess/Chess'
import { MainLayout } from './layouts/mainLayout'

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Chess/>}/>
      </Route>
      <Route path="/" element={<MainLayout/>}>
        <Route path="login" element={<Login/>}/>
      </Route>
    </RouterRoutes>
  </BrowserRouter>
)

export default Routes
