import React from 'react'
import { Button } from 'react-bootstrap'
import './PIndividual.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'


function PIndividual() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div data-aos="fade-down" className="backgroundoP">
            <div className="pcontainers">
                <div className="pcontainer">
                    <div className="pimgcont">
                        <img className="imgpro" src="http://www.freepngimg.com/download/tablet/14-2-tablet-png-picture.png" alt="" />
                    </div>
                    <div className="contenido1">
                        <h2>Memo Pad 10
                            <p>Categoria: <a style={{ textDecorationLine: "none" }} href="tablets">Tablets</a></p>
                        </h2>
                        <h2>$13.999,00</h2>
                        <i> <img className="imgval" src="https://icongr.am/fontawesome/truck.svg?size=128&color=44ff00" alt="" /> Envio Gratis</i>
                        <i> <img className="imgval" src="https://icongr.am/octicons/check.svg?size=128&color=44ff00" alt="" /> Stock disponible</i>
                        <i> <img className="imgval" src="https://icongr.am/simple/adguard.svg?size=128&color=44ff00&colored=false" alt="" /> Garantia 6 meses</i>
                    </div>
                    <div className="contenido1">
                        <div>
                            <h2 className="">Caracteristicas</h2>
                            <p style={{ fontSize: "15px", maxInlineSize: "415px", marginTop: "20px", textJustify: "initial" }}>El iPhone 11 es el que menor batería tiene sobre el papel de los tres dispositivos lanzados en 2019, pero ni mucho menos es una mala autonomía. Gracias a la gestión del procesador y del buen hacer de iOS 13 podemos aguantar perfectamente un día e incluso algo más sin necesidad de conectarlo a la corriente
                            </p>
                        </div>
                        <Button className="btncompra" variant="btncompra" > Agregar al carrito </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PIndividual
