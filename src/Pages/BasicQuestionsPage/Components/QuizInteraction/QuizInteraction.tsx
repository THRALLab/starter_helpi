import './QuizInteraction.css';

export function QuizInteraction() : JSX.Element{
    return (
        <>
            <div className='buttons'>
                <button className='previous-button'>Previous</button>
                <button className='reveal-answers-button'>Reveal Answers</button>
                <button className='next-button'>Next</button>
            </div>
        </>
    );
}