import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Tabs, Tab, Table, Alert, Modal, Button, Form, Row, Container, Col, Card, InputGroup } from 'react-bootstrap'
import AgregadoProducto from '../AgregadoProducto'
import './Admin.css'

function Admin() {
    const [products, setProducts] = useState([])
    const [mensajes, setMensajes] = useState([])
    const [lusers, setLusers] = useState([]);
    const [alertSuccess, setalertSuccess] = useState("")
    // estados modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);

    const productos = async () => {
        const { data } = await axios.get('/productos');
        setProducts(data);
    }
    const mensaje = async () => {
        const { data } = await axios.get('/mensajes')
        setMensajes(data)
    }

    useEffect(() => {

        const getListaUsuarios = async () => {
            const { data } = await axios.get("usuarios");
            setLusers(data);
        };
        productos();
        mensaje();
        getListaUsuarios();
    }, []);

    async function deleteProducto(id) {
        console.log(id);
        if (window.confirm("Estas seguro que deseas eliminar?")) {
            await axios.delete(`/productos/${id}`);
            productos();
            setalertSuccess("Producto eliminado correctamente")
        }
    }

    async function deleteMensajes(id) {
        console.log(id);
        if (window.confirm("Estas seguro que deseas eliminar?")) {
            await axios.delete(`/mensajes/${id}`);
            mensaje();
            setalertSuccess("Mensaje eliminado correctamente")
        }
    }

    const handleSubmit = () => {

    }
    const handleChange = () => {

    }

    const onChangeImg = () => {

    }

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
            <div className="tablacont">
                <Tabs fill variant="tabs" defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 Tabsh">
                    <Tab className="colortab" eventKey="home" title="Productos">
                        <div>
                            <AgregadoProducto productos={productos} />
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
                                        <tr key={product.id}>
                                            <td >{product.categoria}</td>
                                            <td>{product.marca}</td>
                                            <td>{product.modelo}</td>
                                            <td>{product.descripcion}</td>
                                            <td>{product.color}</td>
                                            <td><img style={{ width: "150px", height: "120px" }} src={product.img} alt="" /></td>
                                            <td><button className="btn btn-success mr-1" onClick={handleShow} >Editar</button><button className="btn btn-primary mr-1" >Ver</button><button className="btn btn-danger" onClick={() => deleteProducto(product._id)}>eliminar</button></td>
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
                                        <tr key={usuarios.id}>
                                            <td>{usuarios.nombre}</td>
                                            <td>{usuarios.celular}</td>
                                            <td>{usuarios.email}</td>
                                            <td>
                                                <button
                                                    onClick={handleSubmit_activo}
                                                    type="button"
                                                    className="btn btn-primary"
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
                            {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
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
                                    <tr key={msj.id}>
                                        <td >{msj.nombreyapellido}</td>
                                        <td><a href={msj.email}>{msj.email}</a></td>
                                        <td>{msj.tel}</td>
                                        <td>{msj.mensaje}</td>
                                        <td><button className="btn btn-primary mr-1" >Ver</button><button className="btn btn-danger" onClick={() => deleteMensajes(msj._id)} >eliminar</button></td>

                                    </tr>
                                ))
                                }
                            </Table>
                        </div>
                    </Tab>
                </Tabs>
            </div>


            {products.map((productEsp) => (
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Editar {productEsp.marca} {productEsp.modelo}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container className="registerform">
                            <Row>
                                <Col xs={12} sm={8} md={6} className="mx-auto">
                                    {alert && <Alert variant="danger">{alert}</Alert>}
                                    {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
                                    <Card style={{ height: "880px" }} className="border registercontent">
                                        <Card.Header className="text-white">
                                            <h4 className="mt-1">Editar</h4>
                                        </Card.Header>
                                        <Card.Body>
                                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                <Form.Group className="reginputconteiner" controlId="validationCustom02">
                                                    <Form.Label >Marca</Form.Label>
                                                    <Form.Control
                                                        name="marca"
                                                        onChange={(e) => handleChange(e)}
                                                        required
                                                        type="text"
                                                        placeholder="Fabricante del producto"
                                                        className="registerlabel"
                                                        defaultValue={productEsp.marca}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Se requiere el fabricante del producto!
                                                    </Form.Control.Feedback>
                                                    <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group className="reginputconteiner" controlId="validationCustom01">
                                                    <Form.Label >Modelo del producto</Form.Label>
                                                    <Form.Control
                                                        name="modelo"
                                                        onChange={(e) => handleChange(e)}
                                                        required
                                                        type="text"
                                                        placeholder="Nombre del producto"
                                                        className="registerlabel"
                                                        defaultValue={productEsp.modelo}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Se requiere el nombre del producto!
                                                    </Form.Control.Feedback>
                                                    <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label >Precio</Form.Label>
                                                    <Form.Control
                                                        name="price"
                                                        onChange={(e) => handleChange(e)}
                                                        type="text"
                                                        placeholder="$$$"
                                                        className="registerlabel"
                                                        required
                                                        defaultValue={productEsp.price}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Precio obligatorio!
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group className="reginputconteiner" controlId="validationCustomUsername">
                                                    <Form.Label >Caracteristicas</Form.Label>
                                                    <InputGroup hasValidation>
                                                        <Form.Control
                                                            minLength="6"
                                                            name="descripcion"
                                                            onChange={(e) => handleChange(e)}
                                                            as="textarea"
                                                            placeholder="Caracteristicas principales del producto"
                                                            aria-describedby="inputGroupPrepend"
                                                            className="registerlabel"
                                                            required
                                                            defaultValue={productEsp.descripcion}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Las caracteristicas son obligarorias!
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group controlId="formFile" className="mb-3">
                                                    <Form.Label className="registerlabel">Agregar imagen del producto de forma local</Form.Label>
                                                    <Form.Control required type="file" onChange={(e) => onChangeImg(e)} />
                                                    <Form.Group placeholder="Agregar imagen del producto mediante URL" style={{ marginTop: "15px" }}>
                                                        <Form.Group placeholder="Agregar imagen del producto mediante URL" style={{ marginTop: "15px" }}></Form.Group></Form.Group>
                                                    <input id="url" className="registerlabel" type="url" name="url" style={{ width: "490px" }} placeholder="Agregar imagen del producto mediante URL" />

                                                    <Form.Control.Feedback type="invalid">
                                                        la imagen es obligaroria!
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                {/* COLORCHANGER */}
                                                <Form.Group className="selectsa">
                                                    <select className="registerbut" aria-label="Default select example"
                                                        name="categoria" onChange={(e) => handleChange(e)} required defaultValue={productEsp.categoria}>
                                                        <option selected>Categoria</option>
                                                        <option value="Celular">Celular</option>
                                                        <option value="Tablet">Tablet</option>
                                                        <option value="Accesorios">Accesorio</option>
                                                        <option value="Otro">Otro</option>
                                                    </select>

                                                    <select className="registerbut" aria-label="Default select example"
                                                        name="stock" onChange={(e) => handleChange(e)} required defaultValue={productEsp.stock}>
                                                        <option selected>Stock</option>
                                                        <option value="1">1 unidad</option>
                                                        <option value="2">2 unidades</option>
                                                        <option value="3">3 unidades</option>
                                                        <option value="4">4 unidades</option>
                                                        <option value="5">5 unidades</option>
                                                        <option value="6">+5 unidades</option>
                                                    </select>
                                                </Form.Group>
                                                <img style={{ width: "200px", height: "200px" }} src={productEsp.img} />
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            ))}


        </div>
    )
}

export default Admin
