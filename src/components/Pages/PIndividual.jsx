import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import './PIndividual.css'
import Aos from 'aos'
import "aos/dist/aos.css"

function PIndividual() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    return (
        <div data-aos="fade-down" className="backgroundoP">
            <div className="pcontainers">
                <div className="pcontainer">
                    <div className="pimgcont">
                        <img className="imgpro" src="https://redragonla.com/wp-content/uploads/2021/04/H350W-RGB-1-PNG-WEB-1-512x512.png" alt="" />
                    </div>
                    <div className="contenido1">
                        <h2>Nombre
                            <p>Categoria <a style={{ textDecorationLine: "none" }} href="celulares">Link</a></p>
                        </h2>
                        <h2>$3599.99</h2>
                        <i> <img className="imgval" src="https://icongr.am/fontawesome/truck.svg?size=128&color=44ff00" alt="" /> Envio Gratis</i>
                        <i> <img className="imgval" src="https://icongr.am/octicons/check.svg?size=128&color=44ff00" alt="" /> Stock disponible</i>
                        <i> <img className="imgval" src="https://icongr.am/simple/adguard.svg?size=128&color=44ff00&colored=false" alt="" /> Garantia 6 meses</i>
                    </div>
                    <div className="contenido1">
                        <div>
                            <h2 className="">Caracteristicas</h2>
                            <p style={{ fontSize: "15px", maxInlineSize: "415px", marginTop: "20px", textJustify: "initial" }}>Equipado con diafragmas de 50 mm, conseguimos un sonido estéreo definido y graves excelentes, mejoran la claridad del sonido y le proporciona un campo de audio fenomenal para escuchar música y lo hace valioso para varios juegos.
                                Micrófono flexible y desmontable, con filtro pop de 4 mm para captar tu voz de forma clara y definida. Perfecto para comunicarte en línea en tus juegos favoritos, o en tus transmisiones de streaming.
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
