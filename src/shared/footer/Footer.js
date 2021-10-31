import React from 'react';
import { Card} from 'react-bootstrap';
import './Footer.css';
import footer from '../../Banner/logo/logo.png';


const Footer = () => {
    return (
        <div className="col-lg-12 col-md-8 col-sm-6">
            <Card className="bg-dark" sticky="buttom" >
  <Card.Header className="footer-font text-center ">
info@wheretostay.na ,Tel: + 264 81 886 5788</Card.Header>
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
   <div className="footer-details">
   <div>
   <ul className="footer-font-a ">
    <li>  Tourist destinations</li>
    <li>Things to Do</li>
    <li>Traveller Information</li>
    <li>About Us</li>
    <li>Blog</li>
    </ul>
   </div>

   <div>
   <ul className="footer-font-a ">
    <li> Resorts in Sylhet</li>
    <li>Business Hotels in Sylhet</li>
    <li>Mazar Hotels in Sylhet</li>
    <li>City Hotels in Sylhet</li>
    </ul>
   </div>
   <div>
     <img className="footer-img" src={footer} alt="" />
   </div>
   </div>
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">Copyright© 2012-2021. Tubac Arizona, Tubac Chamber of Commerce. All Rights Reserved.</Card.Footer>
</Card>
</div>
    );
};

export default Footer;