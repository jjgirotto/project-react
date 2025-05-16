import { Link } from "react-router-dom";
import '../PaginaInicial.css';
import Galeria from "./Galeria";
import ToDoList from "./ToDoList";
import PackingList from "./PackingList";
import PeopleList from "./PeopleList";
import Recipe from "./Receita";
import TeaSet from "./TeaSet";

export default function Atv03() {
  return (
    <>
        <h2>Semana 3</h2>
        <Galeria />
        <ToDoList />
        <PackingList />
        <PeopleList />
        <Recipe />
        <TeaSet />
        <Link to="/" className='Voltar'>Voltar</Link>
    </>
  );
}
