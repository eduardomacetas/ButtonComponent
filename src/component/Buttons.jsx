import { render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

class Buttons extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="buttons"> Buttons </div> */}
        <label>
          { ' <Button />  '}
          <Button />
        </label>
        <label>
          { '&:hover, &:focus'}
          <Button />
        </label>
        <br/>
        <br/>

        <Button variant="outline" />
        <Button variant="text" />

      </div>
    )
  }
}

export default Buttons;