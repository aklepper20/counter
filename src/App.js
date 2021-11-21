import React, { useState, useEffect } from 'react';
import './style.css';
import Buttons from './components/Buttons';

export default function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#112a42');

  useEffect(() => {
      if(count < 0 ){
        setColor("red")
      } else if (count > 0) {
        setColor('green')
      } else {
        setColor('#112a42')
      }
  }, [count]);

  return (
    <div className="container">
      <div className="main">
        <h1 className="header">Counter</h1>
        {color}
        <h1
          style={{ color: color }}
          className="number"
        >
          {count}
        </h1>
        <Buttons
          count={count}
          setCount={setCount}
        />
      </div>
    </div>
  );
}
