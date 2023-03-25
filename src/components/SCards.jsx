import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import './SCards.css'
import { Tabs, Tab } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"
import axios from "axios";

export default function Cards(prod) {

  const [products, setProducts] = useState([]);

  const productos = async () => {
    const { data } = await axios.get("/productos");
    setProducts(data);
  };
  productos()

  const sliceproducts = products.slice(0, 10)

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div>
      <section className="pagos">
        <div data-aos="fade-up" className="metodos">
          <img src="https://media.istockphoto.com/vectors/delivery-truck-icon-vector-cargo-van-moving-fast-shipping-vector-id637864518?k=6&m=637864518&s=612x612&w=0&h=dhCH-S5hDTmau_t1clY0arGlahWyW9w3-Py_knkQbCs=" alt="" />
          <p>Envio gratis</p>
        </div>
        <div data-aos="fade-down" className="metodos">
          <img src="https://static.vecteezy.com/system/resources/previews/002/299/361/original/realistic-green-blue-and-red-credit-card-mockup-template-illustration-free-vector.jpg" alt="" />
          <p>Aceptamos debito y credito</p>
        </div>
        <div data-aos="fade-up" className="metodos">
          <img src="https://image.freepik.com/vector-gratis/dibujos-animados-dinero-mano-concepto-pagos-efectivo-empresario-manos-toma-dinero-cambio_221062-38.jpg" alt="" />
          <p>Compra en efectivo</p>
        </div>
        <div data-aos="fade-down" className="metodos">
          <img className="otrosmetodos" src="https://s3.eu-west-2.amazonaws.com/transeop/Blog/metodos-pago.jpg" alt="" />
          <p>Otros metodos de pago</p>
        </div>
      </section>
      <section data-aos="fade-up" className="titulo">
        <div>Productos populares</div>
      </section>
      <div data-aos="fade-up">
        <Tabs data-aos="fade-up" fill variant="tabs" className="navproductos" defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab className="tabss" eventKey="home" title="Tablets">
          <div className="flexcard">
              {sliceproducts.map((prod) => {
                return (prod.categoria === "TABLET" && ( 
                  <NavLink
                    key={prod._id}
                    style={{ textDecorationLine: "none" }}
                    to={`/individual/${prod._id}`}
                    exact
                    as={NavLink}
                  >
                    <div className="cardprincipal">
                      <div className="cardimg">
                        <img src={prod.img[0]} alt="" />
                      </div>
                      <div className="contenidocard">
                        <h2>{prod.modelo}</h2>
                        <div className="module2 line-clamp2">
                          <h6>{prod.descripcion}</h6>
                        </div>
                      </div>
                    </div>
                  </NavLink>)
                );
              })}
            </div>
          </Tab>
          <Tab className="tabss" eventKey="profile" title="Celulares">
            <div className="flexcard">
              {sliceproducts.map((prod) => {
                return (prod.categoria === "CELULAR" && (
                  <NavLink
                    key={prod._id}
                    style={{ textDecorationLine: "none" }}
                    to={`/individual/${prod._id}`}
                    exact
                    as={NavLink}
                  >
                    <div className="cardprincipal">
                      <div className="cardimg">
                        <img src={prod.img[0]} alt="" />
                      </div>
                      <div className="contenidocard">
                        <h2>{prod.modelo}</h2>
                        <div className="module2 line-clamp2">
                          <h6>{prod.descripcion}</h6>
                        </div>
                      </div>
                    </div>
                  </NavLink>)
                );
              })}
            </div>
          </Tab>
          <Tab className="tabss" eventKey="contact" title="Accesorios">
            <div className="flexcard">
              <a style={{ textDecorationLine: "none" }} href="/productos">
                <div className="cardprincipal">
                  <div className="cardimg">
                    <img className="imgsa" src="https://celularya.com/show_image_producto_detalle.php?image=940&name=cargador-y-cable-de-datos-travel-adapter-fast-charging-celularya.png" alt="" />
                  </div>
                  <div className="contenidocard">
                    <h2>Cargadores</h2>
                    <p>Tipo-A, Tipo-C, Micro-USB</p>
                  </div>
                </div>
              </a>
              <a style={{ textDecorationLine: "none" }} href="/productos">
                <div className="cardprincipal">
                  <div className="cardimg">
                    <img src="https://uoopaa.com/wp-content/uploads/2021/02/S1B-1.png" alt="" />
                  </div>
                  <div className="contenidocard">
                    <h2>Fundas y Protectores</h2>
                    <p>Todos los tamaños y diseños</p>
                  </div>
                </div>
              </a>
              <a style={{ textDecorationLine: "none" }} href="/productos">
                <div className="cardprincipal">
                  <div className="cardimg">
                    <img src="https://www.primusgaming.com/media/foto-landing-PHS-101.png" alt="" />
                  </div>
                  <div className="contenidocard">
                    <h2>Audio</h2>
                    <p>Auriculares, Microfonos, Auriculares Bluetooth</p>
                  </div>
                </div>
              </a>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}
