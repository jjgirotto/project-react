import './styles/List.css';
import { useState } from 'react';

let initialCounters = [0,0,0];

export default function CounterList() {
    const [counters, setCounters] = useState(initialCounters);
    function handleIncrementClick(index) {
        const nextCounters = counters.map((c,i) => {
            if (i === index) {
                return c+1;
            } else {
                return c;
            }
        });
        setCounters(nextCounters);
    }
    return (
        <section>
            <h2 className='titulo'>➕ Counters list</h2>
            <ul className='ul-lista'>
                {counters.map((counter, i) => (
                    <li className='li-lista' key={i}>
                        {counter}{' '}
                        <button className='lista-button-min' onClick={() => {
                            handleIncrementClick(i);
                        }}>+1</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}