import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Header.css"
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

class Header extends React.Component {
  render() {
    const { isAuthenticated , user } = this.props.auth0;

    return (
      <Navbar collapseOnSelect expand="lg" className='Header' >
        <img className="logo" src="https://o.remove.bg/downloads/b72b6089-7eda-4188-accc-db48bb513295/download-removebg-preview-removebg-preview.png"/>
        <section className='Header-nav'>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/About" className="nav-link">About</Link></NavItem>
        {isAuthenticated&&<NavItem><Link to="/Profile" className="nav-link" >Profile</Link></NavItem>}
        </section>
        <section className="third_part">
        {isAuthenticated&&<img src={user.picture} className="userPic"/>}
        <NavItem><LoginButton/></NavItem>
        <NavItem><LogoutButton/></NavItem>
        </section>
      </Navbar>
    )
  }
}

export default withAuth0 (Header)