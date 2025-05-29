import '../semana4/styles/Form.css';
import { useState } from 'react';

export default function FormQuiz() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');
    if (status === 'success') {
        return <h3>That's right!</h3>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextAreaChange(e) {
        setAnswer(e.target.value);
    }
    return (
        <section>
            <h2 className='titulo'>📋 City Quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer} onChange={handleTextAreaChange} disabled={status === 'submitting'} />
            <button disabled={
                answer.length === 0 || status === 'submitting'
            }>Submit</button>
            {error !== null && <p className='error'>{error.message}</p>}
            </form>
        </section>
    );
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError) {
                reject(new Error('Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}