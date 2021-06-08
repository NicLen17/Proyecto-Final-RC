import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Carro from "./components/Carro";
import NavReactB from "./components/NavReactB";
import SCards from "./components/SCards";
import Spublicidad from "./components/Spublicidad";
import Sabout from "./components/Sabout";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useState } from "react";
import Productos from "./components/Pages/Productos";
import Contacto from "./components/Contacto";

import Admin from "./components/Pages/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <NavReactB />
        <Switch>
          <Route path="/" exact>
            <Carro />

            <SCards />

            <Spublicidad />
{/* 
            <Sabout /> */}
          </Route>

          <Route path="/productos" exact>
            <Productos />
          </Route>
          <Route path="/contacto" exact>
            <Contacto />
          </Route>
          <Route path="/carrito" exact></Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
