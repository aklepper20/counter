import React from 'react';

const Buttons = ({ setCount, count }) => {
  return (
    <div>
      <div className="buttons">
        <div onClick={() => setCount(count - 1)} className="button">
          Decrease
        </div>
        <div onClick={() => setCount(0)} className="button">
          Reset
        </div>
        <div onClick={() => setCount(count + 1)} className="button">
          Increase
        </div>
      </div>
    </div>
  );
};

export default Buttons;
