import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
   const {user,logOut}=useAuth()
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="#home">Genius Car Mechanic</Navbar.Brand>
    
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink}  to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink}  to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink}  to="/home#experts">Experts</Nav.Link>

     {user?.email?
     <Button onClick={logOut} variant="light">log out</Button>:
      <Nav.Link as={Link}  to="/login">Login</Nav.Link>
        }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>


    
   
    </Container>
  </Navbar>
  
        </div>
    );
};

export default Header;<h4>thsi is header</h4>