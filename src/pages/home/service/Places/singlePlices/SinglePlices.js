import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './SinglePlaces.css';

const SinglePlices = ({place}) => {
    const {Places,Price,url,Description}= place;
    return (

        <div className="places col-lg-4 col-md-6 col-sm-12">

 <Card className="card-places" style={{ width: '20rem' }}>
  <Card.Img className="image" variant="top" src={url} />
  <Card.Body>
    <Card.Title>Name :{Places}</Card.Title>
    <Card.Text className="details">
    Description :{Description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Price: {Price}</ListGroupItem>
</ListGroup>
</Card>
 </div>
    );
};

export default SinglePlices;

