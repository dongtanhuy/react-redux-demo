import React  from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  const increase = () => dispatch({ type: 'INCREASE'})
  const decrease = () => dispatch({ type: 'DECREASE'})
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

export default (Counter);
