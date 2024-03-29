import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Form, Alert } from "react-bootstrap";
import Aos from 'aos';
import "aos/dist/aos.css";
import "./Carrito.css";
import CardCarrito from "./CardCarrito";


export default function Carrito({ productosCarrito, setProductosCarrito }) {
  const history = useHistory();
  const [alert, setAlert] = useState("");
  let [total, setTotal] = useState(0);
  const [validated, setValidated] = useState(false);


  useEffect(() => {
    Aos.init({ duration: 1000 });
    if (productosCarrito.length === 0) {
      setTotal(0);
    }
    sumaTotal()
  }, [productosCarrito])

  console.log(productosCarrito)
  console.log(total);

  const sumaTotal = () => {

    var sum = 0;
    productosCarrito.map((p) => {
      sum = sum + (p.cantidad * p.price);
      console.log(sum)
      return setTotal(sum)
    })
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return setAlert("Completa tus Datos!")
    }
    if (productosCarrito.length === 0) {
      return setAlert(`No hay productos en el carrito`);
    }
    if (window.confirm("Confirmar compra?")) {
      history.push("/compra");
    }
  };

  const cancelarCompra = () => {
    localStorage.setItem("agregarcarrito", JSON.stringify([]));
    if (window.confirm("Seguro que desea cancelar?")) {
      history.push("/");
    }
  };

  return (
    <div data-aos="fade-up" className="body bodycarrito mt-5">
      <br />
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
        {alert && <Alert variant="danger">{alert}</Alert>}
        {productosCarrito.length === 0 && (
          <Card className="card overflow container producto">
            <div className="container containercardcarrito d-flex">
              <h1 className="mt-5 mb-5 pt-5 pb-5 mx-auto">No hay productos en el carrito</h1>
            </div>
          </Card>)}

        <br />

        {productosCarrito.map((p) => (
          <CardCarrito p={p} setTotal={setTotal} productosCarrito={productosCarrito} setProductosCarrito={setProductosCarrito} sumaTotal={sumaTotal} />
        ))}
        <br />
        <br />
        {/*---------------------Detalle de Compra------------------*/}
        <div
          className="card container detalle"
          style={{ textAlign: "end", flexDirection: "column" }}
        >
          <div className="card-body ">
            <h3>Total: ${total}</h3>
          </div>
        </div>
        <br />
        {/*-------------------Seccion forma de Pago y Envio-----------------------------*/}
        <div>
        </div>
        <br />
        {/*-------------------Forma de Envio-----------------------------------*/}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div>
            <div className="container d-flex">
              <h5>Datos de mi compra</h5>
            </div>
            <br />
            <Card className="enviodomicilio">
              <div
                style={{ textAlign: "start" }}
                className="card-body container ml-3 mb-4 mt-3"
              >
                <b>Forma de Pago</b>
              </div>
              <div className="contenedorformadepago">
                <div className="imagentarjeta">
                  <img className="tarjeta1" style={{ width: "400px", height: "250px" }} src="https://i.pinimg.com/originals/ba/2b/92/ba2b92904706759ede13a3fbf8fd8d7b.jpg" alt="Tarjeta de credito" />
                </div>
                <div className="cfpinputs">
                  <Form.Control
                    maxLength="25"
                    required
                    min="0"
                    className="inputstarjeta"
                    type="numeric"
                    placeholder="Numero de Tarjeta"
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresa el numero de tarjeta!
                  </Form.Control.Feedback>
                  <Form.Control
                    maxLength="25"
                    required
                    className="inputstarjeta"
                    type="text"
                    placeholder="Nombre del dueño"
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresa tu nombre!
                  </Form.Control.Feedback>
                  <Form.Control
                    maxLength="25"
                    required
                    min="0"
                    className="inputstarjeta"
                    type="numeric"
                    placeholder="Vencimiento"
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresa el vencimiento!
                  </Form.Control.Feedback>
                  <Form.Control
                    maxLength="25"
                    required
                    min="0"
                    className="inputstarjeta"
                    type="numeric"
                    placeholder="Codigo de seguridad"
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresa Codigo de seguridad!
                  </Form.Control.Feedback>
                </div>
              </div>
              <div className="container d-flex">
                <div
                  className="card-body container ml-2 mt-5"
                  style={{ textAlign: "start" }}
                >
                  <b>Envio a Domicilio</b>
                </div>
              </div>
              <Card.Body>
                <div className="card-body d-flex">
                  <Form.Control
                    maxLength="25"
                    required
                    className="ml-3 enviodomicilio"
                    type="numeric"
                    placeholder="Ingresar CP"
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresar codigo postal valido!
                  </Form.Control.Feedback>
                  <Form.Control
                    className="ml-2 enviodomicilio"
                    required
                    maxLength="25"
                    type="text"
                    placeholder="Ingresar Localidad"
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresar localidad valida!
                  </Form.Control.Feedback>
                  <Form.Control
                    required
                    maxLength="25"
                    className="ml-2 enviodomicilio"
                    type="text"
                    placeholder="Ingresar Domicilio de Entrega"
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresar domicilio valido!
                  </Form.Control.Feedback>
                </div>
                <hr />
                <b>
                  IMPORTANTE: cuando confirmes tu compra te enviamos un mail con
                  fecha de despacho y codigo de seguimiento!
                </b>
              </Card.Body>
            </Card>
          </div>
          <br />
          <br />
          <div
            className="mb-2 p-2 conteinerbotonescarrito"
            style={{
              textAlign: "end",
            }}
          >
            <Button
              className="registerbut"
              onClick={cancelarCompra}
              variant="registerbut"
              size="lg"
              style={{ float: "left", width: "250px" }}
            >
              Cancelar compra
            </Button>{" "}
            <Button
              type="submit"
              id="btncompras"
              className="registerbut"
              variant="registerbut"
              size="lg">

              COMPRAR!
            </Button>{" "}
          </div>
        </Form>
        {/*--------- Final Seccion envio y pago----------*/}

        <br />
        <hr />
        {/*--------------------Confirmacion de la compra-----------------------*/}
      </div>
    </div>
  );
}
