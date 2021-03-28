import { Card } from 'react-bootstrap-v5';
import { Rnd } from 'react-rnd';
import React, { useState } from 'react';
import EditableLabel from 'react-inline-editing';
import EdiText from 'react-editext';

const OptionCard = ({ title, chars, position }) => {
  const [dragIsDisable, setDragIsDisable] = useState(false);
  const handleFocus = () => {
    setDragIsDisable(true);
  };
  const handleFocusOut = () => {
    setDragIsDisable(false);
  };
  const onSaveHandler = () => {
    setDragIsDisable(false);
  };
  const onEditingStartHandler = () => {
    setDragIsDisable(true);
  };
  const charList = [];
  Object.keys(chars).forEach((key) => {
    charList.push(
      <div className="row" key={`char-div-${chars[key]?.id}`}>
        <div className="col-6">

          <span key={`char-label-${chars[key]?.id}`} className="d-inline mr-1">
            {chars[key]?.desc}
            :
          </span>
        </div>
        <div className="col-6">
          <EditableLabel
            key={`char-edit-${chars[key].id}`}
            text={chars[key]?.value.toString()}
            labelClassName="char-label"
            inputClassName="form-control"
            inputMaxLength={50}
            labelFontWeight="bold"
            inputFontWeight="bold"
            onFocus={handleFocus}
            onFocusOut={handleFocusOut}
          />
        </div>
        <hr/>
      </div>,
    );
  });

  return (
    <Rnd
      default={{
        x: position.x,
        y: position.y,
        width: 320,
      }}
      disableDragging={dragIsDisable}
      bounds="parent"
      className="p-2 min-h-100 h-fit-content"
    >
      <Card className="min-h-100 h-fit-content">
        <Card.Header>
          <EditableLabel
            text={title}
            labelClassName="myLabelClass"
            inputClassName="myInputClass"
            inputWidth="200px"
            inputHeight="25px"
            inputMaxLength={50}
            labelFontWeight="bold"
            inputFontWeight="bold"
            onFocus={handleFocus}
            onFocusOut={handleFocusOut}
            className="handle"
          />
        </Card.Header>
        <Card.Body className="h-fit-content">
          <div className="container" key={title}>
          {charList}
          </div>
        </Card.Body>
      </Card>
    </Rnd>

  );
};

export default OptionCard;
