import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Carro from './components/Carro';
import NavReactB from "./components/NavReactB"
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">

      <NavReactB />

      <Carro />

      <Cards />

      {/* <Spublicidad />

    <SAbout/> */}



    </div>
  );
}

export default App;
