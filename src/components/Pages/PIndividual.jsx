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
                        <h2>Nombre                        
                            <p>Categoria</p>
                        </h2>
                        <h2>$3599.99</h2>
                        <i> <img className="imgval" src="https://icongr.am/fontawesome/truck.svg?size=128&color=44ff00" alt="" /> Envio Gratis</i>
                        <i> <img className="imgval" src="https://icongr.am/octicons/check.svg?size=128&color=44ff00" alt="" /> Stock disponible</i>
                        <i> <img className="imgval" src="https://icongr.am/simple/adguard.svg?size=128&color=44ff00&colored=false" alt="" /> Garantia 6 meses</i>
                    </div>
                    <div className="contenido1">
                        <h2>Caracteristicas</h2>
                        <p>Descripcion</p>
                        <h2>Cantidad:
                            <select className="selectunit" style={{ height: "25px", fontSize: "15px" }} aria-label="Default select example">
                                <option selected>1 Unidad</option>
                                <option value="1">2 unidad</option>
                                <option value="2">3 unidades</option>
                                <option value="3">4 unidades</option>
                                <option value="4">+5 unidades</option>
                            </select>
                            <p style={{ fontSize: "25px" }} >Disponibles:15 unidades</p>
                        </h2>
                        <Button className="btncompra" > Agregar al carrito </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PIndividual
