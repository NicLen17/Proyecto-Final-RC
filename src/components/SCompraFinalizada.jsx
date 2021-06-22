import React, { useState, useEffect } from "react";
import './SCompraFinalizada.css'
import Aos from 'aos'
import "aos/dist/aos.css"

function SCompraFinalizada() {

    let [pcomprado, setPcomprado] = useState([]);

    let comprado = () => {
        let pcomprado =
            JSON.parse(localStorage.getItem('agregarcarrito')) || [];
        setPcomprado(pcomprado);
    }
    useEffect(() => {
        comprado();
    }, []);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div data-aos="fade-up" className="fincont">
            <div className="fintittle">
                <br />
                <br />
                <br />
                <h1>
                    Te agradecemos por confiar en nosotros!
                </h1>
            </div>
            <div className="finimg">
                <img className="finimg1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Black_check.svg/600px-Black_check.svg.png" alt="" />
            </div>
            <h2 style={{color: "white", marginTop:"15px"}}>
                    Disfruta tu nuevo...
                </h2>
            <div className="fintext">
                <p>
                </p>
            </div>
            <div data-aos="fade-up-right" className="contcard">
                {pcomprado.map((c) => (
                    <div className="cardcompra">
                        <div className="compraimg">
                            <img style={{ marginTop: "15px", marginBottom: "15px", maxWidth: "200px", maxHeight: "200px", margin: "auto" }} src={c.img[0]} alt="" />
                        </div>
                        <div className="comprainfo">
                            <p>{c.modelo}
                            </p>
                            <p><b>
                                ${c.price}
                            </b></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SCompraFinalizada
