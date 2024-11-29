import BasicButton  from '../BasicButton/BasicButtton';
import DetailedButton from '../DetailedButton/DetailedButton';
import './HomeScreen.css'
import { Card, CardGroup } from 'react-bootstrap';

//passed the state fields from app.tsx as props to the homescreen so they could then be passed down to the button components
export function HomeScreen ({page, setPage}: {page:string; setPage: (newPage: string) => void}) {


    return (
      <div className="Container">
        <div className="Title">
          <h1>Select A Quiz:</h1>
        </div>
        <div className="Both-boxes">
          <CardGroup>
            <Card style={{height: '20rem', width: '30vh'}}>
            <Card.Header style={{fontSize: 18, fontWeight: 'bold'}}>Basic Quiz</Card.Header>
              <Card.Body>
                <Card.Text>
                  If you're looking for a quick quiz use this choice! A few brief
                  questions with simple answers is all that will be asked to give you an accurate 
                  option of the ideal career for you! With the power of AI, your answers will be used
                  to suggest a job that would make you feel fulfilled.
                </Card.Text>
              </Card.Body>
              <BasicButton page={page} setPage={setPage}></BasicButton>
            </Card>
            <Card style={{height: '20rem', width: '30vh'}}>
              <Card.Header style={{fontSize: 18, fontWeight: 'bold'}}>Detailed Quiz</Card.Header>
              <Card.Body>
              <Card.Text>
                If you have time and want a more refined answer choose this quiz! You will be asked 
                more in depth questions and provoke more thoughts about your interests and personality.
                This quiz will also use AI to refine your answer even further and give a more specific 
                answer.
              </Card.Text>
              </Card.Body>
              <DetailedButton page={page} setPage={setPage}></DetailedButton>
            </Card>
            </CardGroup>
        </div>
      </div>
    )
}