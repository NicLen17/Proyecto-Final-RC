import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import './SCards.css'
import { Tabs, Tab } from 'react-bootstrap'
import axios from "axios"
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Cards(prod) {
  

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
          <img src="https://w7.pngwing.com/pngs/816/12/png-transparent-credit-card-online-banking-payment-mobile-banking-cards-rectangle-service-logo-thumbnail.png" alt="" />
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
            <NavLink style={{ textDecorationLine: "none" }} to="/individual/60ce37aca39f3f350c3122bd/" exact as={NavLink}>
                <div className="cardprincipal">
                  <div className="cardimg">
                    <img className="imgsa" src="http://www.freepngimg.com/download/tablet/14-2-tablet-png-picture.png" alt="" />
                  </div>
                  <div className="contenidocard">
                    <h2>Memo Pad 10</h2>
                    <p>
                      Modelo del procesador: RK101. <br />
                      Peso: 532 g. <br />
                      Plataforma: Android.
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink style={{ textDecorationLine: "none" }} to="/individual/60ce38e3a39f3f350c3122be" exact as={NavLink}>
                <div className="cardprincipal">
                  <div className="cardimg">
                    <img src="https://pngimg.com/uploads/tablet/tablet_PNG8563.png" alt="" />
                  </div>
                  <div className="contenidocard">
                    <h2>Tablet Alcatel 1t </h2>
                    <p>
                      Memoria RAM: 2 GB <br />
                      Capacidad: 32 GB <br />
                      Quad core
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink style={{ textDecorationLine: "none" }} to="/individual/60ce39f4a39f3f350c3122bf" exact as={NavLink}>
                <div className="cardprincipal">
                  <div className="cardimg">
                    <img src="http://3nstar.com//wp-content/uploads/2016/02/TB005-2.png" alt="" />
                  </div>
                  <div className="contenidocard">
                    <h2>Tcl Tab 10 Neo + Soporte</h2>
                    <p>
                      Memoria RAM: 2 GB <br />
                      Capacidad: 32 GB <br />
                      Tamaño de la pantalla: 10 "
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          </Tab>
          <Tab className="tabss" eventKey="profile" title="Celulares">
            <div className="flexcard">
            <NavLink style={{ textDecorationLine: "none" }} to="/individual/60ce27f9b131e40c8405ec9a" exact as={NavLink}>
                <div className="cardprincipal">
                  <div className="cardimg">
                    <img className="imgsa" src="https://images.samsung.com/is/image/samsung/p6pim/pe/sm-g780fzglltp/gallery/pe-galaxy-s20-fe-g780-357343-sm-g780fzglltp-thumb-327368871?$LazyLoad_Home_IMG$" alt="" />
                  </div>
                  <div className="contenidocard">
                    <h2>Galaxy S20 Fe</h2>
                    <p>
                      Adreno 650, Octa-core <br />
                      Memoria RAM	6 Gb <br />
                      Almacenamiento disponible	128/256 Gb
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink style={{ textDecorationLine: "none" }} to="/individual/60ce27bbb131e40c8405ec99" exact as={NavLink}>
                <div className="cardprincipal">
                  <div className="cardimg">
                    <img src="https://cdn.tmobile.com/content/dam/t-mobile/ntm/devices/samsung/a71/fg/fg-ss-Galaxy-A71-5G-Black-750x750.png" alt="" />
                  </div>
                  <div className="contenidocard">
                    <h2>Samsumg A71</h2>
                    <p>
                      6 / 8 GB de memoria RAM <br />
                      128 GB de almacenamiento <br />
                      Tamaño: 6,7 pulgadas Infinity-O
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink style={{ textDecorationLine: "none" }} to="/individual/60ce275eb131e40c8405ec98" exact as={NavLink}>
                <div className="cardprincipal">
                  <div className="cardimg">
                    <img src="https://personal.vteximg.com.br/arquivos/ids/403564-400-400/iPhone-11-Pro-Space-Grey-VPlan-5GB-1-1393025.jpg?v=637389272855430000" alt="" />
                  </div>
                  <div className="contenidocard">
                    <h2>Iphone 11 PRO</h2>
                    <p>
                      Cámara trasera triple <br />
                      Resolución de 1792 x 828 pixeles<br />
                      256 GB de Memoria
                    </p>
                  </div>
                </div>
              </NavLink>
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
