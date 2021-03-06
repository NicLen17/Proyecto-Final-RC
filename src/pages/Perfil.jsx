import React from "react";
import "./Perfil.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Perfil({ user }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-down-right" className="perfiluser">
      <div className="perfilbody">
        <img
          className="userimg"
          src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
          alt=""
        />
        <p className="username">{user.nombre}</p>
      </div>
      <div className="perfilfooter">
        <div className="userdata">
          <b>
            <li>
              {" "}
              <img
                src="https://icongr.am/feather/phone.svg?size=128&color=000000"
                alt=""
              />{" "}
              Celular:{user.celular}
            </li>
            <li>
              {" "}
              <img
                src="https://icongr.am/fontawesome/envelope.svg?size=128&color=000000"
                alt=""
              />{" "}
              Email: {user.email}
            </li>
            <li>
              {" "}
              <img
                src="https://icongr.am/fontawesome/check.svg?size=128&color=04ff00"
                alt=""
              />
              Cuenta verificada
            </li>
          </b>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
