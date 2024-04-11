import './homePage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { SwitchPages } from './interfaces/SwitchPages';
import { BasicQButton } from './components/basicQButton';

export function HomePage ({setCurrentPage}: SwitchPages) {

    return(
        <div>
            <title> header of page </title>
            <div>
                <header >
                    <div style={ {border: '3px', fontSize: 16, padding: '8px', color: "#ff6347", backgroundColor: "white"} }>
                        <div className="right"> <p>Home | Account | LogOut | Results</p> </div>
                        <p> Quiz Home Page</p> 
                    </div>

                </header>
                <body style={ {border: '3px white', padding: '4px', color: "#44506a", backgroundColor: "#aebcda", justifyContent:"right"} }>
                    <div >
                    <Container >
                    <Row >
                        <Col className=" box2">
                                meow12
                        </Col>
                        <Col>
                            <Row style={{display:"flex", justifyContent:"right"}}>
                            <Col className= "  red box">
                                <BasicQButton setCurrentPage={setCurrentPage}></BasicQButton>
                            </Col>
                            <Col className= "  green box">
                                meow description                        
                            </Col>
                            </Row>
                            <Row style={{display:"flex", justifyContent:"right"}}>
                                <Col className= "  pink box">
                                    meow button 2
                                </Col>
                                <Col className= "  orange box">
                                    detailed meow description 
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    </Container>
                    </div>
                </body>
            </div>
        </div>
    );
}

