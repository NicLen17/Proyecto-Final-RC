import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import './Sabout.css'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';
import { Autoplay, Navigation } from 'swiper/core';
import './Contacto.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'



SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Contacto() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
}, [])
  return (
    <div data-aos="fade-down-right">
      <div className="about">
        <div className="contentabout">
          <br />
          <p>P h o n e    P i x e l</p>
          <div className="subtitulo">
            <h3>Somos la nueva empresa de telefonia al alcance de todos</h3>
              <Swiper autoplay={true} loop={true} slidesPerView={1} spaceBetween={0} pagination={{
                "clickable": true
              }} className="mySwiper">
                <SwiperSlide><img className="slogan" src="https://tienda.claro.com.ar/wcsstore/Claro/Attachment/lanzamiento-samsung-galaxy-s21-evoucher-claro-desktop.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className="slogan" src="https://doto.vteximg.com.br/arquivos/samsung-galaxy-s20-fe-ghosting.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className="slogan" src="https://tienda.claro.com.ar/wcsstore/Claro/Attachment/samsung-galaxy-a72-claro-tienda-desktop.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className="slogan" src="https://personal.vteximg.com.br/arquivos/h1-samsung-tienda-desktop02.png?v=637432871810700000" alt="" /></SwiperSlide>
              </Swiper>
          </div>
        </div>
      </div>
      <div className="body" style={{ marginBottom: "160px", maxWidth: "100%" }}>
        <div className="p-3 contacto" style={{ textAlign: "center", marginTop: "45px" }}>
          <h1>CONTACTA CON NOSOTROS</h1>
          <h3>Podes enviarnos tu consulta</h3>
          <p>
            Completa el formulario con tu consulta y nuestros asesores responderan
            dentro de las 48hs habiles. Tambien podes contactarnos mediante los
            enlaces directos de nuestras redes sociales!
        </p>
        </div>
        <div className="formulario" style={{ maxWidth: "100%" }}>
        <div className="row d-flex flex-wrap" style={{ maxWidth: "100%" }}>
          <div className="d-flex flex-wrap col" style={{ maxWidth: "100%" }}>
            <div className="row-cols-1">
              <img
                className="contactoimg"
                style={{
                  marginTop: "10px",
                  width: "700px",
                  height: "500px",
                  maxWidth: "100%"
                }}
                src="https://485758.smushcdn.com/622655/wp-content/uploads/2019/07/cold-emailing.jpg?lossy=1&strip=1&webp=1" alt=""
              />
              <div
                className="d-flex ml-3"
                style={{ justifyContent: "space-evenly", maxWidth: "100%" }}
              >
                <a className="redescontacto" href="">
                  <img
                    src="https://icongr.am/fontawesome/facebook-official.svg?size=60&color=1002cf"
                    alt=""
                  />
                </a>
                <a className="redescontacto"  href="">
                  <img src="https://icongr.am/fontawesome/instagram.svg?size=60&color=cf0298" alt="" />
                </a>
                <a className="redescontacto"  href="">
                  <img src="https://icongr.am/fontawesome/google.svg?size=60&color=cf2102" alt="" />
                </a>
                <a className="redescontacto"  href="">
                  <img src="https://icongr.am/fontawesome/whatsapp.svg?size=60&color=02cf35" alt="" />
                </a>
              </div>
            </div>
            <div
              className="p-5 mx-auto"
              style={{ textAlign: "left", width: "700px" }}
            >
              <Form>
                <Form.Group
                  style={{ marginTop: "15px" }}
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Nombre y Apellido</Form.Label>
                  <Form.Control className="labelform" type="name" placeholder="Nombre y Apellido" />
                </Form.Group>
                <Form.Group
                  style={{ marginTop: "15px" }}
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Correo electronico</Form.Label>
                  <Form.Control className="labelform" type="email" placeholder="Correo@example.com" />
                </Form.Group>
                <Form.Group
                  style={{ marginTop: "15px" }}
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control className="labelform" type="phone" placeholder="+549---" />
                </Form.Group>
                <Form.Group
                  style={{ marginTop: "15px" }}
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control className="labelform" as="textarea" placeholder="Mensaje" rows={3} />
                </Form.Group>
                <Button
                  type="submit"
                  style={{ marginTop: "10px", width: "100%" }}
                >
                  <img
                    src="https://icongr.am/octicons/comment.svg?size=25&color=ffffff"
                    className="mr-3"
                  />
                Enviar
              </Button>
              </Form>
              <br />
              <p style={{ fontSize: "12px", textAlign: "justify" }}>
                Phone Pixels te informa que los datos de caracter personal que
                proporciones rellenando este formulario seran tratados de manera
                confidencial. La finalidad de la recogida y tratamiento de los
                mismos es dar respuesta a solicitudes de contacto y envio de
                contenidos. La legitimación se realiza a través de tu
                consentimiento. Los datos que me facilites estarán ubicados en los
                servidores de nuestro proveedor de hosting XXXX
                (https://www.phonepixels.com/) en EEUU. Podras acceder,
                rectificar, limitar y suprimir tus datos a través del email
                phonepixels@gmail.com asi como el derecho a presentar una
                reclamación ante una autoridad de control.
            </p>
              <hr />
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Aceptar Politica de Privacidad"
                />
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}
