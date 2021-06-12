import React from 'react'
import { Tabs, Tab , Table} from 'react-bootstrap'
import AgregadoProducto from '../AgregadoProducto'
import './Admin.css'

function Admin() {
    return (
        <div className="tablacont">
            <Tabs fill variant="tabs" defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 Tabsh">
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
                <Tab eventKey="contact" title="Mensajeria">
                    <div>
                        Contenido3
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Admin
