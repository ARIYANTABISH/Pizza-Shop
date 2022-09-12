import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Navbar2 = () => {
  return (
    <Container>

<Navbar bg=" light" variant="light">
        <Container>
        <Image src="./pizzlogo.jpg" alt="logo" to='/' style={{ width: "10%" }} />
           
          <Nav className="ms-auto">
          <LinkContainer to="/Login" activeClassName>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
           
            <LinkContainer to="/Register" activeClassName>
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Cart" activeClassName>
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
             
          </Nav>
        </Container>
      </Navbar>

    </Container>
  )
}

export default Navbar2