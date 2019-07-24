import React from 'react';
import NameForm from './NameForm';
import MultipleForm from './MultipleForm';
import ShoppingList from './ShoppingList';
import './App.css';

function App() {
  return (
    <div className="App">
      <NameForm />
      <MultipleForm />
      <ShoppingList />
    </div>
  );
}

export default App;
