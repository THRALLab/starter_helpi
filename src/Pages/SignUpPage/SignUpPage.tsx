import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap"
import "./SignUpPage.css"

export function SignUpPage() : React.JSX.Element {
    return (
        <div className = "sign-up-page">
            <div className = "sign-up-page--content">
                <div className = "sign-up-page--form-container"> 
                    <h1>Let's Make An Account! </h1>
                    <div className = "form-container--content">
                        <Form>
                            <Form.Group className="mb-3 col">
                                <Container fluid>
                                    <Row>
                                        <FloatingLabel label="First Name"> 
                                            <Form.Control type = "text"/>
                                        </FloatingLabel>

                                        <FloatingLabel label = "Last Name"> 
                                            <Form.Control type = "text" />    
                                        </FloatingLabel>
                                    </Row>
                                </Container>
                            </Form.Group>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}