import './styles/List.css';
import { useState } from 'react';

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 50},
    { id: 1, type: 'square', x: 150, y: 50},
    { id: 2, type: 'circle', x: 250, y: 50},
    { id: 3, type: 'rectangular', x: 350, y: 50},
    { id: 4, type: 'circle', x: 450, y: 50},
];

export default function ShapeEditor() {
    const [shapes, setShapes] = useState(initialShapes);
    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square' || shape.type === 'rectangular') {
                return shape;
            } else {
                return {
                    ...shape,
                    y: shape.y + 50,
                };
            }
        });
        setShapes(nextShapes);
    }
    return (
        <div>
            <h2 className='titulo'>🟥 Shape Editor</h2>
            <button className='lista-button-shape' onClick={handleClick}>Move circles down!</button>
            <section style={{ position: 'relative', height: '300px', marginTop: '10px' }}>
                {shapes.map(shape => (
                    <div
                    key={shape.id}
                    style={{
                        background: 'red',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius: shape.type === 'circle' ? '50%' : '',
                        width: shape.type === 'rectangular' ? '40px' : '20px',
                        height: 20,
                    }} 
                    />
                ))}
            </section>
        </div>
    );
}