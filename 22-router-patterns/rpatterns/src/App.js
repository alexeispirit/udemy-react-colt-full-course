import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Food from './Food';
import Meal from './Meal';
import FoodSearch from './FoodSearch';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* <Route exact path='/food/:name' render={(routeProps) => <Food name={routeProps.match.params.name} />} /> */}
        {/* <Route exact path='/food/:name' render={(routeProps) => <Food {...routeProps} authenticated={true} />} /> */}
        <Route exact path='/food/:name' component={Food} />

        <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />

        <Route exact path='/' component={FoodSearch} />
        {/* <Route exact path='/' render={(routeProps) => <FoodSearch {...routeProps} />} /> */}
        <Route render={() => <h1>404 Not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
