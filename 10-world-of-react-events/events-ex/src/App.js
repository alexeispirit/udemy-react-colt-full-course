import React, { Component } from 'react';
// import WiseSquare from './WiseSquare';
import WiseSquare from './WiseSquareWithProps';
import AnnoyingForm from './AnnoyingForm';
import CopyDemo from './CopyDemo';
import ButtonList from './ButtonList';
// import NumberList from './NumberList';
import NumberList from './BetterNumberList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <WiseSquare />
        <AnnoyingForm />
        <CopyDemo />
        <ButtonList /> */}
        <NumberList />
      </div>
    );
  }
}

export default App;
