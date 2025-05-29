import '../semana4/styles/Form.css';
import { useState } from 'react';

export default function FormTicket() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const fullName = firstName + ' ' + lastName;
    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }
    return (
        <section>
            <h2 className='titulo'>📋 Form Ticket</h2>
            <p>
                Let's check you in!
            </p>
            <form>
                <label>First name: {' '}
                    <input value={firstName} onChange={handleFirstNameChange}></input>
                </label>
                <label>Last name: {' '}
                    <input value={lastName} onChange={handleLastNameChange}></input>
                </label>
            </form>
            <p>Your ticket will be issued to: <b>{fullName}</b></p>
        </section>
    );
}