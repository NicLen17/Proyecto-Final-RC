import React from "react";
import { Tabs, Tab, Table } from "react-bootstrap";
// import AgregadoProducto from "../AgregadoProducto";
import "./Admin.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Profile from "./Perfil";
import Register from "./Productos";
import Contacto from "../Contacto";
import { render } from "@testing-library/react";

function Admin() {
  const [lusers, setLusers] = useState([]);

  useEffect(() => {
    const getListaUsuarios = async () => {
      const { data } = await axios.get("usuarios");
      setLusers(data);
    };

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
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Sexo</th>
                  <th>Email</th>
                  <th>Ingreso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pedro</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
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
          <div>Contenido3</div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Admin;
