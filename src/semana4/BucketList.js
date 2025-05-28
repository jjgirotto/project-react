import './styles/List.css';
import { useState } from 'react';

let initialList = [
    { id: 0, title: 'Tell me you love me', listened: false},
    { id: 1, title: 'Liability', listened: true},
    { id: 2, title: 'Here', listened: true},
    { id: 3, title: 'Born this way', listened: false},
    { id: 4, title: 'Stay high', listened: true},
];

export default function BucketList() {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(initialList);
    function handleToggleMyList(artworkId, nextListened) {
        setMyList(myList.map(artwork => {
            if (artwork.id === artworkId) {
                return { ...artwork, listened: nextListened};
            } else {
                return artwork;
            }
        }));
    }
    function handleToggleYourList(artworkId, nextListened) {
        setYourList(yourList.map(artwork => {
            if (artwork.id === artworkId) {
                return { ...artwork, listened: nextListened};
            } else {
                return artwork;
            }
        }));
    }
    return (
        <section>
            <h2 className='titulo'>🎵 Songs Bucket List</h2>
            <h3>My list of songs to listen to:</h3>
            <ItemList
                artworks={myList}
                onToggle={handleToggleMyList} />
            <h3>Your list of songs to listen to:</h3>
            <ItemList
                artworks={yourList}
                onToggle={handleToggleYourList} />
        </section>
    );
}

function ItemList({ artworks, onToggle}) {
    return (
        <ul className='ul-lista'>
            {artworks.map(artwork => (
                <li className='li-lista' key={artwork.id}>
                    <label>
                        <input type='checkbox' checked={artwork.listened}
                        onChange={e => {
                            onToggle(artwork.id, e.target.checked);
                        }} />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}