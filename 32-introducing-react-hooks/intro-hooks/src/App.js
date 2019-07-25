import React from "react";
import "./App.css";
import CounterClass from "./CounterClass";
import CounterHooks from "./CounterHooks";
import Toggler from "./Toggler";
import SimpleFormClass from "./SimpleFormClass";
import SimpleFormHooks from "./SimpleFormHooks";
import SimpleFormInputHooks from "./SimpleFormInputHooks";
import Clicker from "./Clicker";
import SWMovies from "./SWMovies";

function App() {
  return (
    <div className="App">
      <SWMovies />
      <Clicker />
      <SimpleFormInputHooks />
      <SimpleFormHooks />
      <SimpleFormClass />
      <Toggler />
      <CounterHooks />
      <CounterClass />
    </div>
  );
}

export default App;
