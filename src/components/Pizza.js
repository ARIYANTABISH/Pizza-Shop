import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: "18rem", marginTop: "30px" }}>
        <Card.Img variant="top" src={pizza.image} style={{ cursor:"pointer"}}
        onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <hr />
            <Row>
              <Col md={6}>
                <h6>Varients</h6>

                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => (
                    <option>{varient}</option>
                  ))}
                </select>
              </Col>

              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Price : {pizza.prices[0][varient] * quantity}/-RS</Col>
            <Col md={6}>
               
              <Button className="bg-warning text-white">Add to cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

{/* modal*/}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {pizza.name} </Modal.Title>
        </Modal.Header>
        
        <Modal.Body> 
          <div>
           <Card.Img variant="top" src={pizza.image} style={{ cursor:"pointer"}}/>
           </div>
           <div>
             <h4>Description:</h4>
            <h5>{pizza.description}</h5>
           </div>
         </Modal.Body>
        
      </Modal>

    </div>
  )
}
export default Pizza;