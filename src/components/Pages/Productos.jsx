import React, { useEffect, useState } from "react";
import "./Productos.css";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Aos from 'aos'
import "aos/dist/aos.css"
import axios from "axios"
import Filtro from '../Filtro'

function Productos() {
  const [products, setProducts] = useState([])
  console.log(products);
  useEffect(() => {
    const productos = async () => {
      const { data } = await axios.get('/productos');
      setProducts(data);
    }
    productos();
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className="sideynav">
      <div data-aos="fade-up" className="productoscont" >
      <Filtro/>
        <div className="flexcardp">
          {products.map((prod) => (
            <NavLink style={{ textDecorationLine: "none" }} to={`/individual/${prod._id}`} exact as={NavLink}>
              <Card data-aos="fade-up" className="cardsp">
                <Card.Img className="cardpimg"
                  variant="top"
                  src={prod.img[0]}/>
                <p>{prod.marca}</p>
                <p>{prod.modelo}</p>
                <Card.Body>
                  <Card.Title className="cardtitulo">${prod.price}</Card.Title>
                  <Card.Text className="caracteristicas">
                    <p style={{ maxLines: "3" }}>
                      {prod.descripcion}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </NavLink>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Productos;
