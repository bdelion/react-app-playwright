import React from 'react';
import Button from './Button';

const App = () => (
  <div>
    <h1>Hello React 16</h1>
    <Button label="Click Me" onClick={() => alert('Clicked!')} />
  </div>
);

export default App;
