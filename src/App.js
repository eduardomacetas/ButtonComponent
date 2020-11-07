import React from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Header from './component/Header/Header';
import ShowButtons from './component/ShowButtons/ShowButtons';
import Footer from './component/Footer/Footer';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ShowButtons />
      <Footer />
    </div>
  );
}

export default App;
