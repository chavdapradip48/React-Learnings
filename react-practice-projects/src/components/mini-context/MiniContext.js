import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import { Login } from './Login'
import Profile from './Profile'
import './cotext.css'

export const MiniContext = () => {
  return (
    <UserContextProvider>
        <div className="mini-context">
            <Login/>
            <Profile/>
        </div>
    </UserContextProvider>
  )
}
