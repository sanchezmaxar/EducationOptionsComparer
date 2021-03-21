import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { OptionCard } from '..';
import CustomToolbar from '../CustomToolbar';

const Workspace = ({
  children,
}) => {
  const projectName = 'Test' ;

  return (
    <Container fluid >
      <Row>
        <CustomToolbar projectName={projectName} />
      </Row>

      <Row lg className="bg-light m-auto mt-2 rounded workspace ">
          <div className="box" style={{height: '100%', width: '100%', position: 'relative', overflow: 'auto', padding: '0'}}>


          <div style={{height: '100%', width: '100%', padding: '10px'}} >
        <OptionCard />
        
          </div>
          </div>
              
      </Row>
    </Container>
  );
};
export default Workspace;
