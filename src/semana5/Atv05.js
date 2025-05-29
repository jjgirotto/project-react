import { Link } from "react-router-dom";
import '../PaginaInicial.css';
import FormQuiz from "./FormQuiz";
import FormTicket from "./FormTicket";
import Accordion from "./Accordion";
import Messenger from "./Messenger";

export default function Atv05() {
  return (
    <>
        <h2>Semana 5</h2>
        <FormQuiz />
        <FormTicket />
        <Accordion />
        <Messenger />
        <Link to="/" className='Voltar'>Voltar</Link>
    </>
  );
}
