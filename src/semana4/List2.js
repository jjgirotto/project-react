import './styles/List.css';
import { useState } from 'react';

let initialArtists = [
    { id: 0, name: 'Demi Lovato'},
    { id: 1, name: 'Lorde'},
    { id: 2, name: 'Alessia Cara'},
    { id: 3, name: 'Lady Gaga'},
    { id: 4, name: 'Tove Lo'},
];

export default function List2() {
    const [artists, setArtists] = useState(initialArtists);
    return (
        <section>
            <h2 className='titulo'>🎵 Inspiring singers</h2>
            <ul className='ul-lista'>
                {artists.map(artist => (
                    <li className='li-lista' key={artist.id}>
                        {artist.name}{' '}
                        <button className='lista-button-min' onClick={() => {
                            setArtists(
                                artists.filter(a => a.id !== artist.id)
                            );
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}