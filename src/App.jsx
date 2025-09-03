import Header from "./components/Header"
import Calculator from "./components/Calculator"
import "./css/global.css"
import "./css/estilo.css"
import "./css/calculadora.css"

function App(){
  return(
    <div className="container">
      <div className="box">
        <Header/>
        <Calculator/>
      </div>
    </div>
  )
}

export default App