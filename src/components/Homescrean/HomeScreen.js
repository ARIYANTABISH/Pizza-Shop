import React from 'react'
import 'react-bootstrap'
import AllPizza from '../Pizza-data'
import Container  from 'react-bootstrap/esm/Container';
import {Col, Row} from 'react-bootstrap'
import Pizza from '../Pizza'
const HomeScreen = () => {
 
  return (
    


  
    <>
    <Container>
    <Row>
       {AllPizza.map((pizza) =>(
<Col md={4}>
<Pizza pizza={pizza}/>

</Col>
       ))}
    </Row>



    </Container>
    </>
  )
}

export default HomeScreen
