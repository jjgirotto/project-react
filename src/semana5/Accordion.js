import './styles/Accordion.css';
import { useState } from 'react';

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section>
            <h2 className='titulo'>📋 Accordion</h2>
            <h3>London, England</h3>
            <Panel title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
                London is the capital and largest city of the United Kingdom, standing on the River Thames in southeast England. It is a global city known for its history, culture, and finance.
            </Panel>
            <Panel  title="Etymology" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
                The name "London" is believed to have originated from the Roman name *Londinium*, established around AD 43. The origin is uncertain, but it may be of pre-Celtic or Celtic origin.
            </Panel>
        </section>
    );
}

function Panel({
    title, children, isActive, onShow
}) {
    return (
        <section className='panel'>
            <h3>{title}</h3>
            {isActive ? (<p>{children}</p>) : (<button onClick={onShow}>Show</button>)}
        </section>
    );
}