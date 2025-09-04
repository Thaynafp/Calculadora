import { useState } from 'react';

function Calculadora() {
  const [visor, setVisor] = useState('0');
  const [valorAtual, setValorAtual] = useState(null);
  const [operador, setOperador] = useState(null);
  const [esperandoOperando, setEsperandoOperando] = useState(false);

  const digitarNumero = (numero) => {
    if (esperandoOperando) {
      setVisor(String(numero));
      setEsperandoOperando(false);
    } else {
      setVisor(visor === '0' ? String(numero) : visor + numero);
    }
  };

  const digitarDecimal = () => {
    if (!visor.includes('.')) {
      setVisor(visor + '.');
    }
  };

  const limparVisor = () => {
    setVisor('0');
    setValorAtual(null);
    setOperador(null);
    setEsperandoOperando(false);
  };

  const realizarOperacao = (proximoOperador) => {
    const valorEntrada = parseFloat(visor);

    if (valorAtual === null) {
      setValorAtual(valorEntrada);
    } else if (operador) {
      const resultado = calcular(valorAtual, valorEntrada, operador);
      setValorAtual(resultado);
      setVisor(String(resultado));
    }

    setEsperandoOperando(true);
    setOperador(proximoOperador);
  };

  const calcular = (primeiroOperando, segundoOperando, operador) => {
    if (operador === '+') {
      return primeiroOperando + segundoOperando;
    } else if (operador === '-') {
      return primeiroOperando - segundoOperando;
    } else if (operador === '*') {
      return primeiroOperando * segundoOperando;
    } else if (operador === '/') {
      // Tratamento de divisão por zero
      return segundoOperando === 0 ? 'Erro' : primeiroOperando / segundoOperando;
    }
    return segundoOperando;
  };
  
  const calcularResultado = () => {
    const valorEntrada = parseFloat(visor);
    if (operador && valorAtual !== null) {
      const resultado = calcular(valorAtual, valorEntrada, operador);
      setVisor(String(resultado));
      setValorAtual(null);
      setOperador(null);
      setEsperandoOperando(false);
    }
  };

  return (
  <div className="calculadora">
    <div className="visor">{visor}</div>
    <div className="teclado">
      <div className="teclas-input">
        <div className="teclas-funcao">
          <button className="tecla tecla-limpar" onClick={limparVisor}>C</button>
        </div>
        <div className="teclas-digitos">
          <button className="tecla tecla-0" onClick={() => digitarNumero(0)}>0</button>
          <button className="tecla tecla-ponto" onClick={digitarDecimal}>.</button>
          <button className="tecla tecla-1" onClick={() => digitarNumero(1)}>1</button>
          <button className="tecla tecla-2" onClick={() => digitarNumero(2)}>2</button>
          <button className="tecla tecla-3" onClick={() => digitarNumero(3)}>3</button>
          <button className="tecla tecla-4" onClick={() => digitarNumero(4)}>4</button>
          <button className="tecla tecla-5" onClick={() => digitarNumero(5)}>5</button>
          <button className="tecla tecla-6" onClick={() => digitarNumero(6)}>6</button>
          <button className="tecla tecla-7" onClick={() => digitarNumero(7)}>7</button>
          <button className="tecla tecla-8" onClick={() => digitarNumero(8)}>8</button>
          <button className="tecla tecla-9" onClick={() => digitarNumero(9)}>9</button>
        </div>
      </div>
      <div className="teclas-operadores">
        <button className="tecla tecla-dividir" onClick={() => realizarOperacao('/')}>÷</button>
        <button className="tecla tecla-multiplicar" onClick={() => realizarOperacao('*')}>×</button>
        <button className="tecla tecla-subtrair" onClick={() => realizarOperacao('-')}>-</button>
        <button className="tecla tecla-somar" onClick={() => realizarOperacao('+')}>+</button>
        <button className="tecla tecla-igual" onClick={calcularResultado}>=</button>
      </div>
    </div>
  </div>
  );
}

export default Calculadora;