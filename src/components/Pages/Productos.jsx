import React from 'react'
import './Productos.css'
import { Card, Button } from 'react-bootstrap'

function Productos() {
    return (
        <div className="sidebar">
            <div class="d-flex" id="wrapper">
                <div class="border-end bg-white" id="sidebar-wrapper">
                    <div class="sidebar-heading border-bottom bg-light">Productos</div>
                    <div class="list-group list-group-flush">
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Celulares</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Tablets</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Accesorios</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Ofertas</a>
                        <br />
                        <br />
                        <div class="sidebar-heading border-bottom bg-light">Ayuda</div>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Perfil</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Configuraciones</a>
                    </div>
                </div>
                <div id="page-content-wrapper">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                                    <li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div>
                    
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    )
}

export default Productos
