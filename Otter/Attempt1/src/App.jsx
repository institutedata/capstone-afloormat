import React from 'react';
import ReactDOM from 'react-dom';
import { Component1, Component2 } from './components';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Component1 />
      <Component2 />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));