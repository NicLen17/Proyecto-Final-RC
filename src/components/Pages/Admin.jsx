import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import './Admin.css'

function Admin() {
    return (
        <div>
            <Tabs fill variant="tabs" defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 Tabsh">
                <Tab className="colortab" eventKey="home" title="Productos">
                    <div>
                    Contenido1
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Usuarios">
                    <div>
                    Contenido2
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
