import './Spublicidad.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Pagination } from 'swiper/core';
import { Autoplay, Navigation } from 'swiper/core';
import Aos from 'aos'
import "aos/dist/aos.css"
import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'



SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Spublicidad() {


    useEffect(() => {
        Aos.init({ duration: 900 });
    }, [])

    return (
        <div>
            <div data-aos="fade-down-right" className="titulo2">
                <p>Aprovecha lo mejor que tenemos para ofrecer</p>
            </div><NavLink to={"productos"}>
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
                    </NavLink>
        </div>
    )
}
