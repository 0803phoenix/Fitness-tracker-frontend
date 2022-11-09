import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from 'react-router-bootstrap';
// import Button from 'react-bootstrap/Button';

const NavBar = (props) => {
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
        <button type="button" className="btn btn-outline-dark float-right">Get Started</button>
    </Navbar>
  );
};
// const Main = (props) => {
//   return (
//     <Container className="mt-4">
//       <Switch>
//         <Route exact path="/stuff" component={Stuff} />
//         <Route exact path="/contact" component={Contact} />
//         <Route path="/class" component={Class} />
//         <Route path="/" component={Home} />
//       </Switch>
//     </Container>
//   );
// };

// function NavBar() {
//     return (
//         <Navbar inverse collapseOnSelect>
//             <Navbar.Header>
//                 <Navbar.Brand>
//                     <a href="#brand">React-Bootstrap</a>
//                 </Navbar.Brand>
//                 <Navbar.Toggle />
//             </Navbar.Header>
//             <Navbar.Collapse>
//                 <Nav>
//                     <NavItem eventKey={1} href="#">
//                         Link
//                     </NavItem>
//                     <NavItem eventKey={2} href="#">
//                         Link
//                     </NavItem>
//                 </Nav>
//                 <Nav pullRight>
//                     <NavItem eventKey={1} href="#">
//                         Link Right
//                     </NavItem>
//                     <NavItem eventKey={2} href="#">
//                         Link Right
//                     </NavItem>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     )
// }

export default NavBar;
