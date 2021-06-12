import React, { useState } from 'react';
import {
    Tabs, Tab, Table, Form,
    InputGroup,
    Button,
    Container,
    Row,
    Col,
    Card,
    Alert,
} from 'react-bootstrap';
import './AdminProductos.css';
import axios from "axios";

export default function AdminProductos() {
    const [input, setInput] = useState({})
    const [alert, setAlert] = useState("");
    const  handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post('/productos', input)
            console.log(data);
        }
        catch (error){
            console.log(error.response.data);
            error.response.data.msg
              ? setAlert(error.response.data.msg[0].msg)
              : setAlert(error.response.data);
        }
    

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        const inputProducto = { ...input, [name]: value };
        setInput(inputProducto)

    }
    console.log(input);
    return ( 
        <div>
            <Container className="registerform">
                <Row>
                    <Col xs={12} sm={8} md={6} className="mx-auto my-5">
                        {alert && <Alert variant="danger">{alert}</Alert>}
                        <Card className="border registercontent">
                            <Card.Header className="text-white">
                                <h4 className="mt-1">Crear Producto</h4>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="reginputconteiner" controlId="validationCustom01">
                                        <Form.Label >Categoria</Form.Label>
                                        <Form.Control
                                            name="categoria"
                                            onChange={(e) => handleChange(e)}
                                            required
                                            type="text"
                                            placeholder="Tablet celular o accesorio"
                                            className="registerlabel"
                                        />
                                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="reginputconteiner" controlId="validationCustom01">
                                        <Form.Label >Marca</Form.Label>
                                        <Form.Control
                                            name="marca"
                                            onChange={(e) => handleChange(e)}
                                            required
                                            type="text"
                                            placeholder="Marca del telefono"
                                            className="registerlabel"
                                        />
                                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label >Modelo</Form.Label>
                                        <Form.Control
                                            name="modelo"
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            placeholder="Modelo"
                                            className="registerlabel"
                                        />
                                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="reginputconteiner" controlId="validationCustom02">
                                        <Form.Label >Precio</Form.Label>
                                        <Form.Control
                                            name="price"
                                            onChange={(e) => handleChange(e)}
                                            required
                                            type="number"
                                            placeholder="Precio"
                                            className="registerlabel"
                                        />
                                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="reginputconteiner" controlId="validationCustomUsername">
                                        <Form.Label >Colores</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                minLength="6"
                                                name="color"
                                                onChange={(e) => handleChange(e)}
                                                type="text"
                                                placeholder="Colores"
                                                aria-describedby="inputGroupPrepend"
                                                className="registerlabel"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Password requiere un mínimo de 6 caracteres!
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="reginputconteiner" controlId="validationCustomUsername">
                                        <Form.Label >Descripcion</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                name="descripcion"
                                                onChange={(e) => handleChange(e)}
                                                type="text"
                                                as="textarea"
                                                col={10}
                                                placeholder="Breve descripcion de las especificaciones del telefono"
                                                aria-describedby="inputGroupPrepend"
                                                className="registerlabel"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Tiene que tener una minima descripcion
                                            </Form.Control.Feedback>

                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Imagen</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                    <Row>
                                        <Button className="registerbut" type="submit">
                                            Guardar producto
                                        </Button>
                                    </Row>

                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </div>
    )
}
