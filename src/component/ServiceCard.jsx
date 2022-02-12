import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import web from '../Images/s1.jpg'
import './Service.css'


function ServiceCard(props) {
  return (
    <React.Fragment>

    
      <Container>
        <Row>
          <Col sm className='serviceSection'>
            <Card  style={{ width: '20rem' }} className='resCard'>
              <Card.Img variant="top" src={props.imgsrc} className='allImg'/>
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <div className='own-btn-get-started'>Learn More!</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ServiceCard;