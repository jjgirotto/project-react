import './styles/Gallery.css';
import { sculptureList } from './data.js';
import { useState } from 'react';

export default function Gallery() {

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index+1);
    }
    function handleMoreClick() {
        setShowMore(!showMore);
    }
    let sculpture = sculptureList[index];
    return (
        <section>
            <h2 className='titulo'>🗿 Sculpture Gallery</h2>
            <div className='sculpture-box'>
                <button className="tiny-button" onClick={handleNextClick}>Next</button>
                <h3>
                    <i>{sculpture.name}</i> by {sculpture.artist}
                </h3>
                <h4>({index+1} of {sculptureList.length})</h4>
                <button className="tiny-button" onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
                {showMore && <p className="description">{sculpture.description}</p>}
                <img src={sculpture.url} alt={sculpture.alt} className="sculpture-img" />
            </div>
        </section>
    );
}