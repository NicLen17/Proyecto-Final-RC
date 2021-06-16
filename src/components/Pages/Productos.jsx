import React from "react";
import "./Productos.css";
import { Card, Button } from "react-bootstrap";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

function Productos() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className="sideynav">
      <div data-aos="fade-up" className="productoscont" >
        <div className="sidebar1">
        </div>
        <div className="flexcardp">
          <Card className="cardsp" style={{ width: "18rem" }}>
            <Card.Img className="cardpimg"
              variant="top"
              src="https://http2.mlstatic.com/D_NQ_NP_634554-MLA31848818020_082019-O.jpg"
            />
            <Card.Body>
              <Card.Title>50.000 <a href="/individual"><a href="/individual"><i><img style={{width: "25px", height: "25px", marginBottom: "5px"}} src="https://icongr.am/fontawesome/cart-plus.svg?size=128&color=000000" alt="" /></i></a></a></Card.Title>
              <Card.Text className="caracteristicas">
                <li>Samsumg</li>
                <li>Samsung Galaxy A50</li>
                <li>64GB de Almacenamiento</li>
                <li>4GB Ram</li>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardsp" style={{ width: "18rem" }}>
            <Card.Img className="cardpimg"
              variant="top"
              src="https://http2.mlstatic.com/D_NQ_NP_634554-MLA31848818020_082019-O.jpg"
            />
            <Card.Body>
              <Card.Title>50.000 <a href="/individual"><i><img style={{width: "25px", height: "25px", marginBottom: "5px"}} src="https://icongr.am/fontawesome/cart-plus.svg?size=128&color=000000" alt="" /></i></a></Card.Title>
              <Card.Text className="caracteristicas">
                <li>Samsumg</li>
                <li>Samsung Galaxy A50</li>
                <li>64GB de Almacenamiento</li>
                <li>4GB Ram</li>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardsp" style={{ width: "18rem" }}>
            <Card.Img className="cardpimg"
              variant="top"
              src="https://http2.mlstatic.com/D_NQ_NP_634554-MLA31848818020_082019-O.jpg"
            />
            <Card.Body>
              <Card.Title>50.000 <a href="/individual"><i><img style={{width: "25px", height: "25px", marginBottom: "5px"}} src="https://icongr.am/fontawesome/cart-plus.svg?size=128&color=000000" alt="" /></i></a></Card.Title>
              <Card.Text className="caracteristicas">
                <li>Samsumg</li>
                <li>Samsung Galaxy A50</li>
                <li>64GB de Almacenamiento</li>
                <li>4GB Ram</li>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardsp" style={{ width: "18rem" }}>
            <Card.Img className="cardpimg"
              variant="top"
              src="https://http2.mlstatic.com/D_NQ_NP_634554-MLA31848818020_082019-O.jpg"
            />
            <Card.Body>
              <Card.Title>50.000 <a href="/individual"><i><img style={{width: "25px", height: "25px", marginBottom: "5px"}} src="https://icongr.am/fontawesome/cart-plus.svg?size=128&color=000000" alt="" /></i></a></Card.Title>
              <Card.Text className="caracteristicas">
                <li>Samsumg</li>
                <li>Samsung Galaxy A50</li>
                <li>64GB de Almacenamiento</li>
                <li>4GB Ram</li>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      </div>
  );
}

export default Productos;
