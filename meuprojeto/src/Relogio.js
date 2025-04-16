import './Relogio.css';

function Relogio() {
    setInterval(() => {
        let data = new Date();
        let hora = data.getHours().toString().padStart(2, '0');
        let minuto = data.getMinutes().toString().padStart(2, '0');
        let segundo = data.getSeconds().toString().padStart(2, '0');
        let formato = `${hora}:${minuto}:${segundo}`;
        document.getElementById("relogio").textContent = formato;
    }, 1000);
    return (
        <>
          <h2>Relógio</h2>
          <div id="relogio" className='Relogio'></div>
        </>
      );
  }
  
  export default Relogio;