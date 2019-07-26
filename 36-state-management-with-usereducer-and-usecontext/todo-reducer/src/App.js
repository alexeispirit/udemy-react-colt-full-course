import React from "react";
import TodoApp from "./TodoApp";

function App() {
  return <TodoApp />;
}

export default App;

// (accumulatedValue, nextItem) => nextAccumulatedValue
// takes two values and "reduces" them down to one value

// In useReducer the two values provided to a reducer are:
// - The current state
// - An action that (may) update the state

// (state, action) => newState

// {type: 'ADD_TODO', task: 'Walk the Cat'}
// {type: 'INCREMENT', amount: 3}
// {type: 'CHANGE_THREAT_LEVEL', level: 'red alert'}
