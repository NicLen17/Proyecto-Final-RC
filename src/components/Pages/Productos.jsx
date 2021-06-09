import React from "react";
import "./Productos.css";
import { Card, Button } from "react-bootstrap";

function Productos() {
  return (
    <div className="sidebar">
      <div class="d-flex" id="wrapper">
        <div class="border-end bg-white" id="sidebar-wrapper">
          <div class="sidebar-heading border-bottom bg-light">Productos</div>
          <div class="list-group list-group-flush">
            <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="celulares"
            >
              Celulares
            </a>
            <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="tablets"
            >
              Tablets
            </a>
            <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="accesorios"
            >
              Accesorios
            </a>
            <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="ofertas"
            >
              Ofertas
            </a>
            <br />
            <br />
            <div class="sidebar-heading border-bottom bg-light">Ayuda</div>
            <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Perfil
            </a>
            <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Configuraciones
            </a>
          </div>
        </div>
        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
              ></div>
            </div>
          </nav>
          <div>
            <div className="flexcardp">
              <Card className="cardsp" style={{ width: "18rem" }}>
                <Card.Img className="cardpimg"
                  variant="top"
                  src="https://http2.mlstatic.com/D_NQ_NP_634554-MLA31848818020_082019-O.jpg"
                />
                <Card.Body>
                  <Card.Title>50.000</Card.Title>
                  <Card.Text className="caracteristicas">
                    <li>Samsumg</li>
                    <li>Samsung Galaxy A50</li>
                    <li>64GB de Almacenamiento</li>
                    <li>4GB Ram</li>
                  </Card.Text>
                  <Button className="loginbut" variant="primary" type="submit">
                    <img className="carritobut" style={{ width: "50px", height: "50px" }} src="https://icongr.am/fontawesome/cart-plus.svg?size=128&color=00ccff" alt="" />
                  </Button>
                </Card.Body>
              </Card>
              <Card className="cardsp" style={{ width: "18rem" }}>
                <Card.Img className="cardpimg"
                  variant="top"
                  src="https://http2.mlstatic.com/D_NQ_NP_634554-MLA31848818020_082019-O.jpg"
                />
                <Card.Body>
                  <Card.Title>50.000</Card.Title>
                  <Card.Text className="caracteristicas">
                    <li>Samsumg</li>
                    <li>Samsung Galaxy A50</li>
                    <li>64GB de Almacenamiento</li>
                    <li>4GB Ram</li>
                  </Card.Text>
                  <Button className="loginbut" variant="primary" type="submit">
                    <img className="carritobut" style={{ width: "50px", height: "50px" }} src="https://icongr.am/fontawesome/cart-plus.svg?size=128&color=00ccff" alt="" />
                  </Button>
                </Card.Body>
              </Card>
              <Card className="cardsp" style={{ width: "18rem" }}>
                <Card.Img className="cardpimg"
                  variant="top"
                  src="https://http2.mlstatic.com/D_NQ_NP_634554-MLA31848818020_082019-O.jpg"
                />
                <Card.Body>
                  <Card.Title>50.000</Card.Title>
                  <Card.Text className="caracteristicas">
                    <li>Samsumg</li>
                    <li>Samsung Galaxy A50</li>
                    <li>64GB de Almacenamiento</li>
                    <li>4GB Ram</li>
                  </Card.Text>
                  <Button className="loginbut" variant="primary" type="submit">
                    <img className="carritobut" style={{ width: "50px", height: "50px" }} src="https://icongr.am/fontawesome/cart-plus.svg?size=128&color=00ccff" alt="" />
                  </Button>
                </Card.Body>
              </Card>
              <Card className="cardsp" style={{ width: "18rem" }}>
                <Card.Img className="cardpimg"
                  variant="top"
                  src="https://http2.mlstatic.com/D_NQ_NP_634554-MLA31848818020_082019-O.jpg"
                />
                <Card.Body>
                  <Card.Title>50.000</Card.Title>
                  <Card.Text className="caracteristicas">
                    <li>Samsumg</li>
                    <li>Samsung Galaxy A50</li>
                    <li>64GB de Almacenamiento</li>
                    <li>4GB Ram</li>
                  </Card.Text>
                  <Button className="loginbut" variant="primary" type="submit">
                    <img className="carritobut" style={{ width: "50px", height: "50px" }} src="https://icongr.am/fontawesome/cart-plus.svg?size=128&color=00ccff" alt="" />
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default Productos;
