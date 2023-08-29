import React, { useContext, useState } from 'react'
import Admin from './Admin'
import User from './User'
import Guset from './Guset'
import { GlobalContext } from './Context/context'
import { decodeToken } from 'react-jwt'

export const AppRoute = 'http://localhost:3000/'

const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guset
}

const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']

export default function App() {
  const { state, dispatch } = useContext(GlobalContext)

  const decodeUser = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const res = decodeToken(token)
      return res?.role
    }
  }

  const currentToken = decodeUser(state.token)
  const CurrentUser = getUserRole(currentToken)
  return <CurrentUser />
}

