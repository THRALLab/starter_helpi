import { Container, Row, Col, Tab, ListGroup } from 'react-bootstrap';

function Interests({handlePage} : {handlePage: (page: string) => void}) {

    return (
        <>
        <Container className="mt-5">
            <Tab.Container id="interest-tabs" defaultActiveKey="realistic">
                <Row>
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

export default Interests;