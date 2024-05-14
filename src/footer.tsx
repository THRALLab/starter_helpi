import React, { useState } from 'react';
import simple_logo  from "./images/CISC-Footer-Logo.png";
import github from "./images/CISC-Footer-GIT.png";
import { Button, Form } from 'react-bootstrap';
import './footer.css';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function Footer() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return(
    <footer>
      <div id="logo-text-footer">
          <img
            src={simple_logo}
            alt="small-logo"
            className ="footer-logo"
          />
      <div className="API-footer">
        <Form className="API-form">
            <Form.Label>API Key: </Form.Label>
            <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
            <Button className="submit-Button" onClick={handleSubmit}>Submit</Button>
        </Form>
     </div>
      
      <a href='https://github.com/VikiNiki123/starter_helpi' className="contact-info-footer">
        <img
                src={github}
                alt="GitHub"
                className ="footer-logo"
            />
      </a>
    </div>
    

  </footer>
  );
}
export default Footer;
    