import Letreiro from "./Letreiro";
import Relogio from "./Relogio";
import { Link } from "react-router-dom";
import './PaginaInicial.css';


export default function Atv01() {
  return (
    <>
        <h2>Semana 1</h2>
        <Relogio />
        <Letreiro />
        <Link to="/" className='Voltar'>Voltar</Link>
    </>
  );
}
