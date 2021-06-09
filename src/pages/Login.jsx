import axios from "axios";
import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React, { Component } from "react";
import './Login.css'

export default function Login({ setUser, setToken }) {
  const [input, setInput] = useState({});
  const [alert, setAlert] = useState("");
  const history = useHistory();

  const handleChange = (event) => {
    setAlert("");
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", input);
      localStorage.setItem("token", JSON.stringify(data)); //almacena en localhost el token generado a traves axios
      setToken(data.token);
      // setUser(admin.name);
      history.push("/");
    } catch (error) {
      console.log(error.response.data.msg);
      error.response.data.msg[0].msg
        ? setAlert(error.response.data.msg[0].msg)
        : setAlert(error.response.data.msg);
    }
  };

  return (
    <div class="container loginForm">
      <Form
        onSubmit={handleSubmit}
        className="card mx-auto p-4 mt-5"
        style={{ width: "400px" }}
      >
        {alert && <Alert variant="danger">{alert}</Alert>}

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Ingrese su Email</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Ingrese su Email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Ingrese su Password</Form.Label>
          <Form.Control
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Ingrese su Password (Min. 6 digitos)"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}
