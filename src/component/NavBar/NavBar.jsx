import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
    <div className="navbar">
      <div className="title">
        <span className="highlight">Dev</span>challenges.io
      </div>
      <div className="nav-wrapped">
        <a className="item" href="#Colors"> Colors </a>
        <a className="item" href="#Typography"> Typography </a>
        <a className="item" href="#Spaces"> Spaces </a>
        <a className="item" href="#Buttons"> Buttons </a>
        <a className="item" href="#Inputs"> Inputs </a>
        <a className="item" href="#Grid"> Grid </a>
      </div>
    </div>
  )}
}

export default NavBar