import React, { Component} from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { AiTwotoneShop } from "react-icons/ai";
import { LinkContainer } from "react-router-bootstrap";
import { Image } from "react-bootstrap";

import Button from "react-bootstrap/Button";
export class TopBar extends Component {
  render() {
    const backChange =()=>{
  
    }
    return (
      <>
        <Navbar bg="primary" variant="dark" expand="lg" className="fixed-top">
          <Container>
            <Navbar.Brand href="/">
              <Image
                src="./logo.png"
                alt="logo"
                to="/"
                style={{ width: "40px" }}
              />
              Online Pizza Store <AiTwotoneShop className="bg-warning" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="ms-outo">
              <LinkContainer to="/" activeClassName>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Services" activeClassName>
                <Nav.Link>Services</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/About" activeClassName>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Contact" activeClassName>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>

          <Button variant="dark" onClick={backChange}>Dark</Button>
        </Navbar>
      </>
    );
  }
}

export default TopBar;
