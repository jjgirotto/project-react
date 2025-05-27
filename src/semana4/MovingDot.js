
import { useState } from 'react';

export default function MovingDot() {
    const [position, setPosition] = useState({x:0,y:0});
    return (
        <section>
            <h2 className='titulo'>⬤ Moving Dot</h2>
            <div onPointerMove={e => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
            }}
            style={{
                position: 'relative',
                width: '100vw',
                height: '50vh',
            }}>
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: 50,                
                top: 20,                
                width: 20,                
                height: 20,             
            }} />
            </div>
        </section>
    );
}