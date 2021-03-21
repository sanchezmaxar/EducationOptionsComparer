import React from 'react';
import {
  Button, ButtonGroup, Container, Col, Row,
} from 'react-bootstrap';

const CustomToolbar = ({ projectName }) => (
  <Container className="mt-3">
    <Row>
      <Col md={2}>
        <h2>
          Project
          {' '}
          {projectName}
        </h2>
      </Col>
      <Col md={{ span: 'auto', offset: 7 }} >
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
  </Container>

);
export default CustomToolbar;
