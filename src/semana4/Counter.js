import './styles/Counter.css';
import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);
    return (
        <section>
            <h2 className='titulo'>➕ Counter</h2>
            <div className='counter-box'>
                <h3>{number}</h3>
                <button className='counter-button' onClick={() => {
                    setNumber(n => n+1);
                    setNumber(n => n+1);
                    setNumber(n => n+1);
                }}>+ 3</button>
            </div>
        </section>
    );
}