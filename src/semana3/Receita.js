import './List.css';

function Ingredients({drinkers}) {
    return (
        <ol>
            <li>{0.5 * drinkers} cup of all-purpose flour;</li>
            <li>{drinkers} tablespoons of olive oil;</li>
            <li>{0.25 * drinkers} teaspoon of salt;</li>
            <li>{0.25 * drinkers} cup of warm water;</li>
            <li>{0.5 * drinkers} teaspoon of active dry yeast;</li>
            <li>{0.25 * drinkers} teaspoon of sugar;</li>
        </ol>
    );
}

export default function Recipe() {
    return (
        <section>
            <h2 className='galeria'>🍕 Homemade Pizza Dough Recipe</h2>
            <div className='toDoList'>
                <h2 className='tituloh2'>For two</h2>
                <Ingredients drinkers={2} />
                <h2 className='tituloh2'>For a gathering</h2>
                <Ingredients drinkers={4} />
            </div>
        </section>
    );
}