import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time

const OptionCard = () => (
  <Draggable bounds="parent">
    <div className="option-card">
      <div className="handle">Drag from here</div>
      <div>This readme is really dragging on...</div>
    </div>
  </Draggable>

);

export default OptionCard;
