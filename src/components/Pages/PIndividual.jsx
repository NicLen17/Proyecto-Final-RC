import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// importacion del swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';
import './PIndividual.css';
import axios from 'axios';

export default function PIndividual() {
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    
    const producto = async () => {
        const { data } = await axios.get(`/productos/${id}`);
        setProduct(data);
    }
    useEffect(() => {

        producto();
    }, [])

    return (
        <div className="backgroundoP">
            <div className="pcontainers">
                <div className="pcontainer">
                    <div className="pimgcont">
                        <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
                            {product.img?.map((e) => (
                                <SwiperSlide> <img src={e} alt="imagen celulares" /></SwiperSlide>))}
                            </Swiper>
                    </div>
                    <div className="contenido1">
                        <h2>{product.marca}  {product.modelo}
                            <p>Categoria {product.categoria}</p>
                        </h2>
                        <h2>${product.price}</h2>
                        <i> <img className="imgval" src="https://icongr.am/fontawesome/truck.svg?size=128&color=44ff00" alt="" /> Envio Gratis</i>
                        <i> <img className="imgval" src="https://icongr.am/octicons/check.svg?size=128&color=44ff00" alt="" /> Stock disponible</i>
                        <i> <img className="imgval" src="https://icongr.am/simple/adguard.svg?size=128&color=44ff00&colored=false" alt="" /> Garantia 6 meses</i>
                    </div>
                    <div className="contenido1">
                        <div>
                            <h2 className="">Caracteristicas</h2>
                            <p style={{ fontSize: "15px", maxInlineSize: "415px", marginTop: "20px", textJustify: "initial" }}>
                                {product.descripcion}
                            </p>
                        </div>
                        <Button className="btncompra" > Agregar al carrito </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}







