import Header from "./components/Header"
import Calculadora from "./components/Calculadora"
import "./css/global.css"
import "./css/estilo.css"
import "./css/calculadora.css"

function App() {
  return (
    <div className="App">
      <h1>Calculadora</h1>
      <Calculadora />
    </div>
  );
}

export default App