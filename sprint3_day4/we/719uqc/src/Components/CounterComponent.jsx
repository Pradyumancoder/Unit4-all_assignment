import { useReducer, useState } from "react";
import {
  countReducer,
  decrementAction,
  incrementAction
} from "../Reducer/reducer";

function CounterComponent() {
  // DISPATCH, WE HAVE REMOVED IT, AND KEPT IT INSIDE A REDUCER
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <h1> Count : {state.count} </h1>
      <button onClick={() => dispatch(incrementAction)}>ADD</button>
      <button onClick={() => dispatch(decrementAction)}>REDUCE</button>
    </div>
  );
}

export default CounterComponent;

function _CounterComponent() {
  // WHEN USING STATE, HOW THE STATE GETS UPDATED
  // ITS WITHIN THE COMPONENT
  const [state, setState] = useState({ count: 0 });
  function handleIncrement() {
    setState(state + 1);
  }
  function handleDecrement() {
    setState(state - 1);
  }

  return (
    <div>
      <h1> Count : {state.count} </h1>
      <button onClick={handleIncrement}>ADD</button>
      <button onClick={handleDecrement}>REDUCE</button>
    </div>
  );
}
