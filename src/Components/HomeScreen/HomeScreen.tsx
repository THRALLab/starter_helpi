import React from 'react';
import BasicButton from '../BasicButton/BasicButtton';
import DetailedButton from '../DetailedButton/DetailedButton';
import './HomeScreen.css'
import { Card, CardGroup } from 'react-bootstrap';

//passed the state fields from app.tsx as props to the homescreen so they could then be passed down to the button components
export function HomeScreen({ page, setPage }: Readonly<{ page: string; setPage: (newPage: string) => void }>) {

  return (
    <div className="Container">
      <div className="Title">
        <h1>Select A <span style={{ color: '#6923ff' }}>Quiz</span></h1>
      </div>
      <div className="card-container">
        <Card style={{ color: 'white', backgroundColor: '#21273b'}}>
          <Card.Header style={{ fontSize: 18, fontWeight: 'bold', padding: "1rem 0rem" }}>Basic Quiz</Card.Header>
          <Card.Body >
            <Card.Text className='card-desc'>
              If you're looking for a quick quiz use this choice! A few brief
              questions with simple answers is all that will be asked to give you an accurate
              option of the ideal career for you! With the power of AI, your answers will be used
              to suggest a job that would make you feel fulfilled.
            </Card.Text>
          </Card.Body>
          <BasicButton page={page} setPage={setPage}></BasicButton>
        </Card>
        <Card style={{ color: 'white', backgroundColor: '#21273b' }}>
          <Card.Header style={{ fontSize: 18, fontWeight: 'bold', padding: "1rem 0rem" }}>Detailed Quiz</Card.Header>
          <Card.Body >
            <Card.Text className='card-desc'>
              If you're looking for a quick quiz use this choice! A few brief
              questions with simple answers is all that will be asked to give you an accurate
              option of the ideal career for you! With the power of AI, your answers will be used
              to suggest a job that would make you feel fulfilled.
            </Card.Text>
          </Card.Body>
          <DetailedButton page={page} setPage={setPage}></DetailedButton>
        </Card>
      </div>
    </div>
  )
}
