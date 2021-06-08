import { Card } from 'react-bootstrap'
import React from 'react'
import './SCards.css'
import { Tabs, Tab } from 'react-bootstrap'


export default function Cards() {
    return (
        <div>
            <section className="titulo">
                <div>Productos populares</div>
            </section>
            <div>
                <Tabs fill variant="tabs" className="navproductos" defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab className="tabss" eventKey="home" title="Tablets">
                        <div className="flexcard">
                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img className="imgsa" src="https://topesdegama.com/app/uploads-topesdegama.com/2021/03/AperTablets.jpg" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h1>Precio</h1>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img src="https://images-na.ssl-images-amazon.com/images/I/61%2Bwysvj4dL._AC_SX425_.jpg" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h1>Precio</h1>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img src="https://s1.eestatic.com/2020/09/03/elandroidelibre/el_androide_libre_517961105_180359768_1200x845.jpg" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h1>Precio</h1>
                                    <ul>
                                        <li></li>
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
                                    <h1>Precio</h1>
                                    <ul>
                                        <li></li>
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
                                    <h1>Precio</h1>
                                    <ul>
                                        <li></li>
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
                                    <h1>Precio</h1>
                                    <ul>
                                        <li></li>
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
                                    <img className="imgsa" src="https://lh3.googleusercontent.com/proxy/4FuND69wPkDcXXwZC4Uf512Q2z0ejhhG6-XZN4iiPhNiZgmUrpc-5eaOl5vgWL1x4PMLgiCaGLHY-cayCvQAGNi2SP7kFT2wvU4MgH2Ahinx8jf75cVGL-D3YAWqxezxBM2b" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h1>Precio</h1>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img src="https://zonaphone.com.co/wp-content/uploads/2020/05/tienda-online-zonaphone-balacas-airpods-manos-libres-compra-por-internet-cambio-de-display-servicio-tecnico-repuestos-accesorios-celulares-samsung-iphone-android-apple-cargadores-cables-blister-case.png" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h1>Precio</h1>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cardprincipal">
                                <div className="cardimg">
                                    <img src="https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/646x1000/7003415.jpg" alt="" />
                                </div>
                                <div className="contenidocard">
                                    <h1>Precio</h1>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}


