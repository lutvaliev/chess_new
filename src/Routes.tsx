import React from 'react'
import { BrowserRouter, Navigate, Route, Routes as RouterRoutes } from 'react-router-dom'
import { MainLayout } from './layouts/mainLayout'
import Login from './features/auth/login/components/Login/Login'

import { ApartmentView } from './features/apartment/ApartmentView'

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Navigate to="/apartment" />}/>
        <Route index element={<ApartmentView/>}/>
      </Route>
      <Route path="login" element={<Login/>}/>
    </RouterRoutes>
  </BrowserRouter>
)

export default Routes
