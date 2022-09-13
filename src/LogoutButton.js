import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./LogoutButton.css"
function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button onClick={() => {
      logout({ returnTo: window.location.origin });
    }} className="logout">Log out</button>
  );
}

export default LogoutButton;