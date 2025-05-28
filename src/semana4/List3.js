import './styles/List.css';
import { useState } from 'react';

let nextId = 3;

let initialArtists = [
    { id: 0, name: 'Demi Lovato'},
    { id: 1, name: 'Lorde'},
    { id: 2, name: 'Alessia Cara'},
    { id: 3, name: 'Lady Gaga'},
    { id: 4, name: 'Tove Lo'},
];

export default function List3() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialArtists);
    function handleClick() {
        const insertAt = 1;
        const nextArtists = [
            ...artists.slice(0, insertAt),
            { id: nextId, name: name},
            ...artists.slice(insertAt)
        ];
        setArtists(nextArtists);
        setName('');
    }
    return (
        <section>
            <h2 className='titulo'>🎵 Inspiring singers</h2>
            <p>Type the name:</p>
            <div className='"lista-input-group"'>
                <input className='lista-input' value={name} onChange={e => setName(e.target.value)}/>
                <button className='lista-button' onClick={handleClick}>Insert</button>
            </div>
            <ul className='ul-lista'>
                {artists.map(artist => (
                    <li className='li-lista' key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </section>
    );
}