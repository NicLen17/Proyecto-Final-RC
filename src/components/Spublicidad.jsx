import React from 'react'
import './Spublicidad.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';
import { Autoplay, Navigation } from 'swiper/core';
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'


// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Spublicidad() {


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div>
            <div data-aos="fade-down-right" className="titulo2">
                <p>Aprovecha nuestras ofertas mensuales</p>
            </div>
            <Swiper data-aos="flip-left" loop={true} autoplay={false} slidesPerView={1} spaceBetween={0} pagination={{
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
                                <img src="https://www.trecebits.com/wp-content/uploads/2020/01/Samsung-S10-Lite-800x445.jpg" alt="" />
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
                                <img src="https://personal.vteximg.com.br/arquivos/h1-samsung-tienda-mobile02.jpg?v=637432871816100000" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
