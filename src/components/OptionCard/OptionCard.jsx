import { Card } from 'react-bootstrap';
import { Rnd } from 'react-rnd';
import React from 'react';

const OptionCard = () => (
  <Rnd
    default={{
      x: 0,
      y: 0,
      width: 320,
      height: 200,
    }}
    bounds="parent"
    className="p-2"
  >
    <Card className="h-100">
      <Card.Header>
        <div className="handle">Drag from here</div>
      </Card.Header>
      <Card.Body>

        <div>This readme is really dragging on...</div>
      </Card.Body>
    </Card>
  </Rnd>

);

export default OptionCard;
