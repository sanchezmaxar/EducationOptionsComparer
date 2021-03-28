import React from 'react';
import { Container, Row } from 'react-bootstrap-v5';
import { OptionCard } from '..';
import CustomToolbar from '../CustomToolbar';

const Workspace = () => {
  const projectName = 'Test';
  const optionCardList = [
    {
      optionTitle: 'option 1',
      chars: {
        qualityOne: {
          id: 1,
          desc: 'char one',
          value: 1,
        },
        qualityTwo: {
          id: 2,
          desc: 'char two',
          value: 313,
        },
        qualityThree: {
          id: 3,
          desc: 'char three',
          value: 123,
        },
      },
      position: {
        x: 1,
        y: 1,
      },
    },
    {
      optionTitle: 'option 2',
      chars: {
        qualityOne: {
          id: 1,
          desc: 'char one',
          value: 1,
        },
        qualityTwo: {
          id: 2,
          desc: 'char tres',
          value: "hola",
        },
        qualityThree: {
          id: 3,
          desc: 'char dos',
          value: "otro valor",
        },
      },
      position: {
        x: 300,
        y: 400,
      },
    },
  ];
  const cards = optionCardList.map((x, i) => <OptionCard key={`option-card-${i}`} title={x.optionTitle} chars={x.chars} position={x.position} />);

  return (
    <Container fluid>
      <CustomToolbar projectName={projectName} />
      <Row lg className="bg-light m-auto mt-2 rounded workspace border border-secondary" style={{ height: '80vh', width: '100%', padding: '10px' }}>
        {cards}
      </Row>
    </Container>
  );
};
export default Workspace;
