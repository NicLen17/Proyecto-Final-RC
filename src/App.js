import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Carro from "./components/Carro";
import NavReactB from "./components/NavReactB";
import SCards from "./components/SCards";
import Spublicidad from "./components/Spublicidad";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom";
import { useState } from "react";
import Productos from "./components/Pages/Productos";
import Contacto from "./components/Contacto";
import Admin from "./components/Pages/Admin";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Perfil from './components/Pages/Perfil'
import PIndividuales from './components/Pages/PIndividual'
import PIndividual from './components/Pages/PIndividual';

function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  return (
    <div className="App">
      <Router>
        <NavReactB />
        <Switch>
          <Route path="/" exact>
            <Carro />

            <SCards />

            <Spublicidad />

          </Route>

          <Route path="/productos" exact>
            <Productos />
          </Route>

          <Route path="/contacto" exact>
            <Contacto />
          </Route>

          <Route path="/perfil" exact>
            <Perfil />
          </Route>

          <Route path="/individual" exact>
            <PIndividual />
          </Route>

          <Route path="/admin" exact>
            <Admin />
          </Route>

          <Route path="/login">
            <Login setUser={setUser} setToken={setToken} />
          </Route>

          <Route path="/register">
            
            <Register setToken={setToken} />
            </Route>

          <Route path="/">404</Route>

          <Route path="/carrito" exact></Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
