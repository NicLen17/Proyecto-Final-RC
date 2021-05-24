import {Nav, Navbar, Container } from 'react-bootstrap';
import './NavReactB.css';

export default function NavReactB() {
    return (
        <Navbar bg="light" expand="lg" className="d-flex">
        <Navbar.Brand href="#home"><img className="img-logo" src="https://www.logaster.com.es/blog/wp-content/uploads/sites/4/2019/03/0106_t_phone-pixels-logo_2.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mr-auto linknav">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Sobre nosotros</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <Nav.Link href="#link">Log In</Nav.Link>
            <Nav.Link href="#link">Registrarse</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}