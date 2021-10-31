import React from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Banner/logo/logo.png';
import useAuth from '../../hooks/UseAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';


const Header = () => {
  const  {user,logOut }= useAuth();
    return (
        <>
  <Navbar className="col-lg-12 col-md-8 col-sm-4" bg="dark"  variant="dark" sticky="top" collapseOnSelect expand="lg" >
    <Container>
    <Navbar.Brand href="#home"> <img className="logo" src={logo} alt="" /></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link className="font" as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link className="font" as={HashLink} to="/home#Services">Services</Nav.Link>
      <Nav.Link className="font" as={HashLink} to="/home#Allplices">Places To Stay</Nav.Link>
      <Nav.Link className="font" as={Link} to="/addNewPlaces">Add-Place</Nav.Link>
      <Nav.Link className="font" as={Link} to="/AboutUs">Contact-Us</Nav.Link>

      {user?.email ?
        <Button className="font" onClick={logOut} variant="light">logOut</Button>:
        <Nav.Link className="font" as={Link} to="/Login">Login</Nav.Link>}
      <Navbar.Text>
        Signed in as: <a href="#login"> {user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </>
    );
};

export default Header;
