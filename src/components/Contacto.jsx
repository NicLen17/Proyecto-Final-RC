import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Contacto() {
  return (
    <div className="body" style={{ marginBottom: "60px" }}>
      <div className="p-3" style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>CONTACTA CON NOSOTROS</h1>
        <h3>Podes enviarnos tu consulta</h3>
        <p>
          Completa el formulario con tu consulta y nuestros asesores responderan
          dentro de las 48hs habiles. Tambien podes contactarnos mediante los
          enlaces directos de nuestras redes sociales!
        </p>
      </div>
      <div className="row">
        <div className="d-flex col">
          <div className="row-cols-1">
            <img
              className="contacto p-5"
              style={{
                width: "800px",
                height: "600px",
              }}
              src="https://485758.smushcdn.com/622655/wp-content/uploads/2019/07/cold-emailing.jpg?lossy=1&strip=1&webp=1"
            />
            <div
              className="d-flex col-5 ml-3"
              style={{ justifyContent: "space-evenly" }}
            >
              <a href="">
                <img
                  src="https://icongr.am/fontawesome/facebook-official.svg?size=60&color=1002cf"
                  style={{ marginLeft: "30px" }}
                />
              </a>
              <a href="">
                <img src="https://icongr.am/fontawesome/instagram.svg?size=60&color=cf0298" />
              </a>
              <a href="">
                <img src="https://icongr.am/fontawesome/google.svg?size=60&color=cf2102" />
              </a>
              <a href="">
                <img src="https://icongr.am/fontawesome/whatsapp.svg?size=60&color=02cf35" />
              </a>
            </div>
          </div>
          <div
            className=" p-5 mx-auto"
            style={{ textAlign: "left", width: "700px" }}
          >
            <Form>
              <Form.Group
                style={{ marginTop: "15px" }}
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control type="name" placeholder="Nombre y Apellido" />
              </Form.Group>
              <Form.Group
                style={{ marginTop: "15px" }}
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control type="email" placeholder="Correo@example.com" />
              </Form.Group>
              <Form.Group
                style={{ marginTop: "15px" }}
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="phone" placeholder="+549---" />
              </Form.Group>
              <Form.Group
                style={{ marginTop: "15px" }}
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" placeholder="Mensaje" rows={3} />
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
  );
}
