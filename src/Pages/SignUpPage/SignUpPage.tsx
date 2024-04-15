import { Form} from "react-bootstrap"
import "./SignUpPage.css"

export function SignUpPage() : React.JSX.Element {
    return (
        <div className = "sign-up-page">
            <div className = "sign-up-page--content">
                <div className = "sign-up-page--form-container"> 
                    <h1>Let's Make An Account! </h1>
                    <div className = "form-container--content">
                        <Form>
                            {/* <Form.Group className="mb-3 col">
                                    
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Gender</Form.Label> 
                                <Form.Select className = "Form--Selection">
                                    <option value = "Male"> Male </option>
                                    <option value = "Female"> Female </option>
                                    <option value = "N/A"> Prefer Not To Say</option>
                                </Form.Select>
                            </Form.Group> */}
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}