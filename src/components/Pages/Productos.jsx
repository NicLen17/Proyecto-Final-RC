import React from "react";
import "./Productos.css";
import { Card } from "react-bootstrap";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { NavLink } from "react-router-dom";

function Productos() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className="sideynav">
      <div data-aos="fade-up" className="productoscont" >
        <div className="flexcardp">
          <NavLink style={{ textDecorationLine: "none" }} to="/individual" exact as={NavLink}>
            <Card className="cardsp" style={{ width: "18rem" }}>
              <Card.Img className="cardpimg"
                variant="top"
                src="https://http2.mlstatic.com/D_NQ_NP_634554-MLA31848818020_082019-O.jpg"
              />
              <Card.Body>
                <Card.Title> 50.000 <a href="/individual"><a href="/individual"><i><img style={{ width: "20px", height: "20px", marginBottom: "7px" }} src="https://icongr.am/fontawesome/dollar.svg?size=128&color=00000" alt="" /></i></a></a></Card.Title>
                <Card.Text className="caracteristicas">
                  <p style={{ maxLines: "3" }}>
                    Descirpcion
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Productos;
