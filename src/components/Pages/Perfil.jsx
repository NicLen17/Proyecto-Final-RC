import React from 'react'
import './Perfil.css'
import Button from 'react-bootstrap/Button'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

function Perfil() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div data-aos="fade-down-right" className="perfiluser">
            <Button>Editar perfil</Button>
            <div className="perfilbody">
                <img className="userimg" src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" />
                <p className="username">Pedro</p>
            </div>
            <div className="usercontent">
                <p className="userbio">
                    Joven programador con grandes aspiraciones 
                </p>
            </div>
            <div className="perfilfooter">
                <div className="userdata"><b>
                    <li><img src="https://icongr.am/fontawesome/calendar-o.svg?size=128&color=000000" alt="" /> Fecha de creacion de la cuenta:</li>
                    <li> <img src="https://icongr.am/feather/phone.svg?size=128&color=000000" alt="" /> Celular:</li>
                    <li> <img src="https://icongr.am/fontawesome/envelope.svg?size=128&color=000000" alt="" /> Email:</li>
                    <li> <img src="https://icongr.am/fontawesome/check.svg?size=128&color=04ff00" alt="" />Cuenta verificada:</li></b>
                </div>
            </div>
        </div>
    )
}

export default Perfil
