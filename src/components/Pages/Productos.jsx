import React from "react";
import "./Productos.css";
import { Card, Button } from "react-bootstrap";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



function Productos() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className="sideynav">
      <div data-aos="fade-up" className="productoscont" >
        <div className="sidebar1">
        </div>
        <div className="flexcardp">
          <Card className="cardsp" style={{ width: "18rem" }}>
            <Card.Img className="cardpimg"
              variant="top"
              src="https://http2.mlstatic.com/D_NQ_NP_634554-MLA31848818020_082019-O.jpg"
            />
            <Card.Body>
              <Card.Title>50.000</Card.Title>
              <Card.Text className="caracteristicas">
                <li>Samsumg</li>
                <li>Samsung Galaxy A50</li>
                <li>64GB de Almacenamiento</li>
                <li>4GB Ram</li>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardsp" style={{ width: "18rem" }}>
            <Card.Img className="cardpimg"
              variant="top"
              src="https://http2.mlstatic.com/D_NQ_NP_634554-MLA31848818020_082019-O.jpg"
            />
            <Card.Body>
              <Card.Title>50.000</Card.Title>
              <Card.Text className="caracteristicas">
                <li>Samsumg</li>
                <li>Samsung Galaxy A50</li>
                <li>64GB de Almacenamiento</li>
                <li>4GB Ram</li>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardsp" style={{ width: "18rem" }}>
            <Card.Img className="cardpimg"
              variant="top"
              src="https://http2.mlstatic.com/D_NQ_NP_634554-MLA31848818020_082019-O.jpg"
            />
            <Card.Body>
              <Card.Title>50.000</Card.Title>
              <Card.Text className="caracteristicas">
                <li>Samsumg</li>
                <li>Samsung Galaxy A50</li>
                <li>64GB de Almacenamiento</li>
                <li>4GB Ram</li>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardsp" style={{ width: "18rem" }}>
            <Card.Img className="cardpimg"
              variant="top"
              src="https://http2.mlstatic.com/D_NQ_NP_634554-MLA31848818020_082019-O.jpg"
            />
            <Card.Body>
              <Card.Title>50.000</Card.Title>
              <Card.Text className="caracteristicas">
                <li>Samsumg</li>
                <li>Samsung Galaxy A50</li>
                <li>64GB de Almacenamiento</li>
                <li>4GB Ram</li>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="sidep">
      <SideNav
        onSelect={(selected) => {
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem className="sidetext" eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText className="sidetext">
              Productos
            </NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Categorias
            </NavText>
            <NavItem eventKey="charts/celulares">
              <NavText>
                Celulares
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/tablets">
              <NavText>
                Tablets
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/accesorios">
              <NavText>
                Accesorios
              </NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="perfil">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Ayuda
            </NavText>
            <NavItem eventKey="charts/celulares">
              <NavText>
                <a className="sidea" href="perfil">
                Perfil</a>
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/tablets">
              <NavText>
                <a className="sidea" href="contacto">
                Contacto</a>
              </NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      </div>
      </div>
  );
}

export default Productos;
