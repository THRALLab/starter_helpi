import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DescriptionTable() {
    return (
        <Container>
          <Row>
            <Col>{/* Empty column to push content to the right */}</Col>
            <Col className="text-center">1 of 2</Col>
            <Col className="text-center">2 of 2</Col>
          </Row>
        </Container>
      );
    }
export default DescriptionTable;
