import React, { Component } from 'react';
import Game from './Game';
import Rando from './Rando';
import StateClicker from './StateClicker';
import BrokenClick from './BrokenClick';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StateClicker />
        <Game />
        <BrokenClick />
        <Rando maxNum={7} />
      </div>
    );
  }
}

export default App;
