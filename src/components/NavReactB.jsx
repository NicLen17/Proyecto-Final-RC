import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavReactB.css";

//extraemos el datos del usuario desde props
export default function NavReactB({
  userName,
  userCategory,
  logout,
}) {
  return (
    <Navbar bg="light" expand="lg" className="d-flex m navbar fixed-top">
      <Navbar.Brand>
        <img
          className="img-logo"
          src="https://www.logaster.com.es/blog/wp-content/uploads/sites/4/2019/03/0106_t_phone-pixels-logo_2.png"
          alt="imagen"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="mr-auto linknav">
          <Nav.Link to="/" exact as={NavLink} className="efecto-nav">
            Inicio
          </Nav.Link>
          <Nav.Link
            to="/productos"
            exact
            as={NavLink}
            activeClassName="active"
            className="efecto-nav"
          >
            Productos
          </Nav.Link>
          {userName && userCategory && (
            <Nav.Link href="admin" className="efecto-nav">
              Administracion
            </Nav.Link>
          )}
          <Nav.Link to="/contacto" exact as={NavLink} className="efecto-nav">
            Contacto
          </Nav.Link>

            <div className="iconosnav">
          {userName && (
          <Nav.Link href="perfil" className="contenedor-icon">
            <img
              src="https://icongr.am/fontawesome/user.svg?size=35&color=currentColor"
              alt="imagen"
            />{" "}
          </Nav.Link>
        )}

        {!userName && (
          <Nav.Link to="/login" exact as={NavLink} className="contenedor-icon">
            <img
              src="https://icongr.am/fontawesome/user.svg?size=35&color=currentColor"
              alt="imagen"
            />{" "}
          </Nav.Link>
        )}
        <Nav.Link
          to="/carrito"
          exact
          as={NavLink}
          className="contenedor-icon"
        >
          <img
            src="https://icongr.am/material/cart.svg?size=35&0a0a0a"
            alt="imagen"
          />{" "}
        </Nav.Link>
        {/* {carritoLleno > 0 && (
          <Nav.Link
            to="/carrito"
            exact
            as={NavLink}
            className="contenedor-icon"
          >
            <img
              src="https://icongr.am/material/cart.svg?size=35&color=06b711"
              alt="imagen"
            />{" "}
          </Nav.Link>
        )} */}

      {userName && (
        <h2 style={{ width: "150px", maxWidth: "100%" }} className="userbut">
          {userName}
        </h2>
      )}
      {/* muestra el nombre del usuario, con la codicion que si no está logueado no muestre nada */}

      {userName && (
        <Button className="userbut2" variant="userbut2" onClick={logout}>
          Cerrar Sesión
        </Button>
      )}
      </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
