import './styles/List.css';
import { useState } from 'react';

let nextId = 0;

export default function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);
    return (
        <section>
            <h2 className='titulo'>🎵 Inspiring songwriters</h2>
            <p>Type the name:</p>
            <div className='"lista-input-group"'>
                <input className='lista-input' value={name} onChange={e => setName(e.target.value)}/>
                <button className='lista-button' onClick={() => {
                    setArtists(
                        [
                            ...artists,
                            { id: nextId++, name: name}
                        ]
                    )
                }}>Add</button>
            </div>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </section>
    );
}