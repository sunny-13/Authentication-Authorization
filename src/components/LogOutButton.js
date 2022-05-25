import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function LogOutButton() {
    const { logout, isAuthenticated } = useAuth0();
  return (
      isAuthenticated && 
    (<button onClick={()=> logout()}>
        LogOut
    </button>)
  )
}

export default LogOutButton