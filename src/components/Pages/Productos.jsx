import React from 'react'
import './Productos.css'
import { Card, Button } from 'react-bootstrap'

function Productos() {
    return (
        <div className="sidebar">
            <div class="d-flex" id="wrapper">
                <div class="border-end bg-white" id="sidebar-wrapper">
                    <div class="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                    <div class="list-group list-group-flush">
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Dashboard</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Shortcuts</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Overview</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
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
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    )
}

export default Productos
