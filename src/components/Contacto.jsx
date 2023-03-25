import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import './Sabout.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper/core';
import './Contacto.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import axios from "axios";



SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Contacto() {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});
  const [alert, setAlert] = useState("");
  const [alertSuccess, setalertSuccess] = useState("")

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const handleSubmit = async (e) => {
    const formulario = e.currentTarget;
    e.preventDefault();
    setValidated(true);
    if (formulario.checkValidity() === false) {
      return e.stopPropagation();
    }
    try {
      await axios.post("/mensajes", input);
      formulario.reset()
      setalertSuccess("Mensaje enviado. Gracias en breve le responderemos");
      setValidated(false);
    } catch (error) {
      error.response.data.msg
        ? setAlert(error.response.data.msg)
        : setAlert("este error");
    }
    setTimeout(() => {
      setAlert("");
  }, 5000);
  };
  const handleChange = (e) => {
    setAlert("");
    const { name, value } = e.target;
    const mensaje = { ...input, [name]: value };
    setInput(mensaje);
  }

  return (
    <div data-aos="fade-down-right">
      <div className="about">
        <div className="contentabout">
          <br />
          <p className="tittleabout">P h o n e    P i x e l</p>
          <div className="subtitulo">
            <h3>Somos la nueva empresa de telefonia al alcance de todos</h3>
            <Swiper autoplay={true} loop={true} slidesPerView={1} spaceBetween={0} pagination={{
              "clickable": true
            }} className="mySwiper">
              <SwiperSlide><img style={{objectFit: "fill"}} className="slogan" src="https://www.xiaomiadictos.com/wp-content/uploads/2020/05/mejores-smartphones-xiaomi-menos-250-euros-1.jpg" alt="slogan" /></SwiperSlide>
              <SwiperSlide><img style={{objectFit: "fill"}} className="slogan" src="https://doto.vteximg.com.br/arquivos/samsung-galaxy-s20-fe-ghosting.png" alt="slogan" /></SwiperSlide>
              <SwiperSlide><img style={{objectFit: "fill"}} className="slogan" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCA8VFRIRDxASDw8VEhIRDw8PDxIPDw8PGBQZGRgUGBgcIS4nHB4rIRoYJjgoLC8zQz01GiQ+QD80Py80NTEBDAwMDw8QHxISGDQhIyQ0MTQ0NDE0NDQ0NDQ0NDQ0NDQxNDE0MTQxMTE1NDQ0NDE0MTE0NDE0MTQ0MTQ2NDQ0NP/AABEIAJUBUgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAgMFBgQBB//EAEcQAAICAQEDBQwGBwgCAwAAAAABAhEDBAUSISIxcrGzEzI0QVFhcXN0obLBBiMkMzVCFFJigYKRtJKiwsPE0uHwhNEVRFP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAgEG/8QAMREAAgECAggEBQUBAAAAAAAAAAECAxEEIRIxMjNhcYGxUaHB8AUiQZHRI0JicvET/9oADAMBAAIRAxEAPwCvoKGoKNskFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoKGoKAFoBqAAfdDdJKCge2I90N0koKAsR7obpJQUBYj3Q3SSgoCxHuhuklBQFjmnvyl3PEo76g8k5ztww4/wBZpcW3TpeZnPjyQup6iafleKG7/Jc3vLfZUF3LWT8csih6IxjBJe+X8zK7R5MpeRHGu/ApyqNyNBj0uWX3U8OZeRZIxn/Zluv3CZo5ofe4MkF5XGSX82q95nI5JxjvqM3i/wD1S5HB035d1Pg5VV+Ms9JtjUwpQyzirXBTaTV+QijUb1NPy/PYlTfi1zz/ABYttLhnkvcW6owU8k5q44oO91Unypyp0r5lb8g0HhXCWR35ZY47v91Fzpnelyzff5NTk35eOW7OMF7omS101FybdJfuIpSk87kl87F3HQuX3coT80Mi3v7MqZBqNPOCbnCUF+1FrrRRLWNVLdyLE6Uc261CVvdT48VFy4KTVNlli2pni4KOSaW8rSk6a9Bwq8/G52rPU/fvgcet1k6y9yqEMSXdsklvNTatY4rxyrj5vcUuHbGp52015Jc/7+HyLrWx+wOb4yyZ8mSb8bbyNdSS/cZlv93pIZVZyd7kdy2x7emu/wAd+ipf+uo6Y/SDClcouPo/5SXvKPLinFKcoSUJVuTcajJPvX5Un4m6vxEDregnzb8E/RfE6jXqL9wuy62ttTKlv424QbUYJRvJkk3JeeuMZ836vnRxx2pro8ZY8kl6cWT3KN+8sdXFb+NRvcjFOF98vsmndvz3OX8zxIuUKMqsdOU2s/oyxSo6cdJs58f0o3eGWFP9qEsXVvHZg+kenlzqUfPSnH3O/cRvyPivI+JyZtDglz4435Y8h/zRI6NWOqpfmvU5lSa+pfYto6eXe5YeiT3H/KVHXGnxTTXlXFHzvXaV45XGcljae63yt2X6rOnRabVUnGcYSfFJuUZV53HmIY1aulo6F2vAicrazd7obpmMefaUPyyyx/ZnCfukt5ky+kcoeEYZw8SeTFPCr/vX7iR1lHbi480cqrBu2kjQ7obpBoNoYs0d7HK676P5onXRKmmrpkhHuhuklBR6e2I90N0koKAsR7obpJQUBYj3Q3SSgoCxHuhuklBQFiPdPR6ACw1BQ9BR4BKCh6CgBKCh6CgBKCh6CgBKCh6CgB9meD6n2j/YZ3WQTzwjJKUXkinFq00/EzRbN8H1XtD64FHro1qMfrY9ZytcuS9+ZnyfzLr6FJLJjc8WRyxRhjhHHljPJGOSMYWpwjBu5qcXXJT4yknXFnuhk3DG3xe7jt+Xgil1+N3fDjykrt1fuLfQvkYujDqRRwm19izN5H0rR+Bf+Tn7YzGqxxeTdklKLWa01adYMjXvSNPpPAl7Tn7dmc1kayr0ZuwyHa1Pp6nctv3wMvly439a541D9H7nkXdUszccHcu5rHdvedVJKkmrpxZa6eTccTfFtQbfncTIazG0vFe6pUnfBxte412m73D0YfCVYHUWdOu/DsfrJ9rIzmGKbkpJNdzyc6viotpmj1/4dj6cu1kZ3Tc8vV5PgZ4cEurzwl3bNKcFGUJ1Dui7qpuDjHF3O7qM92SlVVBceZFfJ8qHTh1nLrsMlbdcOdJp1aunR0vvodOHWG7u41Kxos3fx6Ef6XSHqQZu/XQX9LpBkjXwe5XXuXqLtT+/cVkciZoikiwzibIZIfTQ4nkkdOmgEihWlZFlpkWkZ4t3deJt7tb2+73rXGqqqvgV2midqRzLWYGJld/56nHtTZ2kx6jFm0O8oz3oaiMoxhHecZSUklwfe1/EdVEep/J049ZPRBGKi2lw9+RsfDakqlF3+ja8kJQUPQUdGgJQUPQUAJQUPQUAJQUPQUAJQUPQUAJQD0AA9BQ9BQPRKCh6CgBKCh6CgBKCh6CgBKCh6CgDzSQ3dPqU+P19/wBrcfzKjacfr8XrIF1D7jU+uj8OMqdtOMZ4ZyajFPG5SbpJeVs5W0/6vujNnrjzZg8+pq4yuUbVw4K91tpJ1w52Weh7zH0cfUip1WJNWrfBOT5kpN8F1e8t9F93j6OPqRSwe19izU1H0zDFx0aT5/0nNzefO2Z/aMayr0ZuxyGifgi9on2rKDbEoxnGUmox3clybpK8GRL3tHS/dy9SSe0uvZHzjPqeTuu5RS4R4LjTp3z1buvT5TV6ZcnF6IfCZLU4eFq2qVvmW8421/Ph7zW6bvcXoh1Fameo69pw3dBCL4tZJK/RlkZrT88/VZPgZp9teAx9ZPtpmWxTS322l9XkXF1xcaSOTk4dRqVuyi05X4rSSai0nze4ll30OnDrINZp1uylFtqNJtqlbV8OPmZO++h04dZ67/UGkz9+uh/ptKMjzUd/Hof6fSjwRq4R/pLr3LdLYPGjs2dhlKOV49P+lZo9zccXc8uV9ybkpzUINNtSeNcOZTb8652iXBuyhPFLJHE5ZMWWM57+43BTW63FNp8tNOvyvx0TvV78eGZxU1EOq02KOSSc2sMcuSFQ3cuWMYq+CbSkre7vXxpv09cdFU88FLkYZZE5yXFqM9yKpeOTcV+9+JM5NpTxznOUXKcnJ7091Rhl5MU8iXOnKSnKn+svHZolKd5lhxQz7+uzd2g8cMrmt76qNtNxvey1KNPn48BdpLl+P852M2s7o4cCOmyPJCMZzjB70IzlGMrveipNJ/vQSkNZh1doj1D7zpx6zsorcsuVj6cestaIpK0+i9Ta+FK1F8/RCUFD0FA0hKCh6CgBKCh6CgBKCh6CgBKCh6CgBKPRqAAagokoKB6R0FElBQBHQUSUFAEdBRJQUAR0e0PQUARJ/Z9T69dUCu+kWJSjC/Hjjz8Ud9/ZtT7R/tItuQvHjf7ETmO+S8UzLq5RT/l6MwWo0D37xvcgt1reqTUud0vHx5r/AODsxxUVGK5luxXoXBFztOGk7lgeBz/SKf6Qpd7deL9915ipS5vSjijThF3ims/qSyb8T6LJ/Y17Rk7WRS7ewqVKSTTiuD5nw5i4m/sS9oydrM4NsQ5MH+wivDOpbxiyetk0+L7GEzbFk5y3JbuK2oudSybjjTVLhfFpN+Z85bxSTglwSaSXmLPacdLu4v0dzctz65T8U+HN7/cVv5odJEailqO0TbZ8Bh05dtMyjrxq1415V5DVbZ8Bh6yXbTMpLx1z+IgOSOcHclF1B2qcU5uLVU36G1Z4++h04dZffSeGz1LD/wDHyk4vH9apW6nwrn/NV2vMUL76HTh1niBp88bnHof5GmJoQPXG8i6H+VpzqhjL+HnaCRfoQvTTOVwPMWSMZXOCyQqpQb3bVq6lT3X51zWdksZzZMZdhJMhrRsiWUtFKLrHlwzpuDU+6Q3q4KV8avyI7NNHTR44tTkhKUJJxcJKlx5MpR506XDr5io3CTGSaPF++ZjVpcDvhIJzIYSCcj22ZltZiTly8fTh1l7Rn/z4/WQ+I0dENTePku7Nv4crUnz9ER0FElBRyaBHQUSUFAEdBRJQUAR0FElBQBHQUSUFAEdASUAA9BQ4ACUFDgAJQUOAAlBQ4ACUFDhQBWYn9k1HtWT40dO04Xp8b/Z+RzyilpdSlzfpMviizvzx3tNB/wDe9Ir2r0+bXkZdfdN+El2aMVmjxIa4r0o7NTDizl3eK9KLDXzBPI3f/wBGPtGbt5kW043CD/ZRNlVaGPr8vbTDVxvDF+b5GbB2qw6lyvs3/kuzMvkRBNcqHSfUzsyx4nM48qHS+R3JHsXkebS/D9P/AA9pIy7NVtmKWgwxXMnS9CyzRlWUwKyN99Dpw6yRhhgnOCfNvr3JsA2GGN5P4P8AL05YwxnJo43ll0F8GEuIYzqNS2Rs4WN6C692crxEGTCWqxCTwlulVIa8CiyYyHdLTPhOLJA0YSufPYqFmRwkO2I0G8Soz7XF/Pj9Zj+JGnoy98uHrIfEjV0V6u8fJd2a+AVqb5iUFDgcF4SgocABKChwAEoKHAASgocABKPRgAHoKHoKB0JQUPQUAJQUPQUAJQUPQUAJQUPQUAUzmnpNQ1zPVZPdNL5FpplvaVeZ/IqI+BZ/asvalzsflaavMypXloyhLwfoZlRXw9Tg4vzMlq4cWcW7xXSRb6/HxfpK1x5UekvmaL1kEHkbHO/sEPX5e2mS1eCPp/wkOfwDH67L2syfSccBizdpwfE0q6/SlwaM7qIcTjfCUPT8iz1UOLK7LHlQ9MvhZbmiKDyItsyT0GCS5pNSV89PJNmVZqNqfh+l6MPjkZdlAkFZ5imlODf6y5vK00us9ZG++h04gH0HZsPrZdBfBiL3HjKjY8bzZOgvhgaOECCbtI3MHuF17siWMSWM7e5kcoEtKZ5Ujcqc+Irs2MvssCvz4zWozMHHwsiocDlyKiznA49RDiXoswoStKxzRfLh6yHxo2FGRUKlD1mP4kbFogqu9R8l3Zu4JWg+YlBQ9BRwXBKCh6CgBKCh6CgBKCh6CgBKCh6CgBKAegAHoKHoKPAJQUPQUAJQUPQUAJQUPQUAJQUPR7QCM3HwHP7Vm7Yt/o5K8FdIp4+A5vas3bssvorP6pr/ALzlPG7CfEpU46dKrH+PbM4do4+L9JUOHKj0l8zR7ShxZSyhy49JdTL1KekkzNpvI0Gp8Ah67L2siXZTvFXmZDqfAMfrcvayG2LL6ujHxGUYs25R0qdRcPwcWrhxZVZ48qP8XwsvtZDiyo1MeMf4/hZdjLSiUoMrNq/h+k6GP4pGXZqdrfh+j6EPjZlmUSwKxPzQ6cR2R/mj0kAfTdhL6/L0I/4TTY4mb2Evr8vQXXE08CtVWZtYPcLr3Z64kUok7EaPaZJM5ZwOLPjLKUTnywNWizEx2cWUuSBx5sfEt8uM48mMvxZ82l89yrywpx9Zi7SJrKMzq49763D2sTVURy3j5LvI3cC7wfMjoKHoKPC6JQUPQUAJQUPQUAJQUPQUAJQUPQUAJQD0AA9BQ1BQPRaChqCgBaChqCgBaChqCgBaBIaj1IAysfAM3tWbt5HT9FZ8lr/vOc0Pw/N7Vm/qJh9F586KuMV4FbBZylHxTLnXRuymnj5cOmupl7n4lXOHLh0/kzzC1MjKcdFtHZqvAMXrMnaTI9hz5JJqvAMXrJ9pM49iT4NFXEL5Eb1JXcl4plhqolPq48V6JfCy7zFVrY8V0Z/AzqjPIzUrOxQ7W/D9J6vF8TMszUbW/D9H6vH1sy7IywKxPzR6SJGR/mj6fkAfT9hff5ugviNNBmY2F9/m6C+JmliRTRsYTcrr3ZMeqIsSeERTie1ZWRzyiQTgdk4ETxl+mzExcrlfkxnBmgXGeJW50XqeZj1IqCKbXx4R9bh7WBp2jN7QXJj63B20DTtCe86LvI0PhTvSl/b0QlBQ1BR4agtBQ1BQAtBQ1BQAtBQ1BQAtBQ1BQAtANR6AMAAAAAAAAAAAAAAAIAAMnD8Py+1Zf6iZy/R2TtgBXxOwVsDvTSz5jjl30Ol8mAFShrKmJS/6Mm1X4fh6cvjmVux2eAeV9k1KG8fv6FzIr9d/gyfAwAhpFOqvnM5tj8P0fq8RlmAHZ0eEa75en5MAPGD6fsL7/P0V2kjRwPQPJGthd0uvdksTrxoAETyvqPJISSAC1Ax6m0cWcq84AaNLUZGL1lZtDvF63B20DTsAFTedF3kXvg+6l/b0QAAHJrAAAAAAAAAAAAAAAAAAB//Z" alt="slogan" /></SwiperSlide>
              <SwiperSlide><img style={{objectFit: "fill"}} className="slogan" src="https://www.movilzona.es/app/uploads-movilzona.es/2019/09/mi-mix-3-5g.jpg" alt="slogan" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="row-cols-1">
                <div
                  className="d-flex ml-3"
                  style={{ justifyContent: "space-evenly", maxWidth: "100%" }}
                >
                  <a className="redescontacto" href="https://facebook.com">
                    <img
                      src="https://icongr.am/fontawesome/facebook-official.svg?size=60&color=1002cf"
                      alt="no disponile"
                    />
                  </a>
                  <a className="redescontacto" href="https://www.instagram.com/">
                    <img src="https://icongr.am/fontawesome/instagram.svg?size=60&color=cf0298" alt="imagen no disponile" />
                  </a>
                  <a className="redescontacto" href="https://www.google.com/">
                    <img src="https://icongr.am/fontawesome/google.svg?size=60&color=cf2102" alt="imagen no disponile" />
                  </a>
                  <a className="redescontacto" href="wats">
                    <img src="https://icongr.am/fontawesome/whatsapp.svg?size=60&color=02cf35" alt="imagen no disponile" />
                  </a>
                </div>
              </div>
      </div>
      <div className="body" style={{ marginBottom: "160px", maxWidth: "100%" }}>
        <div className="p-3 contacto" style={{ textAlign: "center", marginTop: "45px" }}>
          <h1>CONTACTA CON NOSOTROS</h1>
          <h3>Podes enviarnos tu consulta</h3>
          <p>
            Completa el formulario con tu consulta y nuestros asesores responderan
            dentro de las 48hs habiles. Tambien podes contactarnos mediante los
            enlaces directos de nuestras redes sociales!
          </p>
        </div>
        <div className="formulario" style={{ maxWidth: "100%" }}>
          <div className="row d-flex flex-wrap" style={{ maxWidth: "100%" }}>
            <div className="d-flex flex-wrap col" style={{ maxWidth: "100%" }}>
              <div
                className="p-5 mx-auto"
                style={{ textAlign: "left", width: "700px" }}
              >{alert && <Alert variant="danger">{alert}</Alert>}
                {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
                <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>

                  <Form.Group
                    style={{ marginTop: "15px" }}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control className="labelform" type="name" placeholder="Nombre y Apellido" required name="nombreyapellido"  maxLength="50" onChange={(e) => handleChange(e)} />
                    <Form.Control.Feedback type="invalid">
                      Se requiere nombre y apellido!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    style={{ marginTop: "15px" }}
                    controlId="exampleForm.ControlInput1"       >
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control className="labelform" type="email" placeholder="Correo@example.com" required maxLength="30" name="email" onChange={(e) => handleChange(e)} />
                    <Form.Control.Feedback type="invalid">
                      Se requiere correo Electronico!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    style={{ marginTop: "15px" }}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control className="labelform" maxLength="10" type="number" placeholder="codigo de area + numero sin 15" required max="999999999999" name="tel" onChange={(e) => handleChange(e)} />
                    <Form.Control.Feedback type="invalid">
                      Se requiere telefono valido!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    style={{ marginTop: "15px" }}
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control className="labelform" minLength="20" maxLength="300" as="textarea" placeholder="Mensaje" required rows={3} name="mensaje" onChange={(e) => handleChange(e)} />
                    <Form.Control.Feedback type="invalid">
                      Se requiere mensaje y un minimo de 20 caracteres!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                  </Form.Group>
                  <Button className="msgbut"
                  variant="msgbut"
                    type="submit"
                    style={{ marginTop: "10px", width: "100%" }}
                  >
                    Enviar
                  </Button>
                </Form>
                <br />
                <p className="msgtext" style={{ fontSize: "12px", textAlign: "justify" }}>
                  Phone Pixels te informa que los datos de caracter personal que
                  proporciones rellenando este formulario seran tratados de manera
                  confidencial. La finalidad de la recogida y tratamiento de los
                  mismos es dar respuesta a solicitudes de contacto y envio de
                  contenidos. La legitimación se realiza a través de tu
                  consentimiento. Los datos que me facilites estarán ubicados en los
                  servidores de nuestro proveedor de hosting XXXX
                  (https://www.phonepixels.com/) en EEUU. Podras acceder,
                  rectificar, limitar y suprimir tus datos a través del email
                  phonepixels@gmail.com asi como el derecho a presentar una
                  reclamación ante una autoridad de control.
                </p>
                <hr />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
