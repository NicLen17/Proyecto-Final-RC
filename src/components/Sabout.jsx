import './Sabout.css'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';
import  {Autoplay, Navigation} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay,Pagination,Navigation]);

function Sabout() {
    return (
        <div className="about">
            <div className="contentabout">
                <br />
                <p>P h o n e    P i x e l</p>
                <div className="subtitulo">
                    <h3>Somos la nueva empresa de telefonia al alcance de todos</h3>
                    <>
                        <Swiper autoplay={true} loop={true} slidesPerView={1} spaceBetween={0} pagination={{
                            "clickable": true
                        }} className="mySwiper">
                            <SwiperSlide><img className="slogan" src="https://tienda.claro.com.ar/wcsstore/Claro/Attachment/lanzamiento-samsung-galaxy-s21-evoucher-claro-desktop.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className="slogan" src="https://doto.vteximg.com.br/arquivos/samsung-galaxy-s20-fe-ghosting.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className="slogan" src="https://tienda.claro.com.ar/wcsstore/Claro/Attachment/samsung-galaxy-a72-claro-tienda-desktop.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className="slogan" src="https://personal.vteximg.com.br/arquivos/h1-samsung-tienda-desktop02.png?v=637432871810700000" alt="" /></SwiperSlide>
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    )
}


export default Sabout
