import { Container, Row, Col, Nav, Tab, ListGroup } from 'react-bootstrap';
import homeIcon from './house.svg';
import BrainIcon from './modifiedBrainIcon.svg';
import { Button } from 'react-bootstrap';

function CareerSearchByInterest({handlePage} : {handlePage: (page: string) => void}) {

    return (
        <>
        <header className="header">
          <div className="title-container">
            <img src={BrainIcon} alt="Brain Icon" className="brainIcon" onClick ={() => handlePage('Home')} />
            <h2 className="title" onClick ={() => handlePage('Home')}>Brain Spark</h2>
            <Button className="home-button" onClick={() => handlePage('Home')}><img src={homeIcon} alt="Home Page" className="homeIcon" /></Button>
          </div>
        </header>

        <Container className="mt-5">
            <Tab.Container id="interest-tabs" defaultActiveKey="realistic">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="realistic">Realistic</Nav.Link>
                            </Nav.Item>
                            {/* Add other interest categories here */}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="realistic">
                                <h3>Realistic Interests</h3>
                                <ListGroup>
                                    <ListGroup.Item>Airline Pilots / Copilots & Flight Engineers</ListGroup.Item>
                                    <ListGroup.Item>Automotive Engineers</ListGroup.Item>
                                    {/* Add more careers */}
                                </ListGroup>
                            </Tab.Pane>
                            {/* Add other interest categories here */}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
        </>
      )
}

export default CareerSearchByInterest;