import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import './PIndividual.css';
import axios from 'axios';


export default function PIndividual({ productosCarrito, setProductosCarrito }) {
    const [alertSuccess, setalertSuccess] = useState("")
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [alert, setAlert] = useState("");

    useEffect(() => {
        const producto = async () => {
            const { data } = await axios.get(`/productos/${id}`);
            setProduct(data);
        }
        producto()
    }, [id])
    const agregarcarrito = () => {
        if (product.stock === 0) return setAlert("No hay stock!");
        if (!productosCarrito.find(p => p.modelo === product.modelo)) {
           const agregado = [...productosCarrito, product];
            setProductosCarrito(agregado);
            setalertSuccess(`${product.marca} ${product.modelo} agregado al carrito!`);
            setTimeout(() => {
                setAlert("");
            }, 4000);
        }
        else{
        setalertSuccess("");
        setAlert("Este producto ya se encuentra en el carrito");
    }
    
}
localStorage.setItem("agregarcarrito", JSON.stringify(productosCarrito));
return (
    <div className="backgroundoP">
        <div className="pcontainers">
            <NavLink className="ml-2 mt-2" to='/productos' as={NavLink}><img className="btnatras" src="https://icongr.am/fontawesome/arrow-circle-left.svg?size=50&color=currentColor" alt="atras" /></NavLink>
            <div className="pcontainer">
                <div className="pimgcont">
                    <img className="imgpro" src={product.img?.[0]} alt="Producto principal" />
                </div>
            </div>
            <div className="contenido1">
                <h2>{product.marca}  {product.modelo}
                    <p>Categoria: {product.categoria} </p>
                </h2>
                <h2>${product.price}</h2>
                {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
                {alert && <Alert variant="danger">{alert}</Alert>}
                <i> <img className="imgval" src="https://icongr.am/fontawesome/truck.svg?size=128&color=228b22" alt="" /><b>Envio Gratis</b> </i>
                {product.stock > 0 ? (<i> <img className="imgval" src="https://icongr.am/octicons/check.svg?size=128&color=228b22" alt="Stock Disponible" /><b> Stock disponible</b></i>) : (<i> <img className="imgval" src="https://icongr.am/octicons/x.svg?size=128&color=fa0505" alt="Stock No disponible" /><b> No disponible</b></i>)}
                <i> <img className="imgval" src="https://icongr.am/simple/adguard.svg?size=128&color=228b22&colored=false" alt="" /><b>Garantia 6 meses</b> </i>
            </div>
            <div className="contenido1">
                <div>
                    <h2 className="">Caracteristicas</h2>
                    <p style={{ fontSize: "15px", maxInlineSize: "415px", marginTop: "20px", textJustify: "initial" }}>
                        {product.descripcion}
                    </p>
                </div>
                <Button className="btncompra" variant="btncompra" onClick={agregarcarrito} > Agregar al carrito </Button>
            </div>
            <div className="imagenesdesc">
                {product.img?.map((i) => (
                    <div>
                        <img src={i} alt="Producto principal vista 1" />
                    </div>))}
            </div>
        </div>
    </div>

)
}







