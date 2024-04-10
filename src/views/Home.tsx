import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import { Footer } from "../components/Footer";

function Home() {
    return (
        <div style = {{position: 'relative', top: '100px'}} className="text-center">
            <h1 className="text-center">
                FindYourCareer
            </h1>
            <h5 className="text-center">
                for
            </h5>
            <h4 className="text-center">
                UNIVERSITY OF DELAWARE STUDENTS
            </h4>
            <div style = {{position: 'relative', top: '50px'}} className='text-center'>
                <span style={ {border: '2px solid black', padding: '4px'} }>
                    Home
                </span>
                <span style={ {border: '2px solid black', padding: '4px'} }>
                    Basic Questions
                </span>
                <span style={ {border: '2px solid black', padding: '4px'} }>
                    Detailed Questions
                </span>
            </div>
            <div style = {{position: 'relative', top: '150px'}}>
                <Row className='text-center'>
                    <Col>
                        <h3>
                            Basic Questions
                        </h3>
                        <h6>
                            Insert Description
                        </h6>
                    </Col>
                    <Col>
                        <h3>
                            Detailed Questions
                        </h3>
                        <h6>
                            Insert Description
                        </h6>
                    </Col>
                </Row>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;