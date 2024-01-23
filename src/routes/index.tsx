import React from 'react'
import { AppRoutes } from './appRoutes'
import { AuthRoutes } from './AuthRoutes'

export const Routes = () => {
  const userLogged = true
  return userLogged ? <AppRoutes /> : <AuthRoutes />
}
