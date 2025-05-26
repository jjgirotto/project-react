import { Link } from "react-router-dom";
import '../PaginaInicial.css';
import Toolbar from "./Toolbar";
import Gallery from "./Gallery";
import Counter from "./Counter";

export default function Atv04() {
  return (
    <>
        <h2>Semana 4</h2>
        <Toolbar />
        <Gallery />
        <Counter />
        <Link to="/" className='Voltar'>Voltar</Link>
    </>
  );
}
