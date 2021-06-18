import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Tabs, Tab, Table, Alert, Modal, Button, Form, Row, Container, Col, Card, InputGroup } from 'react-bootstrap'
import AgregadoProducto from '../AgregadoProducto'
import './Admin.css'
import { getBase64 } from '../utils/img';


function Admin() {
    const [products, setProducts] = useState([])
    const [mensajes, setMensajes] = useState([])
    const [imagenes, setImagenes] = useState({})
    const [lusers, setLusers] = useState([]);
    const [alertSuccess, setalertSuccess] = useState("")
    const [alert, setAlert] = useState("");
    const [productEncontrado , setProductEncontrado] = useState({})
    const [input, setInput] = useState({});

    // estados modal
    const [show, setShow] = useState(false);
        
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
            if (window.confirm("Estas seguro que deseas eliminar?")) {
            await axios.delete(`/productos/${id}`);
            productos();
            setalertSuccess("Producto eliminado correctamente")
        }
    }

    async function deleteMensajes(id) {
                if (window.confirm("Estas seguro que deseas eliminar?")) {
            await axios.delete(`/mensajes/${id}`);
            mensaje();
            setalertSuccess("Mensaje eliminado correctamente")
        }
    }
    const updateProduct = (id) => {      
      const productoEncontrado = products.find(p =>  p._id === id );
      setShow(true);
      setProductEncontrado(productoEncontrado);
               }

               const handleSubmit = async (event) => {
                const formulario = event.currentTarget;
                event.preventDefault();
                setValidated(true);
                if (formulario.checkValidity() === false) {
                    return event.stopPropagation();
                }
                try {
                    await axios.put(`/productos`, input);
                    setShow(false)
                            
                } catch (error) {
                    error.response.data.msg
                        ? setAlert(error.response.data.msg[0].msg)
                        : setAlert(error.response.data);
                }
                productos();
                setalertSuccess(`PRODUCTO MODIFICADO EXITOSAMENTE`);
                setValidated(false);
            };
            const onChangeImg = async (e) => {
                const imagenesArray = [];
                const imagenesInput = e.target.files;
                for (let i = 0; i < imagenesInput.length; i++) {
                    const base64 = await getBase64(imagenesInput[i]);
                    imagenesArray.push(base64);
                    const iman = {img: imagenesArray}
                    setImagenes(iman);
                };
            }
        
            const handleChange = (e) => {
                setAlert("");
                const { name, value } = e.target;
                const productoInput = { ...input, ...imagenes, [name]: value.toUpperCase()};
                setInput(productoInput);
            };
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
                                        <tr key={product._id} >
                                            <td>{product.categoria}</td>
                                            <td>{product.marca}</td>
                                            <td>{product.modelo}</td>
                                            <td>{product.descripcion}</td>
                                            <td>{product.color}</td>
                                            <td>{product.img.map((e) => (
                                                <img style={{ width: "150px", height: "120px" }} src={e} alt="imagen celulares" />
                                            ))} </td>
                                            <td><button className="btn btn-success mr-1" onClick={() => updateProduct(product._id)} >Editar</button><button className="btn btn-primary mr-1" >Ver</button><button className="btn btn-danger" onClick={() => deleteProducto(product._id)}>eliminar</button></td>
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
                                        <td>{msj.nombreyapellido}</td>
                                        <td><a href={msj.email}>{msj.email}</a></td>
                                        <td>{msj.tel}</td>
                                        <td>{msj.mensaje}</td>
                                        <td><button className="btn btn-danger" onClick={() => deleteMensajes(msj._id)} >eliminar</button></td>
                                    </tr>
                                ))
                                }
                            </Table>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            {
                <Modal
                    show={show}
                    // onHide={}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Editar {productEncontrado.marca} {productEncontrado.modelo}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container className="registerform">
                                    {alert && <Alert variant="danger">{alert}</Alert>}
                                    {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
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
                                                        defaultValue={productEncontrado.marca}
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
                                                        defaultValue={productEncontrado.modelo}
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
                                                        defaultValue={productEncontrado.price}
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
                                                            defaultValue={productEncontrado.descripcion}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Las caracteristicas son obligarorias!
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group controlId="formFile" className="mb-3">
                                                    <Form.Label className="registerlabel">Agregar imagen del producto de forma local</Form.Label>
                                                    <Form.Control  type="file" onChange={(e) => onChangeImg(e)} />
                                                    <Form.Control.Feedback type="invalid">
                                                        la imagen es obligaroria!
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                {/* <Form.Label htmlFor="exampleColorInput">Color</Form.Label>
                                        <Form.Control

                                            style={{ height: "40px", width: "48px" }}
                                            type="color"
                                            
                                            defaultValue="#563d7c"
                                            title="Choose your color"
                                            required
                                        />
                                         <Form.Control.Feedback type="invalid">
                                                    El color es obligaroria!
                                                </Form.Control.Feedback> */}
                                                <Form.Group className="selectsa">
                                                    <select className="registerbut" aria-label="Default select example"
                                                        name="categoria" onChange={(e) => handleChange(e)} required defaultValue={productEncontrado.categoria}>
                                                        <option valueDefault>Categoria</option>
                                                        <option value="Celular">Celular</option>
                                                        <option value="Tablet">Tablet</option>
                                                        <option value="Accesorios">Accesorio</option>
                                                        <option value="Otro">Otro</option>
                                                    </select>
                                               </Form.Group>
                                                <img style={{ width: "200px", height: "200px" }} src={productEncontrado.img} alt="foto de celular" />                 
                                                <Form.Control
                                                        name="id"
                                                        onChange={(e) => handleChange(e)}
                                                        required
                                                        type="text"
                                                        placeholder="Fabricante del producto"
                                                        className="registerlabel"
                                                        defaultValue={productEncontrado._id}
                                                    />
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow(false)}>
                            Cerrar
                        </Button>
                        <Button variant="primary" type="submit">Confirmar Edicion</Button>
                    </Modal.Footer>
                    </Form>
                    </Container>
                    </Modal.Body>
                </Modal>
           
                                            }

        </div>
    )
}

export default Admin
