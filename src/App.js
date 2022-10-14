import React from 'react';
import  Counter from './features/counter/Counter';
import  CounterDebug from './features/counter/Counter_Debug';
import './App.css';

function App() {
  return (
    <div className="App">
      <CounterDebug />
    </div>
  );
}

export default App;
