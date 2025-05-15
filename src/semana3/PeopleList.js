import './List.css';
import { getImageUrl } from './utils.js';
import { people } from './data.js';

function renderListaPorProfissao(profissao, titulo) {
  const lista = people
    .filter(person => person.profession === profissao)
    .map(person => (
      <li key={person.id} className="ditem">
        <img
          src={getImageUrl(person)}
          alt={person.name}
          width="100"
          className="davatar"
        />
        <p className="ddescricao">
          <b>{person.name}:</b> {person.profession.toLowerCase()} known for {person.accomplishment}
        </p>
      </li>
    ));

  return (
    <>
      <h2 className="galeria">👥 Lista de {titulo}</h2>
      <ul className="dlista">{lista}</ul>
    </>
  );
}

export default function PeopleList() {
  return (
    <section>
      {renderListaPorProfissao('Actor', 'atores')}
      {renderListaPorProfissao('Director', 'diretores')}
    </section>
  );
}
