import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Carro from './components/Carro';
import NavReactB from "./components/NavReactB"
import SCards from './components/SCards'
import Spublicidad from './components/Spublicidad'
import Sabout from './components/Sabout'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">

      <NavReactB />

      <Carro />

      <SCards />

      <Spublicidad />

      <Sabout/> 

      {/* <Footer/>  */}

    </div>
  );
}

export default App;
