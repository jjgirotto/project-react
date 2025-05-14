import { Link } from "react-router-dom";
import Contador from "./Contador";

export default function Atv02() {
  return (
    <>
        <h2 className="centralizar">Semana 2</h2>
        <Contador />
        <div className="centralizar">
          <Link to="/" className='Voltar'>Voltar</Link>
        </div>
    </>
  );
}
