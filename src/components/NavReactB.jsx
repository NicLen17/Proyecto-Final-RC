import React from 'react'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavReactB.css";

export default function NavReactB() {
  return (
    <Navbar bg="light" expand="lg" className="d-flex m navbar fixed-top">
      <Navbar.Brand href="#home">
        <img
          className="img-logo"
          src="https://www.logaster.com.es/blog/wp-content/uploads/sites/4/2019/03/0106_t_phone-pixels-logo_2.png"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="mr-auto linknav">
          <Nav.Link href="/" className="efecto-nav">
            Inicio
          </Nav.Link>
          <Nav.Link
            href="productos"
            activeClassName="active"
            className="efecto-nav"
          >
            Productos
          </Nav.Link>
          <Nav.Link href="contacto" className="efecto-nav">
            Contacto
          </Nav.Link>
          <Nav.Link href="login" className="efecto-nav">
            Log In
          </Nav.Link>
          <Nav.Link href="register" className="efecto-nav">
            Registrarse
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="">
        <Nav.Link href="perfil" className="contenedor-icon">
          <img src="https://icongr.am/fontawesome/user.svg?size=35&color=currentColor" />{" "}
        </Nav.Link>
        <Nav.Link className="contenedor-icon">
          <img src="https://icongr.am/material/cart.svg?size=35&color=currentColor" />{" "}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
