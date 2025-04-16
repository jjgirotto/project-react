import './Letreiro.css';

function Letreiro() {
  let i = 0;
  let frase = "Venha estudar na Fatec";
  setInterval(() => {
    const texto = frase.substring(0, i + 1);
    const elemento = document.getElementById("letreiro");
    if (elemento) {
      elemento.textContent = texto;
    }
    i++;
    if (i > frase.length) {
      i = 0;
    }
  }, 300);
   
  return (
      <>
      <h2>Letreiro</h2>
      <div id="letreiro" className='Letreiro'></div>
      </>
    );
  }
  
  export default Letreiro;