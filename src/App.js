import React from 'react';
import './App.css';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <Button/>
      <Button disabled="true"/>
      <Button disableShadow="true"/>
      <Button size="sm" />
    </div>
  );
}

export default App;
