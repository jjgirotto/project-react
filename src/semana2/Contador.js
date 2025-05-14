import React, { useState } from 'react';
import './Contador.css';

const Contador = () => {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  const alterarContagem = (genero, valor) => {
    if (genero === 'homens') {
      setHomens((prev) => Math.max(0, prev + valor));
    } else {
      setMulheres((prev) => Math.max(0, prev + valor));
    }
  };

  const resetContador = () => {
    setHomens(0);
    setMulheres(0);
  };

  const Secao = ({ id, imgSrc, label }) => (
    <div className="secao">
      <img src={imgSrc} className="icon" alt={`Ícone de ${label}`} />
      <div className="row-buttons">
        <button onClick={() => alterarContagem(id, 1)}>
          <img src="/images/mais.jpg" className="plus" alt="Aumentar" />
        </button>
        <button onClick={() => alterarContagem(id, -1)}>
          <img src="/images/menos.jpg" className="minus" alt="Diminuir" />
        </button>
      </div>
      <h5>{label}</h5>
      <div className="count-box">
        <div id={id}>{id === 'homens' ? homens : mulheres}</div>
      </div>
    </div>
  );

  return (
    <div id="contador">
      <div id="total-container">
        <div>
          <h3>Total</h3>
        </div>
        <button onClick={resetContador}>
          <img src="/images/reset.png" className="update" alt="Resetar" />
        </button>
      </div>

      <div className="count-box">
        <div id="total">{total}</div>
      </div>

      <div id="secao-homens-mulheres">
        <Secao id="homens" imgSrc="/images/homem.png" label="Homens" />
        <Secao id="mulheres" imgSrc="/images/mulher.png" label="Mulheres" />
      </div>
    </div>
  );
};

export default Contador;
