<<<<<<< HEAD
// import { Card, Button, Navbar, Nav, NavLink } from 'react-bootstrap'
import { Card, Button, Navbar, Nav, NavLink } from "react-bootstrap";
import React from "react";
import "./SCards.css";
import { Tabs, Tab } from "react-bootstrap";

export default function Cards() {
  return (
    <div>
      <section className="titulo">
        <div>Productos populares</div>
      </section>
      <div>
        <Tabs
          className="navproductos"
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="home" title="Tablets">
            <div className="flexcard">
              <Card className="cards">
                <Card.Img
                  className="cardimg"
                  variant="top"
                  src="https://d500.epimg.net/cincodias/imagenes/2020/01/09/tablets/1578563297_555928_1578563341_noticia_normal.jpg"
                />
                <Card.Body>{/* <Card.Title>Precio</Card.Title> */}</Card.Body>
              </Card>
              <Card className="cards">
                <Card.Img
                  className="cardimg"
                  variant="top"
                  src="https://img.global.news.samsung.com/ar/wp-content/uploads/2019/08/Product-Image-Galaxy-Tab-S6-2.jpg"
                />
                <Card.Body>{/* <Card.Title>Precio</Card.Title> */}</Card.Body>
              </Card>
              <Card className="cards">
                <Card.Img
                  className="cardimg"
                  variant="top"
                  src="https://i.blogs.es/175e48/galaxy-tab-e/1366_2000.jpg"
                />
                <Card.Body>{/* <Card.Title>Precio</Card.Title> */}</Card.Body>
              </Card>
              <Card className="cards">
                <Card.Img
                  className="cardimg"
                  variant="top"
                  src="https://images.samsung.com/is/image/samsung/assets/uy/p6_gro2/p6_initial_pf/tablets/All_PF_Smartphones_720x800_Tab_S7_header_1st.jpg?$ORIGIN_JPG$"
                />
                <Card.Body>{/* <Card.Title>Precio</Card.Title> */}</Card.Body>
              </Card>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Celulares">
            <div className="flexcard">
              <Card className="cards">
                <Card.Img
                  className="cardimg"
                  variant="top"
                  src="https://images.samsung.com/is/image/samsung/latin-galaxy-s20-plus-g985-bts-sm-g985fzpjgto-frontbpurple-thumb-261222598"
                />
                <Card.Body>{/* <Card.Title>Precio</Card.Title> */}</Card.Body>
              </Card>
              <Card className="cards">
                <Card.Img
                  className="cardimg"
                  variant="top"
                  src="https://images.fravega.com/f300/6471af0b982f4f6dd159ae0cdad2a820.jpg"
                />
                <Card.Body>{/* <Card.Title>Precio</Card.Title> */}</Card.Body>
              </Card>
              <Card className="cards">
                <Card.Img
                  className="cardimg"
                  variant="top"
                  src="https://images-na.ssl-images-amazon.com/images/I/81AT%2BFlc%2BEL._AC_SX679_.jpg"
                />
                <Card.Body>{/* <Card.Title>Precio</Card.Title> */}</Card.Body>
              </Card>
              <Card className="cards">
                <Card.Img
                  className="cardimg"
                  variant="top"
                  src="https://images.samsung.com/es/smartphones/galaxy-note20/buy/carousel/mobile/002-note20ultra-kv.jpg?imwidth=720"
                />
                <Card.Body>{/* <Card.Title>Precio</Card.Title> */}</Card.Body>
              </Card>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Accesorios">
            <div className="flexcard">
              <Card className="cards">
                <Card.Img
                  className="cardimg"
                  variant="top"
                  src="https://www.tuexperto.com/wp-content/uploads/2019/02/portada-e1550832415514.jpg"
                />
                <Card.Body>{/* <Card.Title>Precio</Card.Title> */}</Card.Body>
              </Card>
              <Card className="cards">
                <Card.Img
                  className="cardimg"
                  variant="top"
                  src="https://static2.abc.es/media/201205/05/S-Pebble-interior--478x270.jpg"
                />
                <Card.Body>{/* <Card.Title>Precio</Card.Title> */}</Card.Body>
              </Card>
              <Card className="cards">
                <Card.Img
                  className="cardimg"
                  variant="top"
                  src="https://larepublica.pe/resizer/PUH6NejjguwCGzDkKJ-ClR7SxR0=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AXD2IKU6JVHFNJLF4OYH4GVLIY.png"
                />
                <Card.Body>{/* <Card.Title>Precio</Card.Title> */}</Card.Body>
              </Card>
              <Card className="cards">
                <Card.Img
                  className="cardimg"
                  variant="top"
                  src="https://www.todoaccesoriosmoviles.com/wp-content/uploads/2019/12/auriculares-samsung-s7.jpg"
                />
                <Card.Body>{/* <Card.Title>Precio</Card.Title> */}</Card.Body>
              </Card>
=======
import { Card } from 'react-bootstrap'
import React from 'react'
import './SCards.css'
import { Tabs, Tab } from 'react-bootstrap'


export default function Cards() {
    return (
        <div>
            <section className="pagos">
                <div className="metodos">
                    <img src="https://media.istockphoto.com/vectors/delivery-truck-icon-vector-cargo-van-moving-fast-shipping-vector-id637864518?k=6&m=637864518&s=612x612&w=0&h=dhCH-S5hDTmau_t1clY0arGlahWyW9w3-Py_knkQbCs=" alt="" />
                    <p>Envio gratis</p>
                </div>
                <div className="metodos">
                    <img src="https://w7.pngwing.com/pngs/816/12/png-transparent-credit-card-online-banking-payment-mobile-banking-cards-rectangle-service-logo-thumbnail.png" alt="" />
                    <p>Aceptamos debito y credito</p>
                </div>
                <div className="metodos">
                    <img src="https://image.freepik.com/vector-gratis/dibujos-animados-dinero-mano-concepto-pagos-efectivo-empresario-manos-toma-dinero-cambio_221062-38.jpg" alt="" />
                    <p>Compra en efectivo</p>
                </div>
                <div className="metodos">
                    <img className="otrosmetodos" src="https://s3.eu-west-2.amazonaws.com/transeop/Blog/metodos-pago.jpg" alt="" />
                    <p>Otros metodos de pago</p>
                </div>
            </section>
            <section className="titulo">
                <div>Productos populares</div>
            </section>
            <div>
                <Tabs fill variant="tabs" className="navproductos" defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab className="tabss" eventKey="home" title="Tablets">
                        <div className="flexcard">
                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img className="imgsa" src="http://www.freepngimg.com/download/tablet/14-2-tablet-png-picture.png" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h2>Nombre</h2>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img src="https://pngimg.com/uploads/tablet/tablet_PNG8563.png" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h2>Nombre</h2>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img src="http://3nstar.com//wp-content/uploads/2016/02/TB005-2.png" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h2>Nombre</h2>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="tabss" eventKey="profile" title="Celulares">
                        <div className="flexcard">
                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img className="imgsa" src="https://images.samsung.com/is/image/samsung/p6pim/pe/sm-g780fzglltp/gallery/pe-galaxy-s20-fe-g780-357343-sm-g780fzglltp-thumb-327368871?$LazyLoad_Home_IMG$" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h2>Nombre</h2>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img src="https://cdn.tmobile.com/content/dam/t-mobile/ntm/devices/samsung/a71/fg/fg-ss-Galaxy-A71-5G-Black-750x750.png" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h2>Nombre</h2>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img src="https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-12-64gb-purple-53017-mjn13ll-a?$device-lg$" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h2>Nombre</h2>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="tabss" eventKey="contact" title="Accesorios">
                        <div className="flexcard">
                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img className="imgsa" src="https://celularya.com/show_image_producto_detalle.php?image=940&name=cargador-y-cable-de-datos-travel-adapter-fast-charging-celularya.png" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h2>Cargadores</h2>
                                    <p>Tipo-A, Tipo-C, Micro-USB</p>
                                </div>
                            </div>
                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img src="https://uoopaa.com/wp-content/uploads/2021/02/S1B-1.png" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h2>Fundas y Protectores</h2>
                                    <p>Todos los tamaños y diseños</p>
                                </div>
                            </div>
                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img src="http://assets.stickpng.com/thumbs/588a6be8d06f6719692a2d2b.png" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h2>Audio</h2>
                                    <p>Auriculares, Microfonos, Auriculares Bluetooth</p> 
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
>>>>>>> e647b34933ff9948a3418d7413870201e6b1315a
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
