import React from 'react';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagramSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import imagen from '../img/imagen.png'
function Footer() {
    return (
        <div className="footer d-flex justify-content-between ps-3 pt-4">
            <div className="d-flex contenedorli">
                <div className="links text-white pe-5" >
                    <h5>Enlances</h5>
                    <ul className="pt-2 pb-2">
                    <Nav.Link href="#link" className="efecto-nav" >Sobre nosotros</Nav.Link>
                    <Nav.Link href="#link" className="efecto-nav" >Contacto</Nav.Link>
                    <Nav.Link href="#link" className="efecto-nav" >Celulares</Nav.Link>
                    <Nav.Link href="#link" className="efecto-nav" >Registrarse</Nav.Link>
                    <Nav.Link href="#link" className="efecto-nav" >Log In</Nav.Link>
                    </ul>
                </div>
                <div className="marcas text-white pe-2">
                    <h5 className="">Marcas</h5>
                    <ul className="ps-0 pt-2 pb-2">
                    <Nav.Link href="#link" className="efecto-nav" >Samsung</Nav.Link>
                    <Nav.Link href="#link" className="efecto-nav" >Motorola</Nav.Link>
                    <Nav.Link href="#link" className="efecto-nav" >Apple</Nav.Link>
                    <Nav.Link href="#link" className="efecto-nav" >Xiaomi</Nav.Link>
                    <Nav.Link href="#link" className="efecto-nav" >Nokia</Nav.Link>
                                      </ul>
                </div>
                <div className="marcas text-white ps-5">
                    <h5 className="">Top Celulares</h5>
                    <ul className="ps-0 pt-2 pb-2">
                    <Nav.Link href="#link" className="efecto-nav" >Samsung S21</Nav.Link>
                    <Nav.Link href="#link" className="efecto-nav" >Motorola Razr</Nav.Link>
                    <Nav.Link href="#link" className="efecto-nav" >Iphone 11</Nav.Link>
                    <Nav.Link href="#link" className="efecto-nav" >Xiaomi MI 10</Nav.Link>
                    <Nav.Link href="#link" className="efecto-nav" >Samsung Fold</Nav.Link>
                      
                    </ul>
                </div>
            </div>
            <div className="datosEmpresa text-white d-flex">
                <ul className=" ">
                    <h5 className="pb-3 ms-0 text-start">Compañia</h5>
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faMapMarker} style={{ color: 'blue', fontSize: '1.5em' }} /> 
                        <li className="pb-4 ps-2">España 1450</li></div>
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'green', fontSize: '1.5em' }} />
                        <li className="pb-4 ps-2">3815401511</li>
                    </div>
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faClock} style={{ fontSize: '1.5em' }} /> 
                        <li className="pb-4 ps-2 pe-2">Horarios: L a V de 9 a 16</li>
                    </div>
                </ul>
                <div>
                    <a href="https:www.google.com/maps/place/Espa%C3%B1a+1450,+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.8145095,-65.2180537,17z/data=!3m1!4b1!4m5!3m4!1s0x94225c4795c72827:0x5046b8948e56a325!8m2!3d-26.8145095!4d-65.215865"><img src={imagen} alt="ubicacion" style={{ height: '12em' }} /></a>
                </div>
            </div>
            <div className="d-flex flex-column pe-3">
                <h5 className="text-white">Redes Sociales</h5>
                <div className="d-flex flex-column align-items-center" >
                <Nav.Link><img src="https://icongr.am/devicon/facebook-original.svg?size=40&color=currentColor" alt="facebook" /></Nav.Link> 
                <Nav.Link><img src="https://icongr.am/devicon/twitter-original.svg?size=40&color=currentColor" alt="twitter" /></Nav.Link> 
                <Nav.Link><img src="https://icongr.am/devicon/facebook-original.svg?size=40&color=currentColor" alt="instagram" /></Nav.Link> 
                </div>
            </div>
        </div>
    )
}

export default Footer
