import axios from "axios";
import { useState } from "react";
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
import { Link, useHistory } from "react-router-dom";
import React, { Component } from "react";

export default function Register({ setToken }) {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});
  const [alert, setAlert] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === false) {
      return event.stopPropagation();
    }
    try {
      const { data } = await axios.post("/auth/register", input);
      console.log(
        "🚀 ~ file: Register.jsx ~ line 21 ~ handleSubmit ~ data",
        data
      );

      localStorage.setItem("token", JSON.stringify(data));
      setToken(data.token);
      history.push("/");
      // window.location.replace('/');
    } catch (error) {
      console.log(error.response.data);
      error.response.data.msg
        ? setAlert(error.response.data.msg[0].msg)
        : setAlert(error.response.data);
    }
  };

  const handleChange = (e) => {
    setAlert("");
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={8} md={6} className="mx-auto my-5">
          {alert && <Alert variant="danger">{alert}</Alert>}
          <Card className="border">
            <Card.Header className="bg-info">
              <h4 className="text-white">Crea tu cuenta</h4>
            </Card.Header>
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Nombre y Apellido</Form.Label>
                  <Form.Control
                    name="nombre"
                    onChange={(e) => handleChange(e)}
                    required
                    type="text"
                    placeholder="Nombre y Apellido"
                  />
                  <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Celular</Form.Label>
                  <Form.Control
                    name="celular"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    placeholder="Celular"
                  />
                  <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom02">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    onChange={(e) => handleChange(e)}
                    required
                    type="text"
                    placeholder="Email"
                  />
                  <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustomUsername">
                  <Form.Label>Password</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      minLength="6"
                      name="password"
                      onChange={(e) => handleChange(e)}
                      type="password"
                      placeholder="****"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Password requiere un mínimo de 6 caracteres!
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Row>
                  <Button type="submit" className="mx-auto">
                    Registrarme
                  </Button>
                </Row>
                <Row>
                  <Link className="mx-auto mt-2" to="/login">
                    ¿Ya tiene una cuenta? Iniciar sesión
                  </Link>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
