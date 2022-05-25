import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Authenticated() {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated &&
    (<div>
        <h2>FOR:  Authenticated</h2>
    </div>)
  )
}

export default Authenticated