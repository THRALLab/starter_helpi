import './HomeScreen.css'
import { Card } from 'react-bootstrap';

export function HomeScreen () {


    return (
      <div className="Container">
        <div className="Title">
          <h1>Select A Quiz:</h1>
        </div>
        <div className="Both-boxes">
            <Card className="Home-box">
              <Card.Body>
                <Card.Title>Basic Quiz</Card.Title>
                <Card.Text>A description</Card.Text>
              </Card.Body>
            </Card>
            <Card className="Home-box Right-Box">
              <Card.Title>Detailed Quiz</Card.Title>
              <Card.Text>
                The description
              </Card.Text>
            </Card>
        </div>
      </div>
    )
}