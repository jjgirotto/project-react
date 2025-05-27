import './styles/Form.css';
import { useState } from 'react';

export default function Form2() {
    const [person, setPerson] = useState({
        firstName: 'Ana',
        lastName: 'Caetano',
        email: 'anacaetano@gmail.com'
    });
    function handleFirstNameChange(e) {
        setPerson({
            ...person,
            firstName: e.target.value
        });
    }
    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        });
    }
    function handleEmailChange(e) {
        setPerson({
            ...person,
            email: e.target.value
        });
    }
    return (
        <section>
            <h2 className='titulo'>📋 Form2</h2>
            <form>
                <label>First name:</label>
                <input value={person.firstName} onChange={handleFirstNameChange} />
                <label>Last name:</label>
                <input value={person.lastName} onChange={handleLastNameChange} />
                <label>Email name:</label>
                <input value={person.email} onChange={handleEmailChange} />
            </form>
            <p>
                {person.firstName}{' '}
                {person.lastName}{': '}
                {person.email}
            </p>
        </section>
    );
}