import { useSelector, useDispatch } from 'react-redux';
import { allActions } from '../store/Reduxs'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.counter)
  const shows = useSelector(state => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(allActions.increment())
  }

  const increaseHandler = () => {
    dispatch(allActions.increase(5))
  }

  const decrementHandler = () => {
    dispatch(allActions.decrement())
  }

  const decreaseHandler = () => {
    dispatch(allActions.decrease(8))
  }


  const resetCounterHandler = () => {
    dispatch(allActions.reset())
  };

  const toggleCounterHandler = () => {
    dispatch(allActions.toggle())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {shows && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decreaseHandler}>Decrement by 8</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetCounterHandler}>Reset Counter</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;