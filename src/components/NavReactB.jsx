import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavReactB.css";

export default function NavReactB() {
  return (
    <Navbar bg="light" expand="lg" className="d-flex navbar fixed-top">
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
          <NavDropdown
            title="Celulares"
            id="basic-nav-dropdown"
            className="efecto-nav"
          >
            <NavDropdown.Item href="#action/3.1" className="efecto-nav">
              Samsung
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="efecto-nav">
              Motorola
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="efecto-nav">
              Iphone
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="efecto-nav">
              Huawei
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link" className="efecto-nav">
            Sobre nosotros
          </Nav.Link>
          <Nav.Link href="contacto" className="efecto-nav">
            Contacto
          </Nav.Link>
          <Nav.Link href="#link" className="efecto-nav">
            Log In
          </Nav.Link>
          <Nav.Link href="#link" className="efecto-nav">
            Registrarse
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="">
        <Nav.Link className="contenedor-icon">
          <img src="https://icongr.am/fontawesome/user.svg?size=35&color=currentColor" />{" "}
        </Nav.Link>
        <Nav.Link className="contenedor-icon">
          <img src="https://icongr.am/material/cart.svg?size=35&color=currentColor" />{" "}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
