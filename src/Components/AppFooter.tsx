import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { OverlayTrigger, TooltipProps, Tooltip } from 'react-bootstrap';

const AppFooter = ({ changeKey, handleSubmit }:
  {
    changeKey: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: () => void
  }) => {
  const renderTooltip = (props: TooltipProps) => (
    <Tooltip id="button-tooltip" {...props}>Click to see our source code</Tooltip>
  );

  return (
    <div>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="success">Hover me to see</Button>
      </OverlayTrigger>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default AppFooter;
