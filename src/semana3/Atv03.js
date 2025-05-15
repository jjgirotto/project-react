import { Link } from "react-router-dom";
import '../PaginaInicial.css';
import Galeria from "./Galeria";
import ToDoList from "./ToDoList";
import PackingList from "./PackingList";
import PeopleList from "./PeopleList";

export default function Atv03() {
  return (
    <>
        <h2>Semana 3</h2>
        <Galeria />
        <ToDoList />
        <PackingList />
        <PeopleList />
        <Link to="/" className='Voltar'>Voltar</Link>
    </>
  );
}
