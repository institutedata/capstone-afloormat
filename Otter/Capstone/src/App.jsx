import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src="#" className="logo" alt="Logo 1" />
        </a>
        <a href="#" target="_blank">
          <img src="#" className="logo react" alt="Logo 2" />
        </a>
      </div>
      <h1>Title</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </>
  );
}
 //This code is all bs I'm not going to put my actual code on tiktok/socials lol that's dumb
export default App;
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src="#" className="logo" alt="Logo 1" />
        </a>
        <a href="#" target="_blank">
          <img src="#" className="logo react" alt="Logo 2" />
        </a>
      </div>
      <h1>Title</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
      {/* Placeholder code */}
      {Array.from({ length: 100 }, (_, index) => (
        <div key={index}>
          <p>This is line {index + 1}</p>
        </div>
      ))}
    </>
  );
}

export default App;