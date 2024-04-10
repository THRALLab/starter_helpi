import React from 'react';
import { Button, Form, OverlayTrigger, TooltipProps, Tooltip, InputGroup } from 'react-bootstrap';
import './AppFooter.css';
import { BsGithub } from 'react-icons/bs';

const AppFooter = ({ changeKey, handleSubmit }: {
  changeKey: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: () => void
}) => {
  const renderTooltip = (props: TooltipProps) => (
    <Tooltip id="button-tooltip" {...props}>Click to see our source code</Tooltip>
  );

  return (
    <div className='container'>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <a href="https://github.com/MichaelLutz1/starter_helpi" target="_blank" rel="noreferrer">
          <Button variant="secondary">
            <BsGithub />
          </Button>
        </a>
      </OverlayTrigger>
      <Form>
        <InputGroup>
          <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
          <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
        </InputGroup>
      </Form>
        <div className='names-container'>Made by: Michael Forte, Michael Lutz, Jacob Wilber, Colin Parsons</div>
    </div>
  );
};

export default AppFooter;
