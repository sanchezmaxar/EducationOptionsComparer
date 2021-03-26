import React from 'react';
import {
  Button, ButtonGroup, Container, Col, Row,
} from 'react-bootstrap';

const CustomToolbar = ({ projectName }) => (

  <Row className="mt-3">
    <Col md={2}>
      <h2>
        Project
        {' '}
        {projectName}
      </h2>
    </Col>
    <Col md={{ span: 3, offset: 7 }}>
      <ButtonGroup>
        <Button>
          Export
        </Button>
        <Button>
          Save
        </Button>
        <Button>
          New Project
        </Button>
      </ButtonGroup>
    </Col>
  </Row>

);
export default CustomToolbar;
