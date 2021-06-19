import React, { useState } from "react";

import { Button, Card, Form, Accordion } from "react-bootstrap";
import Switch from "@material-ui/core/Switch";

import "./Carrito.css";

// const setLStorageItem = (key, value) => {
//   localStorage.setItem(key, JSON.stringify(value));
// };
// const initialArticulos = JSON.parse(localStorage.getItem("articulos")) || [];

export default function Carrito() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  //FUNCION ELIMINAR PRODUCTOS

  //   async function deleteProducto(id) {
  //     console.log(id);
  //     if (window.confirm("Estas seguro que deseas eliminar?")) {
  //         await axios.delete(`/productos/${id}`);
  //         productos();
  //         setalertSuccess("Eliminado correctamente")
  //     }
  // }

  // FUNCION PARA OPERAR EN LOCALSTORAGE

  // const [validated, setValidated] = useState(false);
  // const [input, setInput] = useState({});
  // const [articulos, setArticulos] = useState(initialArticulos);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   event.preventDefault();
  //   if (form.checkValidity() === true) {
  //     //Cuando los campos esten completos, agregamos el articulo al array
  //     const newArticulos = [...articulos, input];
  //     setArticulos(newArticulos);
  //     setLStorageItem("articulos", newArticulos);
  //     form.reset();
  //     setValidated(false);
  //   } else {
  //     setValidated(true);
  //   }
  // };

  // const handleChange = (event) => {
  //   // Extraemos y guardamos en variables, el nombre y el valor del input en el que escribio el usuario.
  //   const { value, name } = event.target;

  //   //Declaramos un objeto que contiene las propiedades del stat input,
  //   //mas lo que escribe el usuario  usando el name  y value. Con ese objeto actualizamos el estado.

  //   const newInput = { ...input, [name]: value };
  //   setInput(newInput);
  // };

  return (
    <div className="body">
      {/*---------------------------NavBar---------------------------------------- */}
      <div className="navcss">
        <div className="d-flex">
          <div className="m-1 d-flex " href="#home">
            {/* <h3>Phone Pixel</h3> */}
            <img
              src="https://www.logaster.com.es/blog/wp-content/uploads/sites/4/2019/03/0106_t_phone-pixels-logo_2.png"
              style={{ width: "150px", height: "65px" }}
            />
          </div>
          <div
            className="card-body d-flex "
            style={{ justifyContent: "flex-end" }}
          >
            <a href="#login">
              <h3>Ayuda!</h3>
            </a>
          </div>
        </div>
      </div>
      {/*----------------------Detalle de la compra ------------------------*/}
      <div
        className="card container carritocss"
        style={{
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <div className="card-body mt-3" style={{ textAlign: "start" }}>
          <h1>
            Mi carrito
            <img
              src="https://icongr.am/fontawesome/cart-plus.svg?size=50&color=currentColor"
              alt=""
            />
          </h1>
        </div>
        {/*-------------------Card de Producto--------------------*/}
        <Card className="card overflow container producto">
          {/*--------------Boton Eliminar Producto-------------*/}
          <div className="mt-3" style={{ textAlign: "end" }}>
            Este boton elimina el articulo cargado
            <Button
              className="btn-light btn-outline-light ml-1 "
              style={{ backgroundColor: "transparent" }}
            >
              <img
                src="https://icongr.am/fontawesome/trash.svg?size=40&color=currentColor"
                alt=""
              />
            </Button>
          </div>
          <br />
          {/*-------------------Precio del Articulo------------------------*/}
          <div className="card container" style={{ textAlign: "end" }}>
            <div className="card-body">
              <h5>Precio: AQUI VA EL PRECIO DEL ARTICULO CARGADO</h5>
            </div>
          </div>
          <br />
          <div className="container d-flex">
            <br />
            <Card
              className="card-body d-flex align-content-center m-4"
              style={{ backgroundColor: "yellow" }}
            >
              <h1> AQUI VA EL CONTENIDO DE LA CARD DE PRODUCTO</h1>
            </Card>
            <br />
            <br />
            {/*-----------------Datos del producto: Titulo, color?,-------------*/}

            {/* {section === "Cards" && (
        <div className="container d-flex">
          {articulos.map((articulo) => (
            <Card
              imagen={articulo.image}
              titulo={articulo.titulo}
              descripcion={articulo.descripcion}
            />
          ))}
        </div>
      )} */}

            {/*-----------------imagen del producto--------------------------*/}
            {/* <div className="card-body d-flex">
              <img
                src="https://d34zlyc2cp9zm7.cloudfront.net/products/c332a0d34920e86555c0c6d2d3492e0a725fdbc1db35fb10ee2a6adc22c061d4.jpg_500"
                alt=""
              />
            </div> */}

            {/* <div
              className="container"
              style={{
                flexDirection: "column",
              }}
            >
              <div className="card-body d-flex">
                <b>Marca:</b>
              </div>
              <div className="card-body d-flex">
                <b>Modelo:</b>
              </div>
              <div className="card-body d-flex">
                <b>Color:</b>
              </div>
              <div className="card-body d-flex">
                <b>Cantidad:</b>
              </div>
            </div>*/}
          </div>
        </Card>
        <br />
        <br />
        {/*---------------------Detalle de Compra------------------*/}
        <div
          className="card container detalle"
          style={{ textAlign: "end", flexDirection: "column" }}
        >
          <div className="card-body ">
            <h3>Total: AQUI VA EL TOTAL DE LA COMPRA</h3>
          </div>
        </div>
        <br />
        {/*-------------------Forma de Pago-----------------------------*/}
        <div>
          <div className="container d-flex" style={{ alignContent: "center" }}>
            <h5>Mi forma de pago</h5>
          </div>
          <br />

          {/* <Accordion className="m-2 pagoefectivo">
            <Card>
              <div
                className="container d-flex "
                style={{ alignItems: "center" }}
              >
                <div
                  className="card-body d-flex "
                  style={{ alignItems: "center" }}
                >
                  {/* <input
                    type="radio"
                    class="form-check-input"
                    id="exampleCheck1"
                    name="pago"
                  /> *
                  <b>Efectivo en Puntos de Pago</b>
                </div>

                <Accordion.Toggle
                  as={Button.light}
                  className="btn btn-outline-light"
                  eventKey="0"
                  name="pago"
                >
                  <img
                    src="https://icongr.am/entypo/chevron-small-down.svg?size=30&color=currentColor"
                    alt=""
                  />
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <hr />
                  <div className="container d-flex">
                    <div
                      className="card-body d-flex"
                      style={{ alignItems: "center" }}
                    >
                      <input
                        type="radio"
                        class="form-check-input only-one"
                        id="exampleCheck1"
                        size="lg"
                        name="efectivo"
                      />
                      <label
                        class="form-check-label"
                        for="exampleCheck1"
                        size="lg"
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDcGOl3dBn0AZJtlFL-dFyFfLfvjBsys9mYuwwTZjKpgEnLJjlnGhHUfD5ldwgkat2A&usqp=CAU"
                        alt=""
                        style={{
                          width: "180px",
                          height: "50px",
                          marginLeft: "1rem",
                        }}
                      />
                    </div>

                    <div
                      className="card-body d-flex"
                      style={{ alignItems: "center" }}
                    >
                      <input
                        type="radio"
                        class="form-check-input"
                        id="exampleCheck1"
                        name="efectivo"
                      />
                      <label class="form-check-label" for="exampleCheck1" />

                      <img
                        src="http://1.bp.blogspot.com/_dsMAErmQ_4o/TPf1eRuaF2I/AAAAAAAAAdM/P54twgtwOMM/s1600/PAGOFACIL.jpg"
                        alt=""
                        style={{
                          width: "120px",
                          height: "75px",
                          marginLeft: "1rem",
                        }}
                      />
                    </div>
                    <div
                      className="card-body d-flex"
                      style={{
                        alignItems: "center",
                        width: "250px",
                        height: "100px",
                      }}
                    >
                      <b>
                        IMPORTANTE: cuando confirmes la compra por cualquiera de
                        estos medios, te enviamos un link de Mercado Pago!
                      </b>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
                    </Accordion> */}

          <br />

          <Accordion className="m-2 pagotarjeta">
            <Card>
              <div
                className="container d-flex"
                style={{ alignItems: "center" }}
              >
                <div
                  className="card-body d-flex"
                  style={{ alignContent: "center" }}
                >
                  {/* <input
                    type="radio"
                    class="form-check-input"
                    id="exampleCheck1"
                    name="pago"
                  /> */}
                  <b>Pago con Tarjeta</b>
                </div>
                <Accordion.Toggle
                  as={Button.light}
                  className="btn btn-outline-light"
                  eventKey="0"
                  name="pago"
                  required
                >
                  <img
                    src="https://icongr.am/entypo/chevron-small-down.svg?size=30&color=currentColor"
                    alt=""
                  />
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <hr />
                  <div
                    className="container d-flex m-2"
                    style={{ alignContent: "center" }}
                  >
                    <div
                      className="container mt-4"
                      style={{ width: "500px" }}
                      name="efectivo"
                    >
                      <Form.Control
                        className="ml-3 mb-2"
                        type="text"
                        placeholder="Nro. de Tarjeta"
                      />
                      <Form.Control
                        className="ml-3 mb-2"
                        type="text"
                        placeholder="Codigo de Seguridad"
                      />
                      <Form.Control
                        className="ml-3 mb-2"
                        type="text"
                        placeholder="Fecha de Expiracion"
                      />
                      <Form.Control
                        className="ml-3 mb-2"
                        type="text"
                        placeholder="Nombre y Apellido"
                      />
                      <Form.Control
                        className="ml-3"
                        type="text"
                        placeholder="DNI del titular"
                      />
                    </div>
                    <div
                      className="container d-flex ml-3 mt-3"
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <div>
                        <b>
                          IMPORTANTE: cuando confirmes la compra, te enviamos un
                          comprobante de pago!
                        </b>
                        <hr />
                      </div>

                      <img
                        src="https://1nen2cjw5gsxixyx3z0nqfgi-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/deposit-image3.png"
                        alt=""
                        style={{
                          width: "400px",
                          height: "180px",
                          marginLeft: "50px",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="container d-flex card-body"
                    style={{ justifyContent: "space-around" }}
                  >
                    <div className="card-body d-flex">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="exampleCheck1"
                        name="efectivo"
                      />
                      <label class="form-check-label" for="exampleCheck1" />
                      Pago Unico
                    </div>
                    <div className="card-body d-flex">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="exampleCheck1"
                        name="efectivo"
                      />
                      <label class="form-check-label" for="exampleCheck1" />3
                      Cuotas Sin Interes
                    </div>
                    <div className="card-body d-flex">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="exampleCheck1"
                        name="efectivo"
                      />
                      <label class="form-check-label" for="exampleCheck1" />6
                      Cuotas Sin Interes
                    </div>
                    <div className="card-body d-flex">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="exampleCheck1"
                        name="efectivo"
                      />
                      <label class="form-check-label" for="exampleCheck1" />
                      12 Cuotas Sin Interes
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <br />
        {/*-------------------Forma de Envio-----------------------------------*/}
        <div defaultActiveKey="1">
          <div className="container d-flex" style={{ alignContent: "center" }}>
            <h5>Mi envio</h5>
          </div>
          <br />
          <Accordion className="m-2 retirosucursal">
            <Card>
              <div
                className="container d-flex"
                style={{ alignItems: "center" }}
              >
                <div className="card-body d-flex">
                  <input
                    control={
                      <Switch checked={hidden} onClick={handleHiddenChange} />
                    }
                    type="radio"
                    class="form-check-input"
                    id="exampleCheck1"
                    name="envio"
                  />
                  <label class="form-check-label" for="exampleCheck1" />
                  <b>Retiro en Sucursal</b>
                </div>

                <Accordion.Toggle
                  as={Button.light}
                  className="btn btn-outline-light"
                  eventKey="1"
                  hidden={hidden}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  open={open}
                  target
                >
                  <img
                    src="https://icongr.am/entypo/chevron-small-down.svg?size=30&color=currentColor"
                    alt=""
                  />
                </Accordion.Toggle>
              </div>

              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <hr />
                  <b>
                    IMPORTANTE: cuando confirmes tu compra te enviamos un mail
                    con fecha de retiro!
                  </b>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <br />
          <Accordion className="p-2 ">
            <Card className="enviodomicilio">
              <div
                className="container d-flex"
                style={{ alignItems: "center" }}
              >
                <div
                  className="card-body container"
                  style={{ alignItems: "center" }}
                >
                  <input
                    type="radio"
                    value="required"
                    class="form-check-input"
                    id="exampleCheck1"
                    name="envio"
                  />
                  <label class="form-check-label" for="exampleCheck1" />
                  <b>Envio a Domicilio</b>
                </div>

                <Accordion.Toggle
                  as={Button.light}
                  className="btn btn-outline-light"
                  eventKey="1"
                  style={{ marginLeft: "10px" }}
                >
                  <div></div>
                  <img
                    src="https://icongr.am/entypo/chevron-small-down.svg?size=30&color=currentColor"
                    alt=""
                  />
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <div className="card-body d-flex">
                    <Form.Control
                      className="ml-3"
                      type="text"
                      eventKey="1"
                      placeholder="Ingresar CP"
                    />
                    <Form.Control
                      className="ml-2"
                      type="text"
                      eventKey="1"
                      placeholder="Ingresar Localidad"
                    />
                    <Form.Control
                      className="ml-2"
                      type="text"
                      eventKey="1"
                      placeholder="Ingresar Domicilio de Entrega"
                    />
                  </div>
                  <hr />
                  <b>
                    IMPORTANTE: cuando confirmes tu compra te enviamos un mail
                    con fecha de despacho y codigo de seguimiento!
                  </b>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <br />
        <hr />
        {/*--------------------Confirmacion de la compra-----------------------*/}
        <div
          className="mb-2 p-2"
          style={{
            textAlign: "end",
          }}
        >
          <Button variant="danger" size="lg" style={{ float: "left" }}>
            Cancelar
          </Button>{" "}
          {/* <Button variant="primary" size="lg">
            Modificar Compra
          </Button>{" "} */}
          <Button variant="success" size="lg">
            COMPRAR!
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
