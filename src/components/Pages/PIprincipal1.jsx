import React from 'react'
import { Button } from 'react-bootstrap'
import './PIndividual.css'

function PIndividual() {
    return (
        <div className="backgroundoP">
            <div className="pcontainers">
                <div className="pcontainer">
                    <div className="pimgcont">
                        <img className="imgpro" src="https://images.samsung.com/is/image/samsung/p6pim/pe/sm-g780fzglltp/gallery/pe-galaxy-s20-fe-g780-357343-sm-g780fzglltp-thumb-327368871?$LazyLoad_Home_IMG$" alt="" />
                    </div>
                    <div className="contenido1">
                        <h2>Galaxy S20 Fe
                            <p>Categoria: <a style={{ textDecorationLine: "none" }} href="">Celulares</a></p>
                        </h2>
                        <h2>$69.999,00</h2>
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
                        <Button className="btncompra" > Agregar al carrito </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PIndividual
