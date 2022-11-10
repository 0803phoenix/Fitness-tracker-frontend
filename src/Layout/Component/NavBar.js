import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from 'react-router-bootstrap';
// import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import Register from "../../Authentication/Component/Register";


const NavBar = (props) => {
  const navigate = useNavigate();
  return (
    <Navbar bg="transparent" expand="lg" variant="light">
      <LinkContainer to={"/"}>
        <Navbar.Brand>Fitness Tracker</Navbar.Brand>
      </LinkContainer>
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
        <button type="button" 
        className="btn btn-outline-dark float-right" 
        onClick={()=>navigate('/register')}>Get Started</button>
        {/* <button type="button" 
        className="btn btn-outline-dark float-right" 
        onClick={()=>{<Register/>}}>Get Started</button> */}
    </Navbar>
  );
};

export default NavBar;
