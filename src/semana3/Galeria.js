import Avatar from './Avatar';
import './Galeria.css';

export function Card({ children }) { 
    return (
        <div className="card">
            {children} 
        </div>
    );
}

function Profile({person}) {
  return (
    <Card>
      <Avatar person={person} />
      <p>{person.titulo}</p>
    </Card>
  );
}

export default function Galeria() {
  return (
    <section>
      <h2 className='galeria'>🎬 Oscar 2025: Destaques</h2>
      <div className="galeria">
        <div className="lista">
          <Profile person={{ titulo: 'Anora', image: 'anora' }} />
          <Profile person={{ titulo: 'O Brutalista', image: 'brutalista' }} />
          <Profile person={{ titulo: 'Wicked', image: 'wicked' }} />
          <Profile person={{ titulo: 'Duna', image: 'duna' }} />
          <Profile person={{ titulo: 'Emilia Perez', image: 'emilia' }} />
        </div>
      </div>
    </section>
  );
}
