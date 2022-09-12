import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class Services extends Component {
  render() {
    return (
      <>
     
        <Container className=" ms-auto,  mx-5% pr-20">
        <Row><Col md={'4'}>
          <h1>About my Services</h1>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quam modi commodi beatae ratione, nam optio ea labore praesentium culpa, corporis aperiam,  consectetur labore doloremque ullam eligendi expedita modi iste fugit.</p>
            </Col></Row>
           
        <Row><Col md={'5'}>
          <h1>About my Services</h1>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quam modi commodi beatae ratione, nam optio ea labore praesentium culpa, corporis aperiam,  consectetur labore doloremque ullam eligendi expedita modi iste fugit.</p>
          
            </Col></Row>
           
        </Container>
      </>
    );
  }
}

export default Services;
