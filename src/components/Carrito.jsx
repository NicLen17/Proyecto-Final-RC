import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Form, Alert } from "react-bootstrap";
import Aos from 'aos'
import "aos/dist/aos.css"
import "./Carrito.css";

export default function Carrito() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])


  const history = useHistory();
  const [alert, setAlert] = useState("");
  let [productoCart, setProductoCart] = useState([]);
  let [total, setTotal] = useState("");

  // let productoCart = JSON.parse(localStorage.getItem("agregarcarrito")) || [];

  let producto = () => {
    let productoStorage =
      JSON.parse(localStorage.getItem("agregarcarrito")) || [];
    setProductoCart(productoStorage);
    let sum = 0;
    productoStorage.map((p) => {
      return sum = sum + p.price;
    });
    setTotal(sum);
  };
  useEffect(() => {
    producto();
  }, []);

  const eliminarcarrito = (id) => {
    const confirmar = window.confirm("Acepta eliminar del Carrito? ");
    if (!confirmar) {
      return;
    }
    let productosFiltrados = [];
    productoCart.map((e) => {
      const coincideId = e._id === id;
      if (!coincideId) {
        productosFiltrados.push(e);
      }
      
    });

    localStorage.setItem("agregarcarrito", JSON.stringify(productosFiltrados));
    setProductoCart(productosFiltrados);
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
    if (window.confirm("Confirmar compra?")) {
      history.push("/compra");
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
        {/*-------------------Card de Producto--------------------*/}
        {alert && <Alert variant="danger">{alert}</Alert>}
        <Card className="card overflow container producto">
          {/*--------------Boton Eliminar Producto-------------*/}
          {productoCart.length === 0 && (
            <h1 className="pt-5 mt-5">No hay productos en el carrito</h1>
          )}
          <br />
          {/*-------------------Precio del Articulo------------------------*/}
          <br />
          <div className="container containercardcarrito d-flex">
            <br />
            {productoCart.map((p) => (
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

          <Card className="pagotarjeta">
            <div className="container d-flex" style={{ textAlign: "start" }}>
              <b className="card-body">Ingresa los datos de tu tarjeta</b>
            </div>
            <Card.Body>
              <div className="container carritoresp2 d-flex m-2">
                <div
                  className="container carritoresp2 mt-4"
                  style={{ width: "500px" }}
                  name="efectivo"
                  required
                >
                  <Form.Control
                    className="ml-3 mb-2"
                    type="numeric"
                    placeholder="Nro. de Tarjeta"
                    textarea
                  />

                  <Form.Control
                    className="ml-3 mb-2"
                    type="numeric"
                    placeholder="Codigo de Seguridad"
                  />

                  <Form.Control
                    className="ml-3 mb-2"
                    type="month"
                    placeholder="Fecha de Expiracion"
                  />

                  <Form.Control
                    className="ml-3 mb-2"
                    type="text"
                    placeholder="Nombre y Apellido"
                  />

                  <Form.Control
                    className="ml-3"
                    type="numeric"
                    placeholder="DNI del titular"
                  />
                </div>

                <div
                  className="container carritoresp d-flex ml-3 mt-3"
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="mb-4">
                    <b>
                      IMPORTANTE: cuando confirmes la compra, te enviamos un
                      comprobante de pago!
                    </b>
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
                className="card-body carritorespon3"
                style={{ justifyContent: "space-around" }}
                required
              >
                <div className="card-body">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="exampleCheck1"
                    name="efectivo"
                  />
                  <label class="form-check-label" for="exampleCheck1" />
                  Pago Unico
                </div>
                <div className="card-body">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="exampleCheck1"
                    name="efectivo"
                  />
                  <label className="form-check-label" for="exampleCheck1" />3
                  Cuotas Sin Interes
                </div>
                <div className="card-body">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="exampleCheck1"
                    name="efectivo"
                  />
                  <label class="form-check-label" for="exampleCheck1" />6 Cuotas
                  Sin Interes
                </div>
                <div className="card-body">
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
          </Card>
        </div>
        <br />
        {/*-------------------Forma de Envio-----------------------------------*/}
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
                  className="ml-3"
                  type="numeric"
                  placeholder="Ingresar CP"
                />
                <Form.Control
                  className="ml-2"
                  type="text"
                  placeholder="Ingresar Localidad"
                />
                <Form.Control
                  className="ml-2"
                  type="text"
                  placeholder="Ingresar Domicilio de Entrega"
                />
              </div>
              <hr />
              <b>
                IMPORTANTE: cuando confirmes tu compra te enviamos un mail con
                fecha de despacho y codigo de seguimiento!
              </b>
            </Card.Body>
          </Card>
        </div>

        {/*--------- Final Seccion envio y pago----------*/}

        <br />
        <hr />
        {/*--------------------Confirmacion de la compra-----------------------*/}
        <div
          className="mb-2 p-2"
          style={{
            textAlign: "end",
          }}
        >
          <Button
            className="registerbut"
            onClick={cancelarcompra}
            variant="registerbut"
            size="lg"
            style={{ float: "left", width: "250px" }}
          >
            Cancelar compra
          </Button>{" "}
          {/* <Button variant="primary" size="lg">
            Modificar Compra
          </Button>{" "} */}
          <Button
            className="registerbut"
            onClick={confirmarcompra}
            variant="registerbut" size="lg">
            COMPRAR!
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
