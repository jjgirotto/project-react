import './List.css';

function Item({ name, isPacked}) {
    let itemContent = name;
    if (isPacked) itemContent = name + "✔️";
    return <li className='item'>{isPacked ? (<del>{itemContent}</del>) : itemContent}</li>
}

export default function PackingList() {
    return (
        <section>
            <h2 className='galeria'>📋 Lista de itens de viagem</h2>
            <div className='toDoList'>
                <h2 className='tituloh2'>Packing list</h2>
                <ul>
                    <Item isPacked={true} name={'Toiletries (toothbrush, toothpaste, shampoo)'} />
                    <Item isPacked={true} name={'Phone charger and headphones'} />
                    <Item isPacked={false} name={'Black pens'} />
                    <Item isPacked={false} name={'Winter clothes'} />
                </ul>
            </div>
        </section>
    );
}