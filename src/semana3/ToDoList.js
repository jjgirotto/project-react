import Avatar from './Avatar';
import './List.css';

const hoje = new Date();
const person = {
    titulo: "Jennifer Lawrence",
    image: 'jennifer'
};

function formatarData(data) {
    return new Intl.DateTimeFormat(
        'pt-br',
        { weekday: 'long'}
    ).format(data);
}

export default function ToDoList() {
    return (
        <section>
            <h2 className='galeria'>📋 Lista de afazeres</h2>
            <div className='toDoList'>
                <div className='cabecalho'>
                    <Avatar person={person} />
                    <h2 className='tituloh2'>To-do list for {formatarData(hoje)} - {person.titulo}</h2>
                </div>
                <ul>
                    <li>Attend script reading session at 10 AM</li>
                    <li>Rehearse scene 5 with co-star</li>
                    <li>Record voice-over for upcoming commercial</li>
                </ul>
            </div>
        </section>
    );
}