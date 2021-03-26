import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { OptionCard } from '..';
import CustomToolbar from '../CustomToolbar';

const Workspace = () => {
  const projectName = 'Test';

  return (
    <Container fluid>
      <CustomToolbar projectName={projectName} />
      <Row lg className="bg-light m-auto mt-2 rounded workspace border border-secondary" style={{ height: '80vh', width: '100%', padding: '10px' }}>
        <OptionCard />
      </Row>
    </Container>
  );
};
export default Workspace;
