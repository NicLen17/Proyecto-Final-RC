import React from 'react'
import { Button } from 'react-bootstrap'
import './PIndividual.css'

function PIndividual() {
    return (
        <div className="backgroundoP">
            <div className="pcontainers">
                <div className="pcontainer">
                    <div className="pimgcont">
                        <img className="imgpro" src="https://redragonla.com/wp-content/uploads/2021/04/H350W-RGB-1-PNG-WEB-1-512x512.png" alt="" />
                    </div>
                    <div className="contenido1">
                        <h2>Nombre</h2>
                        <p>Categoria</p>
                    </div>
                    <div className="contenido2">
                        <h2>Precio</h2>
                        <div className="validaciones">
                            <i> <img className="imgval" src="https://icongr.am/fontawesome/truck.svg?size=128&color=44ff00" alt="" /> Envio Gratis</i>
                            <br />
                            <i> <img className="imgval" src="https://icongr.am/octicons/check.svg?size=128&color=44ff00" alt="" /> Stock disponible</i>
                            <br />
                            <i> <img className="imgval" src="https://icongr.am/simple/adguard.svg?size=128&color=44ff00&colored=false" alt="" /> Garantia 6 meses</i>
                        </div>
                    </div>
                    <div>
                        <Button className="btncompra" > Agregar al carrito </Button>
                    </div>
                </div>
                <div className="pcontainerinfo">
                    <div className="contenido1">
                        <h2>Caracteristicas</h2>
                        <li></li>
                        <li></li>
                        <li></li>
                    </div>
                    <div className="contenido2">
                        <h2>Precio</h2>
                        <div className="validaciones">
                            <i> <img className="imgval" src="https://icongr.am/fontawesome/truck.svg?size=128&color=44ff00" alt="" /> Envio Gratis</i>
                            <br />
                            <i> <img className="imgval" src="https://icongr.am/octicons/check.svg?size=128&color=44ff00" alt="" /> Stock disponible</i>
                            <br />
                            <i> <img className="imgval" src="https://icongr.am/simple/adguard.svg?size=128&color=44ff00&colored=false" alt="" /> Garantia 6 meses</i>
                        </div>
                    </div>
                    <div>
                        <Button className="btncompra" > Agregar al carrito </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PIndividual
