import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Carro from "./components/Carro";
import NavReactB from "./components/NavReactB";
import SCards from "./components/SCards";
import Spublicidad from "./components/Spublicidad";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Productos from "./components/Pages/Productos";
import Contacto from "./components/Contacto";
import Admin from "./components/Pages/Admin";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Perfil from "./components/Pages/Perfil";
import PIndividual from "./components/Pages/PIndividual";
import axios from "axios";
import ScrollToTop from "./components/ScrollToTop";
import Carrito from "./components/Carrito";

const localToken = JSON.parse(localStorage.getItem("token"))?.token || "";

export default function App() {
  const productosCarrito = [];
  let [productoCart, setProductoCart] = useState([]);
  const [user, setUser] = useState({});
  const [carritoLleno, setcarritoLleno] = useState({});

  const [token, setToken] = useState(localToken); //cuando no tenemos un token generado la const Token es un string vacio.
  //llama a axios con el token del usuario, con useEffect reemplaza a un condicional, sólo se va a ejecutar cuando el token cambie de valor
  useEffect(() => {
    if (token) {
      const request = async () => {
        axios.defaults.headers = { "x-auth-token": token }; //> en el midleware/auth está definido el header que va a ser cabecera
        const { data } = await axios.get("/auth"); //trae los datos del usuario loguedo mediante axios, y los guarda en data
        setUser(data); //coloca los datos del usuario en la variable user
      };
      request(); //realiza el pedido
    }
    const productoStorage =
      JSON.parse(localStorage.getItem("agregarcarrito")) || [];
    const carritoLleno = productoStorage.length;
    setcarritoLleno(carritoLleno);
  }, [token, carritoLleno]); //se pone "token" como parámetro para que llame a useEffect cada vez que cambie

  const logout = () => {
    localStorage.removeItem("token"); //elimina el token
    axios.defaults.headers = { "x-auth-token": "" };
    setUser({}); //limpia el usuario
    setToken(""); //limpia el token
  };

  // const productoStorage =
  //   JSON.parse(localStorage.getItem("agregarcarrito")) || [];
  // const carritoLleno = productoStorage.length;
  // console.log("totalCarrito", carritoLleno);

  // let producto = () => {
  //   let productoStorage =
  //     JSON.parse(localStorage.getItem("agregarcarrito")) || [];
  //   console.log(
  //     "🚀 ~ file: App.js ~ line 51 ~ App ~ totalCarrito",
  //     productoStorage
  //   );
  // };

  // useEffect(() => {
  //   producto();
  // }, []);

  return (
    <div className="App">
      <Router>
        <Route>
          <ScrollToTop></ScrollToTop>
        </Route>
        <NavReactB
          userName={user.nombre}
          userCategory={user.category}
          logout={logout}
          carritoLleno={carritoLleno}
        />
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
            <Perfil user={user} />
          </Route>

          <Route path="/individual/:id" exact>
            <PIndividual productosCarrito={productosCarrito} />
          </Route>

          <Route path="/carrito" exact>
            <Carrito />
          </Route>

          <Route path="/admin" exact>
            <Admin user={user.nombre} />
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

// export default App;
