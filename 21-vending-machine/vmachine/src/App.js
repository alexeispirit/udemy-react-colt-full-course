import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <VendingMachine />} />
        <Route exact path='/soda' render={() => <Soda />} />
        <Route exact path='/sardines' render={() => <Sardines />} />
        <Route exact path='/chips' render={() => <Chips />} />
      </Switch>
    </div>
  );
}

export default App;
