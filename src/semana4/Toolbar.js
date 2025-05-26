import './styles/Toolbar.css';

function Button({ onSmash, children }) {
    return (
        <button className="custom-button" onClick={(e) => {
                e.stopPropagation();
                onSmash();
            }}>
            { children }
        </button>
    );
}

export default function Toolbar() {
    return (
        <section>
            <h2 className='titulo'>🎬 Toolbar</h2>
            <div className='buttons' onClick={() => alert('You clicked on the toolbar!')}>
                <Button onSmash={() => alert('Playing!')}>Play Movie</Button>
                <Button onSmash={() => alert('Uploading!')}>Upload Image</Button>
            </div>
        </section>
    );
}