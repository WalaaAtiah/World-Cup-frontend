import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Header.css"
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import logo from "./logo.png"

class Header extends React.Component {
  render() {
    const { isAuthenticated , user } = this.props.auth0;

    return (
      <Navbar collapseOnSelect expand="lg" className='Header' >
        <img className="logo" src={logo}/>
        <section className='Header-nav'>
        <NavItem><Link to="/" className="navlink">Home</Link></NavItem>
        <NavItem><Link to="/About" className="navlink">About</Link></NavItem>
        <NavItem><Link to="/comment" className="navlink">Commentators</Link></NavItem>

        {isAuthenticated&&<NavItem><Link to="/Hotels" className="navlink" >Hotels</Link></NavItem>}
        {isAuthenticated&&<NavItem><Link to="/Profile" className="navlink" >Profile</Link></NavItem>}

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