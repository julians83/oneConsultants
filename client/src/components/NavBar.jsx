import React from 'react'
import Container from 'react-bootstrap/Container';
import '../styles/navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'

export default function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" className="link">OneConsultants</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto m-lg-0">
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/personal" className="link">Datos Personales</NavLink>
            <NavLink to="/academic" className="link">Datos Académicos</NavLink>
            <NavLink to="/summary" className="link">Summary</NavLink>
            <NavLink to="/tableregister" className="link">Registros</NavLink>
          </Nav>
      </Container>
    </Navbar>
  );
}
