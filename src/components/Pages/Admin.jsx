import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Tabs,
    Tab,
    Table,
    Alert,
    Modal,
    Button,
    Form,
    Container,
    InputGroup,
    ToggleButton,
} from "react-bootstrap";
import AgregadoProducto from "../AgregadoProducto";
import "./Admin.css";
import { getBase64 } from "../utils/img";
import { NavLink, useHistory } from "react-router-dom";

function Admin() {
    const history = useHistory();
    const localToken = JSON.parse(localStorage.getItem("token"))?.token || "";
    const [token, setToken] = useState(localToken); //cuando no tenemos un token generado la const Token es un string vacio.
    const [products, setProducts] = useState([]);
    const [mensajes, setMensajes] = useState([]);
    const [imagenes, setImagenes] = useState({});
    const [lusers, setLusers] = useState([]);
    const [alertSuccess, setalertSuccess] = useState("");
    const [alertSuccessM, setalertSuccessM] = useState("");
    const [alert, setAlert] = useState("");
    const [productEncontrado, setProductEncontrado] = useState({});
    const [input, setInput] = useState({});
    // estados modal
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (token) {
            const request = async () => {
                axios.defaults.headers = { "x-auth-token": token }; //> en el midleware/auth está definido el header que va a ser cabecera
                const { data } = await axios.get("/auth");
                if (data.category !== "A") {
                    window.location = "/";
                }
            };
            request(); //realiza el pedido
        } else {
            history.push("/login");
        }
        mensaje();
        productos();
        getListaUsuarios();
    }, [token, history, imagenes]); //se pone "token" como parámetro para que llame a useEffect cada vez que cambie

    const productos = async () => {
        const { data } = await axios.get("/productos");
        setProducts(data);
    };
    const mensaje = async () => {
        const { data } = await axios.get("/mensajes");
        setMensajes(data);
    };

    async function deleteProducto(id) {
        if (window.confirm("Estas seguro que deseas eliminar?")) {
            await axios.delete(`/productos/${id}`);
            productos();
            setalertSuccess("Producto eliminado correctamente");
        }
        setTimeout(() => {
            setalertSuccess("");
        }, 5000);
    }

    async function deleteMensajes(id) {
        if (window.confirm("Estas seguro que deseas eliminar?")) {
            await axios.delete(`/mensajes/${id}`);
            mensaje();
            setalertSuccessM("Mensaje eliminado correctamente");
        }
        setTimeout(() => {
            setalertSuccess("");
        }, 5000);
    }
    const getListaUsuarios = async () => {
        const { data } = await axios.get("usuarios");
        setLusers(data);
    };
    async function stateUser(id) {
        if (window.confirm("Seguro desea modificar el estado?")) {
            try {
                await axios.put(`/usuarios/${id}`);
                setalertSuccess("Estado modificado correctamente");
                getListaUsuarios();
            } catch (error) {
                error.response.data.msg[0].msg
                    ? setalertSuccess(error.response.data.msg[0].msg)
                    : setalertSuccess(error.response.data.msg);
                window.alert(error.response.data.msg);
            }
        }}
        const updateProduct = async (id) => {
            const productoEncontrado = await products.find((p) => p._id === id);
            setShow(true);
            setProductEncontrado(productoEncontrado)
            setImagenes(productoEncontrado.img)
            setInput(productoEncontrado)
        };

        const handleSubmit = async (event) => {
            const formulario = event.currentTarget;
            event.preventDefault();
            setValidated(true);
            if (formulario.checkValidity() === false) {
                return event.stopPropagation();
            }
            try {
                await axios.put(`/productos/${productEncontrado._id}`, input);
                setShow(false);
                setalertSuccess(`PRODUCTO MODIFICADO EXITOSAMENTE`);
                setValidated(false);
            } catch (error) {
                error.response.data.msg
                    ? setAlert(error.response.data.msg)
                    : setAlert(error.response.data);
            }
            productos();
        };
        const onChangeImg = async (e) => {
            const imagenesArray = [];
            const imagenesInput = e.target.files;
            for (let i = 0; i < imagenesInput.length; i++) {
                const base64 = await getBase64(imagenesInput[i]);
                imagenesArray.push(base64);
                const iman = { ...input, img: imagenesArray };
                setInput(iman);
            }

        };

        const handleChange = (e) => {
            setAlert("");
            const { name, value } = e.target;
            const productoInput = {
                ...input,
                ...imagenes,
                [name]: value.toUpperCase(),
            };
            console.log(productoInput)
            setInput(productoInput);
        };

        const borrarImagen = (index) => {
            console.log(productEncontrado.img);
            const removeImg = productEncontrado.img.splice(index, 1);
            setImagenes(removeImg);
        }

        return (
            <div>
                <div className="tablacont">
                    <Tabs
                        fill
                        variant="tabs"
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3 Tabsh"
                    >
                        <Tab className="colortab" eventKey="home" title="Productos">
                            <div>
                                <AgregadoProducto productos={productos} />
                                {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
                                <Table responsive striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Categoria</th>
                                            <th>Marca</th>
                                            <th>Modelo</th>
                                            <th>Stock</th>
                                            <th>Precio</th>
                                            <th>Descripcion</th>
                                            <th>Color</th>
                                            <th>imagen</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map((product) => (
                                                <tr key={product._id}>
                                                    <td>{product.categoria}</td>
                                                    <td>{product.marca}</td>
                                                    <td>{product.modelo}</td>
                                                    <td>{product.stock}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.descripcion}</td>
                                                    <td>{product.color}</td>
                                                    <td>
                                                        {product.img.map((e) => (
                                                            <img
                                                                style={{ width: "150px", height: "120px" }}
                                                                src={e}
                                                                alt="imagen celulares"
                                                            />
                                                        ))}{" "}
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-success mr-1"
                                                            onClick={() => updateProduct(product._id)}
                                                        >
                                                            Editar
                                                        </button>{" "}
                                                        <NavLink
                                                            className="btn btn-primary"
                                                            style={{ textDecorationLine: "none" }}
                                                            to={`/individual/${product._id}`}
                                                            exact
                                                            as={NavLink}
                                                        >
                                                            Ver
                                                        </NavLink>{" "}
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => deleteProducto(product._id)}
                                                        >
                                                            eliminar
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Usuarios">
                            <div>
                                {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
                                <Table responsive striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Teléfono</th>
                                            <th>Email</th>
                                            <th>Estado</th>
                                            <th>Funciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {lusers.map((usuarios) => (
                                            <tr key={usuarios._id}>
                                                <td>{usuarios.nombre}</td>
                                                <td>{usuarios.celular}</td>
                                                <td>{usuarios.email}</td>
                                                <td>
                                                    <ToggleButton
                                                        id="toggle-check"
                                                        type="checkbox"
                                                        variant="secondary"
                                                        checked={usuarios.estado}
                                                    ></ToggleButton>
                                                </td>
                                                <td>
                                                    <button
                                                        onClick={() => stateUser(usuarios._id)}
                                                        type="button"
                                                        className="btn btn-primary"
                                                    >
                                                        Habil./Deshab.
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
                                {alertSuccessM && (<Alert variant="success">{alertSuccessM}</Alert>)}
                                <Table responsive striped bordered hover variant="dark">
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
                                            <td>
                                                <a className="text-white" href={msj.email}>{msj.email}</a>
                                            </td>
                                            <td>{msj.tel}</td>
                                            <td>{msj.mensaje}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => deleteMensajes(msj._id)}
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </Table>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
                {
                    <Modal show={show} backdrop="static" keyboard={false}>
                        <Modal.Header
                            className="editarformtitulo"
                            closeButton={() => setShow(false)}
                        >
                            <Modal.Title>
                                Editar {productEncontrado.marca} {productEncontrado.modelo}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="editarform" style={{ width: "100%" }}>
                            <Container>
                                {alert && <Alert variant="danger">{alert}</Alert>}
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Form.Group className="" controlId="validationCustom02">
                                        <Form.Label>Marca</Form.Label>
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
                                    <Form.Group className="" controlId="validationCustom01">
                                        <Form.Label>Modelo del producto</Form.Label>
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
                                        <Form.Label>Precio</Form.Label>
                                        <Form.Control
                                            name="price"
                                            onChange={(e) => handleChange(e)}
                                            type="number"
                                            min="0"
                                            placeholder="$$$"
                                            className="registerlabel"
                                            required
                                            defaultValue={productEncontrado.price}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Precio obligatorio!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="" controlId="validationCustomUsername">
                                        <Form.Label>Caracteristicas</Form.Label>
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
                                        <Form.Label className="">
                                            Agregar imagen del producto de forma local
                                        </Form.Label>
                                        <Form.Group
                                            controlId="formFileMultiple"
                                            className="mb-3"
                                            onChange={(e) => { onChangeImg(e); }}
                                        >
                                            <Form.Control type="file" multiple />
                                        </Form.Group>
                                        <Form.Control.Feedback type="invalid">
                                            la imagen es obligaroria!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label >Stock Disponible</Form.Label>
                                        <Form.Control
                                            name="stock"
                                            onChange={(e) => handleChange(e)}
                                            type="number"
                                            placeholder="stock"
                                            className="registerlabelagregado w-25"
                                            required
                                            defaultValue={productEncontrado.stock}
                                            min="0"
                                            max="100"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            La cantidad disponible es obligatoria! STOCK
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="selectsa">
                                        <select
                                            className="registerbut"
                                            aria-label="Default select example"
                                            name="color"
                                            onChange={(e) => handleChange(e)}
                                            required
                                        >
                                            <option defaultValue>{productEncontrado.color}</option>
                                            <option value="Negro">Negro</option>
                                            <option value="Blanco">Blanco</option>
                                            <option value="Azul">Azul</option>
                                        </select>
                                        <select
                                            className="registerbut"
                                            aria-label="Default select example"
                                        >
                                            <option defaultValue>{productEncontrado.categoria} </option>
                                            <option value="Celular">Celular</option>
                                            <option value="Tablet">Tablet</option>
                                            <option value="Accesorios">Accesorio</option>
                                            <option value="Otro">Otro</option>
                                        </select>
                                    </Form.Group>
                                    <div className="d-flex flex-wrap">
                                        {productEncontrado.img?.map((i, index) => (
                                            <div>
                                                <Button variant="btn btn-white" style={{ position: "absolute" }} onClick={() => borrarImagen(index)}><img src="https://icongr.am/fontawesome/remove.svg?size=15&color=currentColor" alt="cerrar" /></Button>
                                                <img style={{ width: "200px", height: "200px" }} src={i} alt="imagen del celular" />
                                            </div>
                                        ))}
                                    </div>
                                    <Modal.Footer className="editarformtitulo">
                                        <Button
                                            className="registerbut"
                                            variant="registerbut"
                                            onClick={() => { setShow(false); setInput({}); setAlert(""); setValidated(false) }}
                                        >
                                            Cerrar
                                        </Button>
                                        <Button
                                            className="registerbut"
                                            variant="registerbut"
                                            type="submit"
                                        >
                                            Listo
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            </Container>
                        </Modal.Body>
                    </Modal>
                }
            </div>
        );
    }

    export default Admin;
