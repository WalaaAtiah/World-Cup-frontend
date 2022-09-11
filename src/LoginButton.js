import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <button onClick={loginWithRedirect} style={{display: 'flex', 
      background:' whitesmoke',
      color:'rgb(48, 8, 19)',
      borderRadius: '30px',width:"100px"}}>Log in</button>
  );
}

export default LoginButton;