import React from 'react'
import './Spublicidad.css'

export default function Spublicidad() {
    return (
    <div>
        <div className="titulo2">
            <h1>Aprobecha nuestras ofertas mensuales</h1>
        </div>
        <div className="publicidad">
            <div className="ofertas">
                <img src="https://images.samsung.com/is/image/samsung/assets/ar/p6_gro2/684x684-Hotweek.jpg?$684_684_JPG$" alt="" />
            </div>
                <div className="ofertasecundarias">
            <div className="ofertas2">
                <img src="https://www.tec.com.pe/wp-content/uploads/2020/02/Galaxy-S20-S20-5G-e1581442508473.jpg" alt="" />
            </div>
            <div className="ofertas2">
                <img src="https://i.blogs.es/a3ceaf/galaxy-a12-a02s/1366_2000.jpg" alt="" />
            </div>
                </div>
        </div>
            <section className="pagos">
                <div className="metodos">
                <img src="https://bowa.com.ar/wp-content/uploads/2020/08/3-cuotas-sin-interes.png" alt="" />
                <p>Hasta 6 Cuotas sin interes</p>
                </div>
                <div className="metodos">
                <img src="https://w7.pngwing.com/pngs/816/12/png-transparent-credit-card-online-banking-payment-mobile-banking-cards-rectangle-service-logo-thumbnail.png" alt="" />
                <p>Aceptamos debito y credito</p>
                </div>
                <div className="metodos">
                <img src="https://image.freepik.com/vector-gratis/dibujos-animados-dinero-mano-concepto-pagos-efectivo-empresario-manos-toma-dinero-cambio_221062-38.jpg" alt="" />
                <p>Compra en efectivo</p>
                </div>
                <div className="metodos">
                <img src="https://s3.eu-west-2.amazonaws.com/transeop/Blog/metodos-pago.jpg" alt="" />
                <p>Otros metodos de pago</p>
                </div>
            </section>
    </div>
    )
}
