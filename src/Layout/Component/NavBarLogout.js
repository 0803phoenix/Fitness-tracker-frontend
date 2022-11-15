import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from 'react-router-bootstrap';
import { useNavigate } from 'react-router';
const NavBarLogout = (props) => {
  const navigate = new useNavigate();
  const handleLogout =()=>{
    sessionStorage.removeItem("currentUser");
    navigate("/");
    window.location.reload();
  }
  const handleProfile =()=>{
    navigate("/userProfile");
    window.location.reload();
  }
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand>Fitness Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <LinkContainer exact to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <div className="mr-1">
          <button type="button" className="btn btn-outline-light float-right mx-2 " onClick={handleLogout}>Logout</button>
          <button type="button" className="btn btn-outline-success float-right " onClick={handleProfile}>Profile</button>
        </div>
      </Navbar>
    );
  };

export default NavBarLogout