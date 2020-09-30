import { render } from '@testing-library/react';
import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <div className="title"> Buttons </div>
      </div>
    )
  }
}

export default Buttons;