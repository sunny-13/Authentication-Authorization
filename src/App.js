import './App.css';
import LogInButton from './components/LogInButton'
import LogOutButton from './components/LogOutButton'
import Authenticated from './components/Authenticated'
import {useAuth0} from '@auth0/auth0-react'
import { useEffect } from 'react';

function App() {
  const { user , isAuthenticated } = useAuth0();
  // useEffect(()=>{
  //   isAuthenticated && console.log(user)
  // })
  
  return (
    <div className="App">
      <h1>PUBLIC : FOR EVERYONE</h1>
      <LogInButton />
      <Authenticated />
      <LogOutButton />
    </div>
  );
}

export default App;
