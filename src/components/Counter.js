import React  from 'react';
import { increase, decrease } from '../redux/actions'
import { connect } from 'react-redux';

const Counter = ({
  count,
  increase,
  decrease
}) => {
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
const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
