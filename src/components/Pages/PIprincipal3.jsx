import React from 'react'
import { Button } from 'react-bootstrap'
import './PIndividual.css'

function PIndividual() {
    return (
        <div className="backgroundoP">
            <div className="pcontainers">
                <div className="pcontainer">
                    <div className="pimgcont">
                        <img className="imgpro" src="https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-12-64gb-purple-53017-mjn13ll-a?$device-lg$" alt="" />
                    </div>
                    <div className="contenido1">
                        <h2>Iphone 11 PRO
                            <p>Categoria <a style={{ textDecorationLine: "none" }} href="">Celulares</a></p>
                        </h2>
                        <h2>$150.000,00</h2>
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
                        <Button className="btncompra" > Agregar al carrito </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PIndividual
