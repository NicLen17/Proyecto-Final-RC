import React from 'react'
import './Spublicidad.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {Pagination} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Spublicidad() {
    return (
    <div>
        <div className="titulo2">
            <h1>Aprobecha nuestras ofertas mensuales</h1>
        </div>
        <Swiper loop={true} slidesPerView={1} spaceBetween={0} pagination={{
                            "clickable": true
                        }} className="mySwiper">
                            <SwiperSlide>
        <div className="publicidad">
            <div className="ofertas">
                <img src="https://images.samsung.com/is/image/samsung/assets/ar/p6_gro2/684x684-Hotweek.jpg?$684_684_JPG$" alt="" />
            </div>
                <div className="ofertasecundarias">
            <div className="ofertas2">
                <img src="https://www.tec.com.pe/wp-content/uploads/2020/02/Galaxy-S20-S20-5G-e1581442508473.jpg" alt="" />
            </div>
            <div className="ofertas2">
                <img src="https://i.blogs.es/a3ceaf/galaxy-a12-a02s/1366_2000.jpg" alt="" />
            </div>
                </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="publicidad">
            <div className="ofertas">
                <img src="https://tiaecuador.vteximg.com.br/arquivos/ids/177592-1000-1000/131076001c.png?v=637535789174930000" alt="" />
            </div>
                <div className="ofertasecundarias">
            <div className="ofertas2">
                <img src="https://www.tusequipos.com/wp-content/uploads/2017/06/ofertas_Samsung_Phone_House_01.jpg" alt="" />
            </div>
            <div className="ofertas2">
                <img src="https://img.global.news.samsung.com/mx/wp-content/uploads/2019/07/MG_GALAXY-FEST-OK.jpeg" alt="" />
            </div>
                </div>
        </div>
        </SwiperSlide>
        </Swiper>
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
    </div>
    )
}
