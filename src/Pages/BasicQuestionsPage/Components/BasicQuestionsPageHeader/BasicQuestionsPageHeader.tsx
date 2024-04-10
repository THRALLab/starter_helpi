import './BasicQuestionsPageHeader.css';

export function BasicQuestionsPageHeader() : JSX.Element {

    return (
       <div className ='basic-questions-page-header'>
        <h1 className ='basic-questions-page--heading'>Short Quiz!</h1>
        <h2 className = 'basic-questions-page--sub-header'>
            Let's Begin! Take your Time.
        </h2>
       </div>
    )
}