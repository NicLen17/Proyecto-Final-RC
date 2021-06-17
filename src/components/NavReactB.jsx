import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import "./NavReactB.css";


//extraemos el datos del usuario desde props
export default function NavReactB({ userName, logout }) {
  return (
    <Navbar bg="light" expand="lg" className="d-flex m navbar fixed-top">
      <Navbar.Brand href="#home">
        <img
          className="img-logo"
          src="https://www.logaster.com.es/blog/wp-content/uploads/sites/4/2019/03/0106_t_phone-pixels-logo_2.png" alt="logo empresa"
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
            activeclassname="active"
            className="efecto-nav"
          >
            Productos
          </Nav.Link>
          <Nav.Link href="contacto" className="efecto-nav">
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {userName && <h2 className="userbut">{userName}</h2>}
      {/* muestra el nombre del usuario, con la codicion que si no está logueado no muestre nada */}

      {userName && (
        <Button className="userbut2" variant="userbut2" onClick={logout}>
          Cerrar Sesión
        </Button>
      )}

      <Nav className="">
        {userName && (
          <Nav.Link href="perfil" className="contenedor-icon">
            <img src="https://icongr.am/fontawesome/user.svg?size=35&color=currentColor" alt="iconoperfil"/>{" "}
          </Nav.Link>
        )}

        {!userName && (
          <Nav.Link href="login" className="contenedor-icon">
            <img src="https://icongr.am/fontawesome/user.svg?size=35&color=currentColor" alt="iconologin"/>{" "}
          </Nav.Link>
        )}

        <Nav.Link className="contenedor-icon">
          <img src="https://icongr.am/material/cart.svg?size=35&color=currentColor" alt="icono"/>{" "}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
