import axios from "axios";
import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React, { Component } from "react";
import './Login.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

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

  useEffect(() => {
    Aos.init({ duration: 1000 });
}, [])

  return (
    <div data-aos="fade-up" class="container loginForm">
      <Form
        onSubmit={handleSubmit}
        className="card mx-auto p-4 mt-5 logincontent "
        style={{ width: "400px" }}
      >
        {alert && <Alert variant="danger">{alert}</Alert>}
        <h1>Ingresa!</h1>
        <Form.Group controlId="formBasicEmail" className="forminputconteiner">
          <Form.Label>Ingrese su Email</Form.Label>
          <Form.Control className="loginlabel"
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Ingrese su Email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Ingrese su Password</Form.Label>
          <Form.Control className="loginlabel"
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Ingrese su Password (Min. 6 digitos)"
            required
          />
        </Form.Group>
        <Button className="loginbut" variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}
