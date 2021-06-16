import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Tabs, Tab, Table } from 'react-bootstrap'
import AgregadoProducto from '../AgregadoProducto'
import './Admin.css'

function Admin() {
    const [products, setProducts] = useState([])
    const [mensajes, setMensajes] = useState([])
    const [lusers, setLusers] = useState([]);

    useEffect(() => {
        const productos = async () => {
            const { data } = await axios.get('/productos');
            setProducts(data);
        }
        const mensajes = async () => {
            const { data } = await axios.get('/mensajes')
            setMensajes(data)
        }

        const getListaUsuarios = async () => {
            const { data } = await axios.get("usuarios");
            setLusers(data);
        };
        productos();
        mensajes();
        getListaUsuarios();



    }, []);



    const handleSubmit_activo = async (event) => {
        // const [usersactual, setUsersactual] = useState([]);

        // useEffect(() => {
        //   const getUsuarioactual = async () => {
        //     const { data } = await axios.get("usuarios");
        //     setUsersactual(data);
        //   };

        //   getUsuarioactual();
        // }, []);
        console.log("Deshabilitar/HAbilitar Usuario");
    };

    return (
        <div>
            <AgregadoProducto />
            <div className="tablacont">
                <Tabs fill variant="tabs" defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 Tabsh">
                    <Tab className="colortab" eventKey="home" title="Productos">
                        <div>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Categoria</th>
                                        <th>Marca</th>
                                        <th>Modelo</th>
                                        <th>Descripcion</th>
                                        <th>Color</th>
                                        <th>imagen</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr>
                                            <td>{product.categoria}</td>
                                            <td>{product.marca}</td>
                                            <td>{product.modelo}</td>
                                            <td>{product.descripcion}</td>
                                            <td>{product.color}</td>
                                            <td><img src={product.img} alt="" /></td>
                                        </tr>
                                    ))
                                    }


                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Usuarios">
                        <div>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Teléfono</th>
                                        <th>Email</th>
                                        <th>Funciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {lusers.map((usuarios) => (
                                        <tr>
                                            <td>{usuarios.nombre}</td>
                                            <td>{usuarios.celular}</td>
                                            <td>{usuarios.email}</td>
                                            <td>
                                                <button
                                                    onClick={handleSubmit_activo}
                                                    type="button"
                                                    class="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                >
                                                    Habilitar/Deshab.
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                    <Tab eventKey="contact" title="Mensajeria">
                        <div>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Nombre y apellido</th>
                                        <th>correo electronico</th>
                                        <th>telefono</th>
                                        <th>mensaje</th>
                                    </tr>
                                </thead>
                                {mensajes.map((msj) => (
                                    <tr>
                                        <td>{msj.nombreyapellido}</td>
                                        <td><a href={msj.email}>{msj.email}</a></td>
                                        <td>{msj.tel}</td>
                                        <td>{msj.mensaje}</td>
                                    </tr>
                                ))
                                }
                            </Table>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Admin
