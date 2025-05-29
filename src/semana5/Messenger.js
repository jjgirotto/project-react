import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import './styles/Messenger.css';

const contacts = [
    { name: 'Maria Letícia', email: 'maria@mail.com'},
    { name: 'Alice Souza', email: 'alice@mail.com'},
    { name: 'Olívia Lima', email: 'olivia@mail.com'},
    { name: 'Pedro Ricardo', email: 'pedro@mail.com'}
];

export default function Messenger() {
    const [to, setTo] = useState([0]);
    return (
        <section>
            <h2 className="titulo">📋 Contact's List</h2>
            <div className="messenger-container">
                <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)} />
                <Chat key={to.email} contact={to} />
            </div>
        </section>
    )
}