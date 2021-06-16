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
                        <img className="imgpro" src="https://cdn.tmobile.com/content/dam/t-mobile/ntm/devices/samsung/a71/fg/fg-ss-Galaxy-A71-5G-Black-750x750.png" alt="" />
                    </div>
                    <div className="contenido1">
                        <h2>Samsumg A71
                            <p>Categoria: <a style={{ textDecorationLine: "none" }} href="celulares">Celulares</a></p>
                        </h2>
                        <h2>$63.000,00</h2>
                        <i> <img className="imgval" src="https://icongr.am/fontawesome/truck.svg?size=128&color=44ff00" alt="" /> Envio Gratis</i>
                        <i> <img className="imgval" src="https://icongr.am/octicons/check.svg?size=128&color=44ff00" alt="" /> Stock disponible</i>
                        <i> <img className="imgval" src="https://icongr.am/simple/adguard.svg?size=128&color=44ff00&colored=false" alt="" /> Garantia 6 meses</i>
                    </div>
                    <div className="contenido1">
                        <div>
                            <h2 className="">Caracteristicas</h2>
                            <p style={{ fontSize: "15px", maxInlineSize: "415px", marginTop: "20px", textJustify: "initial" }}>El procesador es un Snapdragon 730 de ocho núcleos que viene muy bien acompañado de configuraciones de memoria RAM de 6 y 8 GB. Y como espacio de almacenamiento interno contamos de serie con 128 GB que además podemos decidir ampliar con tarjetas microSD de hasta 512 GB
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
