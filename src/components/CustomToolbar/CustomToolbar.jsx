import React from 'react';
import {
  Button, ButtonGroup, Col, Row,
} from 'react-bootstrap-v5';
import EditableLabel from 'react-inline-editing';

const CustomToolbar = ({ projectName }) => (

  <Row className="mt-3">
    <Col md={2}>

      <EditableLabel
        text={projectName}
        labelClassName="fs-2 "
        inputClassName="form-control fs-4 "
        inputMaxLength={50}
        labelFontWeight="bold"
        inputFontWeight="bold"
      />

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
