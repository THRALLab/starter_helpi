import './HomeScreen.css'
import { Card } from 'react-bootstrap';

export function HomeScreen () {


    return (
      <div className="Left-container"> 
        <div>
          <Card className="Home-box">
            <Card.Body>
              <Card.Title>Basic Quiz</Card.Title>
              <Card.Text>A description</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="Right-container">
          <Card className="Home-box">
            <Card.Title>Detailed Quiz</Card.Title>
            <Card.Text>
              The description
            </Card.Text>
          </Card>
        </div>
      </div>
    )
}