import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Button from '@mui/joy/Button';


export function BasicQuestionsPage(): JSX.Element {
    const questions = [
		{
			questionText: 'Question 1',
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3'},
				{ answerText: 'Option 4'},
			],
		},
		{
			questionText: 'Question 2',
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		},
		{
			questionText: 'Question 3',
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		},
		{
			questionText: 'Question 4',
			answerOptions: [
				{ answerText: 'Option 1' },
				{ answerText: 'Option 2' },
				{ answerText: 'Option 3' },
				{ answerText: 'Option 4' },
			],
		},
	];    

    const [goToHomePage, setGoToHomePage] = React.useState(false);
    const [inputText, setInputText] = React.useState("");
    const [goToDetailedQuestionsPage, setGoToDetailedQuestionsPage] = React.useState(false);
    const [displayFinishButton, setDisplayFinishButton] = React.useState(false);
    const [displayFinalResults, setDisplayFinalResults] = React.useState(false);

    const [currentQuestion, setCurrentQuestion] = React.useState(0);

    const handleCurrentQuestion = () => {
        const currentQuestionIndex = currentQuestion + 1;
        
        if (currentQuestionIndex < questions.length) {
            setCurrentQuestion(currentQuestionIndex)
        }

        if (currentQuestionIndex === questions.length - 1) {
            setDisplayFinishButton(true);
        }
    
    }

    const handleGoToHomePage = () => {
        setGoToHomePage(true);
    };

    const handleClearText = () => {
        setInputText("");
    };

    if (goToHomePage) {
        return <Navigate to="/" />;
    }

    const handleDisplayFinalResults = () => {
        setDisplayFinalResults(true);
        setDisplayFinishButton(false);
    }
   
    //const [goToHomePage, setGoToHomePage] = React.useState(false);

    if (goToDetailedQuestionsPage) {
        return <Navigate to="/DetailedQuestionsPage"/>
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>CareerFinder4U</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
              <Nav.Link onClick={handleGoToHomePage}>Home</Nav.Link>
              <Nav.Link onClick={() => {setGoToDetailedQuestionsPage(true)}}>Detailed Questions Page</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            <p></p>
            <h1 className='padding3'>Basic Questions Page</h1>
            <p className="text-muted">This basic career assessment is hand crafted to help comprehend preferences and strengths that you have and which specific careers they are best suited for. You'll gain insights into the types of careers and opportunities that may suit you best. Coming soon. </p>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <Button onClick={handleClearText}>Reset</Button>
            {!displayFinalResults && <div>
                <p>{currentQuestion+1}/{questions.length}</p>
                <p>{questions[currentQuestion].questionText}</p>
                <p>{questions[currentQuestion].answerOptions.map((answerOption) => <p>{answerOption.answerText}</p>)}</p>
            </div>}
            {(!displayFinishButton && !displayFinalResults)&& <div><Button onClick={handleCurrentQuestion}>Next Question</Button></div>}
            
            {displayFinalResults && <div>Final Results</div>}
            {(displayFinishButton) && <div><Button color='success' onClick={handleDisplayFinalResults}>Finish & Get Results</Button></div>}
            <p></p>
            
        </div>
    );
}
