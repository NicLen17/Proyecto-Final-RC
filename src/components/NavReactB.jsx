import {Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavReactB.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function NavReactB() {
    return (
        <Navbar bg="light" expand="lg" className="d-flex navbar fixed-top">
        <Navbar.Brand href="#home"><img className="img-logo" src="https://www.logaster.com.es/blog/wp-content/uploads/sites/4/2019/03/0106_t_phone-pixels-logo_2.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mr-auto linknav">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Celulares" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Samsung</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Motorola</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Iphone</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Huawei</NavDropdown.Item>          
      </NavDropdown>
            <Nav.Link href="#link">Sobre nosotros</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <Nav.Link href="#link">Log In</Nav.Link>
            <Nav.Link href="#link">Registrarse</Nav.Link>
          </Nav>
            </Navbar.Collapse>
            <Nav className="">
          <a className="me-5" href=""><FontAwesomeIcon icon={faShoppingCart} style={{ color: '', fontSize: '2.6em'}} /></a>
          </Nav>
      </Navbar>
    );
}