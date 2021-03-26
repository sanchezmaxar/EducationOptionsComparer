import { Card } from 'react-bootstrap';
import { Rnd } from 'react-rnd';
import React, { useState } from 'react';
import EditableLabel from 'react-inline-editing';
import EdiText from 'react-editext';

const OptionCard = () => {
  const [dragIsDisable, setDragIsDisable] = useState(false);
  const handleFocus = () => {
    setDragIsDisable(true);
  };
  const handleFocusOut = () => {
    setDragIsDisable(false);
  };
  const onSaveHandler=()=>{
    console.log();
    setDragIsDisable(false);
 } ;
 const onEditingStartHandler=()=>{
  setDragIsDisable(true);
 };

  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 320,
      }}
      disableDragging={dragIsDisable}
      bounds="parent"
      className="p-2 min-h-100 h-fit-content"
    >
      <Card className="min-h-100 h-fit-content">
        <Card.Header>
          <EditableLabel
            text="Hello!"
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
          <EdiText
            type="textarea"
            inputProps={{
              className: 'textarea',
              placeholder: 'Type your content here',
              style: {
                outline: 'none',
                minWidth: 'auto',
              },
              rows: 5,
            }}
            value="How do you define real? If you're talking about what you can feel, what you can smell,\
  what you can taste and see, then real is simply electrical signals interpreted by your brain"
            onSave={onSaveHandler}
            onEditingStart={onEditingStartHandler}
          />
        </Card.Body>
      </Card>
    </Rnd>

  );
};

export default OptionCard;
