import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Form, Alert } from "react-bootstrap";
import Aos from 'aos'
import "aos/dist/aos.css"
import "./Carrito.css";
import Tarjeta from './Tarjeta'

export default function Carrito({ productosCarrito, setProductosCarrito }) {
  const [count, setCount] = useState(0)
  const history = useHistory();
  const [alert, setAlert] = useState("");
  let [total, setTotal] = useState("");
  useEffect(() => {
    console.log(productosCarrito);
    producto()
    Aos.init({ duration: 1000 });
  }, [count])

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  let producto = () => {
    let productoStorage = JSON.parse(localStorage.getItem("agregarcarrito")) ? JSON.parse(localStorage.getItem("agregarcarrito")) : [];
    setProductosCarrito(productoStorage);
    let sum = 0;
    productoStorage.map((p) => {
      return sum = sum + p.price;
    });
    setTotal(sum);
  };

  const eliminarcarrito = (id) => {
    const confirmar = window.confirm("Acepta eliminar del Carrito? ");
    if (!confirmar) {
      return;
    }
    let productosFiltrados = [];
    productosCarrito.map((e) => {
      const coincideId = e._id === id;
      if (!coincideId) {
        productosFiltrados.push(e);
      }
    });
    localStorage.setItem("agregarcarrito", JSON.stringify(productosFiltrados));
    setAlert("PRODUCTO ELIMINADO");
    setTimeout(() => {
      setAlert("");
    }, 8000);
    producto();
  };

  const cancelarcompra = () => {
    localStorage.setItem("agregarcarrito", JSON.stringify([]));
    if (window.confirm("Seguro que desea cancelar?")) {
      history.push("/");
    }
  };

  const confirmarcompra = () => {
    if (productosCarrito.length === 0) {
      return setAlert(`No hay productos en el carrito`);
    }
    if (window.confirm("Confirmar compra?")) {
      history.push("/compra");
    }
    setTimeout(() => {
      setAlert("");
    }, 8000);
  };

  const mostrarbtncompra = () => {
    document.getElementById('btncompras').style.display = 'block' 
    document.getElementById('ocultarbtn').style.display = 'none'
  }

 

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
        {/*-------------------Card de Producto--------------------*/}
        {alert && <Alert variant="danger">{alert}</Alert>}
        <Card className="card overflow container producto">
          {/*--------------Boton Eliminar Producto-------------*/}
          {productosCarrito.length === 0 && (
            <h1 className="pt-5 mt-5">No hay productos en el carrito</h1>
          )}
          <br />
          {/*-------------------Precio del Articulo------------------------*/}
          <br />
          <div className="container containercardcarrito d-flex">
            <br />
            {productosCarrito.map((p) => (
              <div className="cardcarrito">
                <div className="carritoimg">
                  <img style={{ marginTop: "15px", marginBottom: "15px", maxWidth: "300px", maxHeight: "250px", margin: "auto" }} src={p.img[0]} alt="" />
                </div>
                <div className="infocarrito">
                  <p>{p.marca} {p.modelo}
                  </p>
                  <p><b>
                    ${p.price}
                  </b></p>
                  <div className="d-flex justify-content-center ">
                    {count > 0 ? <Button
                      onClick={() => setCount(count - 1)}>
                      <img
                        className=""
                        src="https://icongr.am/clarity/window-min.svg?size=10&color=currentColor"
                        alt="resta"
                      />
                    </Button> : <Button
                    >
                      <img
                        className=""
                        src="https://icongr.am/clarity/window-min.svg?size=10&color=currentColor"
                        alt="resta"
                      />
                    </Button>}
                    <h4 className="border border-dark" style={{ width: 56, height: 50, margin: 0, paddingTop: 10 }}>{count}</h4>
                    <Button
                      onClick={() => setCount(count + 1)}>
                      <img
                        className=""
                        src="https://icongr.am/clarity/add.svg?size=10&color=currentColor"
                        alt="suma"
                      />
                    </Button>
                  </div>
                  <Button
                    onClick={() => eliminarcarrito(p._id)}
                    className="btn btn-danger botoneliminarnone ml-1"
                    style={{ backgroundColor: "transparent", display: "none" }}
                  >Eliminar
                    <img
                      className="botoneliminar"
                      src="https://icongr.am/fontawesome/trash.svg?size=35&color=ffffff"
                      alt=""
                    />
                  </Button>
                </div>
                <Button
                  onClick={() => eliminarcarrito(p._id)}
                  className="btn botoneliminar ml-1"
                  variant="botoneliminar"
                  style={{ backgroundColor: "transparent" }}
                >
                  <img
                    className="botoneliminar"
                    src="https://icongr.am/fontawesome/trash.svg?size=35&color=ffffff"
                    alt=""
                  />
                </Button>
              </div>
            ))}
            <br />
            <br />
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
            <h3>Total: ${total}</h3>
          </div>
        </div>
        <br />
        {/*-------------------Seccion forma de Pago y Envio-----------------------------*/}
        <div>
          <div className="container d-flex">
            <h5>Mi forma de pago</h5>
          </div>
          <br />
          <div className="pagotarjeta">
            <br />
            <br />
            <Tarjeta />
            <br />
            <br />
          </div>
        </div>
        <br />
        {/*-------------------Forma de Envio-----------------------------------*/}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div>
            <div className="container d-flex">
              <h5>Mi envio</h5>
            </div>
            <br />
            <Card className="enviodomicilio">
              <div className="container d-flex">
                <div
                  className="card-body container"
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
                    className="ml-3"
                    type="numeric"
                    placeholder="Ingresar CP"
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresar codigo postal valido!
                  </Form.Control.Feedback>
                  <Form.Control
                    className="ml-2"
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
                    className="ml-2"
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
              type="submit"
              className="registerbut"
              id="ocultarbtn"
              onClick={mostrarbtncompra}
              variant="registerbut" size="lg">
              Confirmar Datos
            </Button>{" "}
            <Button
              className="registerbut"
              onClick={cancelarcompra}
              variant="registerbut"
              size="lg"
              style={{ float: "left", width: "250px" }}
            >
              Cancelar compra
            </Button>{" "}
            <Button
              style={{display: "none"}}
              type="submit"
              id="btncompras"
              className="registerbut mr-5"
              onClick={confirmarcompra}
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
