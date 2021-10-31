import React from 'react';
import { Card,Button,  } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {name,img,Description}=props.service
    return (
        <div className="services-container col-lg-12 col-md-8 col-sm-4">
<Card className="Card-services" style={{ width:'25rem'}}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text className="services-card">
    {Description}
    </Card.Text>
    <Button className="Button" variant="primary">Booking</Button>
  </Card.Body>
</Card>
 </div>
    );
};

export default Service;





