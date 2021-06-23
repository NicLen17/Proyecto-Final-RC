import React, { useEffect, useState } from "react";
import "./Productos.css";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

function Productos() {
  const [products, setProducts] = useState([]);
  // const [celulares, setCelulares] = useState("")
  // const [accesorios, setAccesorios] = useState([])
  // const [tablet, setTablet] = useState([])

  useEffect(() => {
    const productos = async () => {
      const { data } = await axios.get("/productos");
      setProducts(data);
    };

    productos();
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="sideynav">
      <div data-aos="fade-up" className="productoscont">
        <br />
        <br />
        <br />

        <ButtonGroup
          size="lg"
          className="container d-flex p-3"
          style={{ justifyContent: "space-between" }}
        >
          <Button variant="outline-dark" href="#celulares">
            <b>Celulares</b>
          </Button>
          <Button variant="outline-dark" href="#tablet">
            <b>Tablets</b>
          </Button>
          <Button variant="outline-dark" href="#accesorios">
            <b>Accesorios</b>
          </Button>
        </ButtonGroup>
        <br />
        <br />
        <br />
        <div id="celulares">
          <h1 className="text-center mt-3 shadow flexcardp">Celulares</h1>
        </div>
        <br />
        <br />
        <br />
        <div className="flexcardp">
          {products.map((prod) => {
            if (prod.categoria === "CELULAR") {
              return (
                <NavLink
                  key={prod._id}
                  style={{ textDecorationLine: "none" }}
                  to={`/individual/${prod._id}`}
                  exact
                  as={NavLink}
                >
                  <Card data-aos="fade-up" className="cardsp">
                    <Card.Img
                      className="cardpimg"
                      variant="top"
                      src={prod.img[0]}
                      alt="imagen celular"
                    />
                    <Card.Body>
                      <Card.Title className="cardtitulo">
                        ${prod.price}
                      </Card.Title>
                      <Card.Title className="caracteristicas">
                        <div>
                          <h5>
                            <b>{prod.marca}</b>
                          </h5>
                          <h5>
                            <b>{prod.modelo}</b>
                          </h5>
                          <div className="module line-clamp">
                            <h6>{prod.descripcion}</h6>
                          </div>
                        </div>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </NavLink>
              );
            } return console.log
          })}
        </div>

        <h1 className="text-center mt-5 shadow" id="tablet">
          Tablet
        </h1>
        <br />
        <br />
        <br />
        <br className="solid" />
        <div className="flexcardp">
          {products.map((prod) => {
            if (prod.categoria === "TABLET") {
              return (
                <NavLink
                  key={prod._id}
                  style={{ textDecorationLine: "none" }}
                  to={`/individual/${prod._id}`}
                  exact
                  as={NavLink}
                >
                  <Card data-aos="fade-up" className="cardsp">
                    <Card.Img
                      className="cardpimg"
                      variant="top"
                      src={prod.img[0]}
                      alt="imagen celular"
                    />
                    <Card.Body>
                      <Card.Title className="cardtitulo">
                        ${prod.price}
                      </Card.Title>
                      <Card.Title className="caracteristicas">
                        <div>
                          <h5>
                            <b>{prod.marca}</b>
                          </h5>
                          <h5>
                            <b>{prod.modelo}</b>
                          </h5>
                          <div className="module line-clamp">
                            <h6>{prod.descripcion}</h6>
                          </div>
                        </div>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </NavLink>
              );
            }return console.log
          })}
        </div>

        <h1 className="text-center mt-5 shadow" id="accesorios">
          Accesorios
        </h1>
        <br />
        <br />
        <br />
        <div className="flexcardp">
          {products.map((prod) => {
            if (prod.categoria === "ACCESORIOS") {
              return (
                <NavLink
                  key={prod._id}
                  style={{ textDecorationLine: "none" }}
                  to={`/individual/${prod._id}`}
                  exact
                  as={NavLink}
                >
                  <Card data-aos="fade-up" className="cardsp">
                    <Card.Img
                      className="cardpimg"
                      variant="top"
                      src={prod.img[0]}
                      alt="imagen celular"
                    />
                    <Card.Body>
                      <Card.Title className="cardtitulo">
                        ${prod.price}
                      </Card.Title>
                      <Card.Title className="caracteristicas">
                        <div>
                          <h5>
                            <b>{prod.marca}</b>
                          </h5>
                          <h5>
                            <b>{prod.modelo}</b>
                          </h5>
                          <div className="module line-clamp">
                            <h6>{prod.descripcion}</h6>
                          </div>
                        </div>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </NavLink>
              );
            }return console.log
          })}
        </div>
      </div>
    </div>
  );
}

export default Productos;
