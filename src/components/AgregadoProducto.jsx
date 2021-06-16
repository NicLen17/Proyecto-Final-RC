import React,{ useState } from 'react'
import './AgregadoProducto.css'
import axios from "axios";
import {
    Form,
    InputGroup,
    Button,
    Container,
    Row,
    Col,
    Card,
    Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"
import { getBase64 } from '../utils/img';


export default function AgregadoProducto() {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});
    const [alert, setAlert] = useState("");
    const [img, setImg] = useState("")

    const handleSubmit = async (event) => {
        const formulario = event.currentTarget;
        event.preventDefault();
        setValidated(true);
        if (formulario.checkValidity() === false) {
            return event.stopPropagation();
        }
        try {
            const { data } = await axios.post("/productos", input);
            formulario.reset();

        } catch (error) {
            error.response.data.msg
                ? setAlert(error.response.data.msg[0].msg)
                : setAlert(error.response.data);
        }
        
    };
    const onChangeImg = async (e) => {
        const img = e.target.files[0];
        const base64 = await getBase64(img);
        const imagen = { img: base64 };
        setImg(imagen);
    }

    const handleChange = (e) => {
        setAlert("");
        const { name, value } = e.target;
        const productoInput = { ...input, ...img, [name]: value };
        setInput(productoInput);
    };


    return (
        <div className="agregadoform">
            <div className="agregadocontent">
                <Container className="registerform">
                    <Row>
                        <Col xs={12} sm={8} md={6} className="mx-auto my-5">
                            {alert && <Alert variant="danger">{alert}</Alert>}
                            <Card style={{ height: "880px"}} className="border registercontent">
                                <Card.Header className="text-white">
                                    <h4 className="mt-1">Ingresar Producto</h4>
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
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Las caracteristicas son obligarorias!
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <Form.Label className="registerlabel">Agregar imagen del producto de forma local</Form.Label>
                                            <Form.Control type="file" onChange={(e) => onChangeImg(e)} />
                                            <Form.Group placeholder="Agregar imagen del producto mediante URL" style={{ marginTop: "15px" }}>
                                                <input id="url" className="registerlabel" type="url" name="url" style={{ width: "490px" }} placeholder="Agregar imagen del producto mediante URL" />
                                            </Form.Group>
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
                                                name="categoria" onChange={(e) => handleChange(e)} required>
                                                <option selected>Categoria</option>
                                                <option value="Celular">Celular</option>
                                                <option value="Tablet">Tablet</option>
                                                <option value="Accesorios">Accesorio</option>
                                                <option value="Otro">Otro</option>
                                            </select>

                                            <select className="registerbut" aria-label="Default select example"
                                                name="stock" onChange={(e) => handleChange(e)} required>
                                                <option selected>Stock</option>
                                                <option value="1">1 unidad</option>
                                                <option value="2">2 unidades</option>
                                                <option value="3">3 unidades</option>
                                                <option value="4">4 unidades</option>
                                                <option value="5">5 unidades</option>
                                                <option value="6">+5 unidades</option>
                                            </select>
                                        </Form.Group>
                                        <Row>
                                            <Button className="registerbut" type="submit">
                                                Agregar
                                            </Button>
                                        </Row>
                                        <Row>
                                            <Link className="mx-auto mt-2" to="/productos">
                                                Ver productos agregados
                                            </Link>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}