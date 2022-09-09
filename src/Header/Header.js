import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Header.css"
import { withAuth0 } from '@auth0/auth0-react';

import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <Navbar collapseOnSelect expand="lg"  >
        <Navbar.Brand><h1>World_Cup_Application</h1></Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
        {isAuthenticated&&<NavItem><Link to="/Profile" className="nav-link" >Profile</Link></NavItem>}

        <NavItem><LoginButton/></NavItem>
        <NavItem><LogoutButton/></NavItem>

      </Navbar>
    )
  }
}

export default withAuth0 (Header)