import './styles/List.css';
import { useState } from 'react';

let initialList = [
    { id: 0, title: 'Tell me you love me'},
    { id: 1, title: 'Liability'},
    { id: 2, title: 'Here'},
    { id: 3, title: 'Born this way'},
    { id: 4, title: 'Stay high'},
];

export default function List4() {
    const [list, setList] = useState(initialList);
    function handleClick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }
    return (
        <section>
            <h2 className='titulo'>🎵 Inspiring songs</h2>
            <button className='lista-button-reverse' onClick={handleClick}>Reverse</button>
            <ul>
                {list.map(artwork => (
                    <li key={artwork.id}>
                        {artwork.title}
                    </li>
                ))}
            </ul>
        </section>
    );
}