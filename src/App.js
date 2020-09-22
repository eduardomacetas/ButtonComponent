import React from 'react';
import './App.css';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <Button/>
      <Button disabled="true"/>
    </div>
  );
}

export default App;
