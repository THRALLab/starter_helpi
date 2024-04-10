import BasicButton  from '../BasicButton/BasicButtton';
import DetailedButton from '../DetailedButton/DetailedButton';
import './HomeScreen.css'
import { Card } from 'react-bootstrap';


export function HomeScreen ({page, setPage}: {page:string; setPage: (newPage: string) => void}) {


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
                <BasicButton page={page} setPage={setPage}></BasicButton>
              </Card.Body>
            </Card>
            <Card className="Home-box Right-Box">
              <Card.Title>Detailed Quiz</Card.Title>
              <Card.Text>
                The description
              </Card.Text>
              <DetailedButton page={page} setPage={setPage}></DetailedButton>
            </Card>
        </div>
      </div>
    )
}