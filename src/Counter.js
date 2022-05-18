import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.INCREMENT) {
    return { count: state.count + 1 };
  } else {
    return { count: state.count - 1 };
  }
};

const Counter = () => {
  // The array will have the state and a function called dispatch (sets action) that will call the reducer function
  // useReducer uses 2 parameters to start: a reducer (function that we perform on our state to get new state) and an initial value:

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>-</button>
    </>
  );
};

export default Counter;
