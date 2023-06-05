import './App.css';
import { useState } from 'react';

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const calculaImc = (altura, peso) => {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
  };

  let resultadoImc;

    const imc = calculaImc(altura, peso)
    if (imc < 18.4) {
      resultadoImc = 'Abaixo do peso'
    }
    else if (imc < 24.9) {
      resultadoImc = "Peso normal";
    } else if (imc < 29.9) {
      resultadoImc = "Sobrepeso";
    } else if (imc < 34.9) {
      resultadoImc = "Obesidade grau 1";
    } else if (imc < 39.9) {
      resultadoImc = "Obesidade grau 2";
    } else if (imc > 40){
      resultadoImc = "Obesidade grau 3";
    } else {
    resultadoImc = "Informe altura e peso válidos";
  }
    



  return (
    <>
      <form>
        <h1>Calcule IMC</h1>
        <input
          type="number"
          placeholder="Altura"
          onChange={(evento) => setAltura(evento.target.value)}
        />
        <input
          type="number"
          placeholder="Peso"
          onChange={(evento) => setPeso(evento.target.value)}
        />
      </form>

      <table>
        <thead>
          <tr>
            <th>Altura</th>
            <th>Peso</th>
            <th>IMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{altura}</td>
            <td>{peso}</td>
            <td>{imc}</td>
          </tr>
        </tbody>
      </table>
      <h4>Resultado</h4>
      <h5>{resultadoImc}</h5>
    </>
  );
}

export default App;
