import './styles/Form.css';
import { useState } from 'react';

export default function Form() {
    const [to, setTo] = useState('Ana Clara');
    const [message, setMessage] = useState('Hello! How are you?');
    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said "${message}" to ${to}!`);
        }, 1000);
    }
    return (
        <section>
            <h2 className='titulo'>📋 Form</h2>
            <form onSubmit={handleSubmit}>
                <label>To: {' '}</label>
                <select value={to} onChange={e => setTo(e.target.value)}>
                    <option value="Ana Clara">Ana Clara</option>
                    <option value="Vitória">Vitória</option>
                </select>
                <textarea placeholder='Message' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <button type='submit'>Send</button>
            </form>
        </section>
    );
}