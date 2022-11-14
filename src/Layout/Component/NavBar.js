import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
// import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
import Register from "../../Authentication/Component/Register";
import Modal from "react-bootstrap/Modal";
import Login from "../../Authentication/Component/Login";
import AdminLogin from "../../Authentication/Component/AdminLogin";

const NavBar = (props) => {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
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
      <button
        type="button"
        className="btn btn-outline-dark float-right mr-2"
        onClick={handleShow1}
      >
        Get Started
      </button>
      <Modal show={show1} onHide={handleClose1}>
        <Register />
      </Modal>

    </Navbar>
  );
};

export default NavBar;
