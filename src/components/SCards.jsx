import { Card, Button, Navbar, Nav, NavLink } from 'react-bootstrap'
import React from 'react'
import './SCards.css'
import {Tabs, Tab} from 'react-bootstrap'


export default function Cards() {
    return (
        <div>
            <section className="titulo">
                <div>Productos populares</div>
            </section>
            <div>
                <Tabs  className="navproductos" defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab className="tabss" eventKey="home" title="Tablets">
                    <div className="flexcard">
                    <Card className="cards">
                    <Card.Img className="cardimg" variant="top" src="https://d500.epimg.net/cincodias/imagenes/2020/01/09/tablets/1578563297_555928_1578563341_noticia_normal.jpg" />
                    <Card.Body>
                        {/* <Card.Title>Precio</Card.Title> */}
                    </Card.Body>
                </Card>
                <Card className="cards">
                    <Card.Img className="cardimg" variant="top" src="https://img.global.news.samsung.com/ar/wp-content/uploads/2019/08/Product-Image-Galaxy-Tab-S6-2.jpg" />
                    <Card.Body>
                        {/* <Card.Title>Precio</Card.Title> */}
                    </Card.Body>
                </Card>
                <Card className="cards">
                    <Card.Img className="cardimg" variant="top" src="https://i.blogs.es/175e48/galaxy-tab-e/1366_2000.jpg" />
                    <Card.Body>
                        {/* <Card.Title>Precio</Card.Title> */}
                    </Card.Body>
                </Card>
                <Card className="cards">
                    <Card.Img className="cardimg" variant="top" src="https://images.samsung.com/is/image/samsung/assets/uy/p6_gro2/p6_initial_pf/tablets/All_PF_Smartphones_720x800_Tab_S7_header_1st.jpg?$ORIGIN_JPG$" />
                    <Card.Body>
                        {/* <Card.Title>Precio</Card.Title> */}
                    </Card.Body>
                </Card>
            </div>
                    </Tab>
                    <Tab className="tabss" eventKey="profile" title="Celulares">
                    <div className="flexcard">
                    <Card className="cards">
                    <Card.Img className="cardimg" variant="top" src="https://images.samsung.com/is/image/samsung/latin-galaxy-s20-plus-g985-bts-sm-g985fzpjgto-frontbpurple-thumb-261222598" />
                    <Card.Body>
                        {/* <Card.Title>Precio</Card.Title> */}
                    </Card.Body>
                </Card>
                <Card className="cards">
                    <Card.Img className="cardimg" variant="top" src="https://images.fravega.com/f300/6471af0b982f4f6dd159ae0cdad2a820.jpg" />
                    <Card.Body>
                        {/* <Card.Title>Precio</Card.Title> */}
                    </Card.Body>
                </Card>
                <Card className="cards">
                    <Card.Img className="cardimg" variant="top" src="https://images-na.ssl-images-amazon.com/images/I/81AT%2BFlc%2BEL._AC_SX679_.jpg" />
                    <Card.Body>
                        {/* <Card.Title>Precio</Card.Title> */}
                    </Card.Body>
                </Card>
                <Card className="cards">
                    <Card.Img className="cardimg" variant="top" src="https://images.samsung.com/es/smartphones/galaxy-note20/buy/carousel/mobile/002-note20ultra-kv.jpg?imwidth=720" />
                    <Card.Body>
                        {/* <Card.Title>Precio</Card.Title> */}
                    </Card.Body>
                </Card>
            </div>
                    </Tab>
                    <Tab className="tabss" eventKey="contact" title="Accesorios">
                    <div className="flexcard">
                <Card className="cards">
                    <Card.Img className="cardimg" variant="top" src="https://www.tuexperto.com/wp-content/uploads/2019/02/portada-e1550832415514.jpg" />
                    <Card.Body>
                        {/* <Card.Title>Precio</Card.Title> */}
                    </Card.Body>
                </Card>
                <Card className="cards">
                    <Card.Img className="cardimg" variant="top" src="https://static2.abc.es/media/201205/05/S-Pebble-interior--478x270.jpg" />
                    <Card.Body>
                        {/* <Card.Title>Precio</Card.Title> */}
                    </Card.Body>
                </Card>
                <Card className="cards">
                    <Card.Img className="cardimg" variant="top" src="https://larepublica.pe/resizer/PUH6NejjguwCGzDkKJ-ClR7SxR0=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/AXD2IKU6JVHFNJLF4OYH4GVLIY.png" />
                    <Card.Body>
                        {/* <Card.Title>Precio</Card.Title> */}
                    </Card.Body>
                </Card>
                <Card className="cards">
                    <Card.Img className="cardimg" variant="top" src="https://www.todoaccesoriosmoviles.com/wp-content/uploads/2019/12/auriculares-samsung-s7.jpg" />
                    <Card.Body>
                        {/* <Card.Title>Precio</Card.Title> */}
                    </Card.Body>
                </Card>
            </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}


