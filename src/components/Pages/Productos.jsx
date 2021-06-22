import React, { useEffect, useState } from "react";
import "./Productos.css";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Aos from 'aos'
import "aos/dist/aos.css"
import axios from "axios"


function Productos() {
  const [products, setProducts] = useState([])
  // const [celulares, setCelulares] = useState("")
  // const [accesorios, setAccesorios] = useState([])
  // const [tablet, setTablet] = useState([])


  useEffect(() => {
    const productos = async () => {
      const { data } = await axios.get('/productos');
      setProducts(data);
    }


    productos();
    Aos.init({ duration: 1000 });
  }, [])

  const filtro = () => {
    const celulares = products.filter((p) => {
      return p.categoria === 'CELULAR';
    })
    const accesorios = products.filter((p) => {
      return p.categoria === 'ACCESORIO';
    })
    const tablet = products.filter((p) => {
      return p.categoria === 'TABLET';
    })
    // setCelulares(celulares)
    // setAccesorios(accesorios)
    // setTablet(tablet);
  }
  {/* <button onClick={() => filtro()}>LLamar a celulares solamente</button> */ }

  return (
    <div className="sideynav">
      <div data-aos="fade-up" className="productoscont" >
        <button onClick={() => filtro()}>LLamar a celulares solamente</button>
        <h1 className="text-center mt-3 shadow flexcardp">Celulares</h1>
        <div className="flexcardp">
          {products.map((prod) => {
                   if (prod.categoria === "CELULAR") {
              return (
                <NavLink key={prod._id} style={{ textDecorationLine: "none" }} to={`/individual/${prod._id}`} exact as={NavLink}>
                  <Card data-aos="fade-up" className="cardsp">
                    <Card.Img className="cardpimg"
                      variant="top"
                      src={prod.img[0]}
                      alt="imagen celular" />
                    <Card.Body>
                      <Card.Title className="cardtitulo">${prod.price}</Card.Title>
                      <Card.Title className="caracteristicas">
                        <div>
                          <h5><b>{prod.marca}</b></h5>
                          <h5><b>{prod.modelo}</b></h5>
                          <div className="module line-clamp">
                            <h6>{prod.descripcion}</h6>
                          </div>
                        </div>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </NavLink>
              )}})}
        </div>
        <h1 className="text-center mt-5 shadow">Tablet</h1><br className="solid" />
        <div className="flexcardp">
          {products.map((prod) => {
                        if (prod.categoria === "TABLET") {
              return (
                <NavLink key={prod._id} style={{ textDecorationLine: "none" }} to={`/individual/${prod._id}`} exact as={NavLink}>
                  <Card data-aos="fade-up" className="cardsp">
                    <Card.Img className="cardpimg"
                      variant="top"
                      src={prod.img[0]}
                      alt="imagen celular" />
                    <Card.Body>
                      <Card.Title className="cardtitulo">${prod.price}</Card.Title>
                      <Card.Title className="caracteristicas">
                        <div>
                          <h5><b>{prod.marca}</b></h5>
                          <h5><b>{prod.modelo}</b></h5>
                          <div className="module line-clamp">
                            <h6>{prod.descripcion}</h6>
                          </div>
                        </div>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </NavLink>
              )}})}
        </div>
        <h1 className="text-center mt-5 shadow">Accesorios</h1>
        <div className="flexcardp">
          {products.map((prod) => {
            if (prod.categoria === "ACCESORIOS") {
              return (
                <NavLink key={prod._id} style={{ textDecorationLine: "none" }} to={`/individual/${prod._id}`} exact as={NavLink}>
                  <Card data-aos="fade-up" className="cardsp">
                    <Card.Img className="cardpimg"
                      variant="top"
                      src={prod.img[0]}
                      alt="imagen celular" />
                    <Card.Body>
                      <Card.Title className="cardtitulo">${prod.price}</Card.Title>
                      <Card.Title className="caracteristicas">
                        <div>
                          <h5><b>{prod.marca}</b></h5>
                          <h5><b>{prod.modelo}</b></h5>
                          <div className="module line-clamp">
                            <h6>{prod.descripcion}</h6>
                          </div>
                        </div>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </NavLink>
              )}})}
        </div>
      </div>
    </div>
  );
}

export default Productos;
