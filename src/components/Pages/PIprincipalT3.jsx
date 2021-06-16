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
                        <img className="imgpro" src="http://3nstar.com//wp-content/uploads/2016/02/TB005-2.png" alt="" />
                    </div>
                    <div className="contenido1">
                        <h2>Tcl Tab 10 Neo + Soporte
                            <p>Categoria: <a style={{ textDecorationLine: "none" }} href="">Tablets</a></p>
                        </h2>
                        <h2>$19.999,00</h2>
                        <i> <img className="imgval" src="https://icongr.am/fontawesome/truck.svg?size=128&color=44ff00" alt="" /> Envio Gratis</i>
                        <i> <img className="imgval" src="https://icongr.am/octicons/check.svg?size=128&color=44ff00" alt="" /> Stock disponible</i>
                        <i> <img className="imgval" src="https://icongr.am/simple/adguard.svg?size=128&color=44ff00&colored=false" alt="" /> Garantia 6 meses</i>
                    </div>
                    <div className="contenido1">
                        <div>
                            <h2 className="">Caracteristicas</h2>
                            <p style={{ fontSize: "15px", maxInlineSize: "415px", marginTop: "20px", textJustify: "initial" }}>Sobre los detalles técnicos del Samsung Galaxy S20 FE 5G, vale la pena destacar que la pantalla es de 6.5 pulgadas Full HD, el procesador es Qualcomm Snapdragon 865 y la memoria RAM es de 6GB.
                            </p>
                        </div>
                        <Button className="btncompra" variant="btncompra"> Agregar al carrito </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PIndividual
