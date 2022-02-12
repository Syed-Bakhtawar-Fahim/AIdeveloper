import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import web from '../Images/s1.jpg'
import './Service.css'
import ServiceCard from './ServiceCard';
import Sdata from './Sdata';
import './Service.css'


function Services() {
  return (
    <React.Fragment>
      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <Container>
        <Row>
          <Col  className='serviceSection'>
            {
              Sdata.map((items, i) => {

                return <ServiceCard key={i}

                  imgsrc={items.imgSrc}
                  title={items.title}

                />
              })
            }
          </Col>
        </Row>
      </Container>



    </React.Fragment>
  );
}

export default Services;

