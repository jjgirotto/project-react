import { Link } from "react-router-dom";
import '../PaginaInicial.css';
import Toolbar from "./Toolbar";
import Gallery from "./Gallery";
import Counter from "./Counter";
import Form from "./Form";
import MovingDot from "./MovingDot";
import Form2 from "./Form2";
import Form3 from "./Form3";
import List from "./List";
import List2 from "./List2";
import List3 from "./List3";
import List4 from "./List4";
import CounterList from "./CounterList";

export default function Atv04() {
  return (
    <>
        <h2>Semana 4</h2>
        <Toolbar />
        <Gallery />
        <Counter />
        <Form />
        <MovingDot />
        <Form2 />
        <Form3 />
        <List />
        <List2 />
        <CounterList />
        <List3 />
        <List4 />
        <Link to="/" className='Voltar'>Voltar</Link>
    </>
  );
}
