import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Footer.css";
import imagen from "../img/imagen.png";


function Footer() {
  return (
    <div className="footer d-flex flex-wrap justify-content-between ps-3 pt-4">
      <div className="d-flex flex-wrap contenedorli">
        <div className="links text-black pe-5">
          <h5>Phone Pixels</h5>
          <ul className="pt-2 pb-2">
            <Nav.Link href="#link" className="efecto-nav">
              Sobre nosotros
            </Nav.Link>
            <Nav.Link href="#link" className="efecto-nav">
              Contacto
            </Nav.Link>
            <Nav.Link href="#link" className="efecto-nav">
              Celulares
            </Nav.Link>
            <Nav.Link href="#link" className="efecto-nav">
              Registrarse
            </Nav.Link>
            <Nav.Link href="#link" className="efecto-nav">
              Log In
            </Nav.Link>
          </ul>
        </div>
        <div className="marcas text-black pe-2">
          <h5 className="">Marcas</h5>
          <ul className="ps-0 pt-2 pb-2">
            <Nav.Link href="#link" className="efecto-nav">
              Samsung
            </Nav.Link>
            <Nav.Link href="#link" className="efecto-nav">
              Motorola
            </Nav.Link>
            <Nav.Link href="#link" className="efecto-nav">
              Apple
            </Nav.Link>
            <Nav.Link href="#link" className="efecto-nav">
              Xiaomi
            </Nav.Link>
            <Nav.Link href="#link" className="efecto-nav">
              Nokia
            </Nav.Link>
          </ul>
        </div>
        <div className="marcas text-black ps-5">
          <h5 className="">Top Celulares</h5>
          <ul className="ps-0 pt-2 pb-2">
            <Nav.Link href="#link" className="efecto-nav">
              Samsung S21
            </Nav.Link>
            <Nav.Link href="#link" className="efecto-nav">
              Motorola Razr
            </Nav.Link>
            <Nav.Link href="#link" className="efecto-nav">
              Iphone 11
            </Nav.Link>
            <Nav.Link href="#link" className="efecto-nav">
              Xiaomi MI 10
            </Nav.Link>
            <Nav.Link href="#link" className="efecto-nav">
              Samsung Fold
            </Nav.Link>
          </ul>
        </div>
      </div>
      <div className="datosEmpresa  d-flex flex-wrap text-black d-flex">
        <ul className=" ">
          <h5 className="pb-3 ms-0 text-start">
            {" "}
            <img
              src="https://icongr.am/material/copyright.svg?size=30&color=000000"
              alt=""
            />
            Phone Pixels
          </h5>
          <div className="d-flex mb-4">
            <img
              src="https://icongr.am/fontawesome/map-marker.svg?size=30&color=0d41fd"
              alt="Ubicacion"
            />
            <li className="ps-2">España 1450</li>
          </div>
          <div className="d-flex mb-4">
            <img
              src="https://icongr.am/fontawesome/whatsapp.svg?size=30&color=00f51d"
              alt="whatapps"
            />
            <li className="ps-2">3815401511</li>
          </div>
          <div className="d-flex ">
            <img
              src="https://icongr.am/fontawesome/clock-o.svg?size=30&color=currentColor"
              alt="clock"
            />
            <li className="ps-2 pe-2">Horarios: L a V de 9 a 16</li>
          </div>
        </ul>
      </div>
      <div className="mt-2 mapa">
        <p>Puedes encontrarnos en...</p>
          <a href="https:www.google.com/maps/place/Espa%C3%B1a+1450,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.8145095,-65.2180537,17z/data=!3m1!4b1!4m5!3m4!1s0x94225c4795c72827:0x5046b8948e56a325!8m2!3d-26.8145095!4d-65.215865">
            <img src={imagen} alt="ubicacion" style={{ height: "12em", borderRadius: "25px", maxWidth: "100%" }} />
          </a>
        </div>
      <div className="d-flex flex-column pe-3">
        <h5 className="text-black">Redes Sociales</h5>
        <div className="d-flex flex-column align-items-center">
          <Nav.Link>
            <img
              className="efecto-footer"
              src="https://icongr.am/devicon/facebook-original.svg?size=40&color=currentColor"
              alt="facebook"
            />
          </Nav.Link>
          <Nav.Link>
            <img
              className="efecto-footer"
              src="https://icongr.am/devicon/twitter-original.svg?size=40&color=currentColor"
              alt="twitter"
            />
          </Nav.Link>
          <Nav.Link>
            <img
              className="efecto-footer"
              src="https://icongr.am/material/instagram.svg?size=50&color=a64e93"
              alt="instagram"
            />
          </Nav.Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
