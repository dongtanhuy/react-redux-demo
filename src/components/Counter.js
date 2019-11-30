import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrease = () => setCount(count - 1)
  const increase = () => setCount(count + 1)
  return (
    <div className="counter">
      <h1 className="counter-title">Counter</h1>
      <div>
        <button className="counter-button" onClick={decrease}>-</button>
        <span className="counter-value">{count}</span>
        <button className="counter-button" onClick={increase}>+</button>
      </div>
    </div>
  )
}

export default Counter;
