import React from 'react';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';
import img5 from './images/img5.jpeg';
import {Row, Col, Container} from 'react-bootstrap';


 export default function Status(){
    return(
        <div className='section3'><br/><br />
        <center>
            <h1> Our Relation Statuses</h1><br />
            <Container>
  
  <Row>
    <Col> <img className='img3' src={img3}/> </Col>
    <Col> <img className='img4' src={img4} /></Col>
    <Col> <img className='img5' src={img5} /></Col>
  </Row>
</Container>

<h2>OATH</h2>
<p style={{margin: 50}}> Bros before hoes, never leave a bro hangin' and thy shall always tell when thy had sex. Understood? Should be available whenever thy need and thy clear all the doubts under the ability.Understood? Whenever she calls to visit her college, must listen and make plans for the same at its earliest. Understood?</p>
<br/><br/>
<h4>Happy Birthday!</h4> <br />
           
           
            </center>
        </div>
    );
}