import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
    <div className="navBar">
      <div className="title">
        <span className="highlight">Dev</span>challenges.io
      </div>
      <div className="nav-wrapped">
        <div className="item"> Colors </div>
        <div className="item"> Typography </div>
        <div className="item"> Spaces </div>
        <div className="item"> Buttons </div>
        <div className="item"> Inputs </div>
        <div className="item"> Grid </div>
      </div>
    </div>
  )}
}

export default NavBar