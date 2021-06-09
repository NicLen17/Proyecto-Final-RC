import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Carro from "./components/Carro";
import NavReactB from "./components/NavReactB";
import {
  BrowserRouter as Router,
  // Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SCards from "./components/SCards";
import Spublicidad from "./components/Spublicidad";
import Sabout from "./components/Sabout";
// import Footer from "./components/Footer";
import { useState } from "react";
// import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import React, { Component } from "react";

export default function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  return (
    <div className="App">
      {/* <NavReactB /> */}
      <Router>
        <NavReactB />
        <Switch>
          <Route path="/login">
            <Login setUser={setUser} setToken={setToken} />
          </Route>

          <Route path="/register">
            <Register setToken={setToken} />
          </Route>

          <Route path="/" exact>
            Home
          </Route>

          <Route path="/">404</Route>
        </Switch>
      </Router>

      <Carro />

      <SCards />

      <Spublicidad />

      <Sabout />

      {/* <Footer/>  */}
    </div>
  );
}

// export default App;
