import './List.css';

function Cup({guest}) {
    return <h4>Tea cup for #{guest}</h4>
}

export default function TeaSet() {
    return (
        <section>
            <h2 className='galeria'>☕ TeaSet</h2>
            <div className='toDoList'>
                <Cup guest={1} />
                <Cup guest={2} />
                <Cup guest={3} />
            </div>
        </section>
    );
}