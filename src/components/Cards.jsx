import { Card , Button } from 'react-bootstrap'
import React from 'react'
import './Cards.css'

export default function Cards() {
    return (
        <div className="flexcard">
            <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.samsung.com/is/image/samsung/latin-galaxy-s20-plus-g985-bts-sm-g985fzpjgto-frontbpurple-thumb-261222598" />
    <Card.Body>
        <Card.Title>Precio</Card.Title>
        <Button variant="primary">Agregar al carrito</Button>
    </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.fravega.com/f300/6471af0b982f4f6dd159ae0cdad2a820.jpg" />
    <Card.Body>
        <Card.Title>Precio</Card.Title>
        <Button variant="primary">Agregar al carrito</Button>
    </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/81AT%2BFlc%2BEL._AC_SX679_.jpg" />
    <Card.Body>
        <Card.Title>Precio</Card.Title>
        <Button variant="primary">Agregar al carrito</Button>
    </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.samsung.com/es/smartphones/galaxy-note20/buy/carousel/mobile/002-note20ultra-kv.jpg?imwidth=720" />
    <Card.Body>
        <Card.Title>Precio</Card.Title>
        <Button variant="primary">Agregar al carrito</Button>
    </Card.Body>
</Card>
        </div>
    )
}


