import { render } from '@testing-library/react';
import React from 'react';
import styled, { css } from 'styled-components'

// Styled component named StyledButton
const StyledButton = styled.div`
  && {
    background: #E0E0E0;
    border-radius: 6px;
    color: #3f3f3f;
    font-size: 14px;
    height: 36px;
    text-align: center;
    line-height: 30px;
    width: 81px;

    &:hover {
    background: #AEAEAE;
    }

    &:focus {
    background: #AEAEAE;
    }

    ${({ disabled }) => 
      disabled &&
      css`
        color: #9E9E9E;
        cursor: none;
      `
    }

  };
`

function Button(props) {
  // Use it like any other component.
  return <StyledButton {...props}> Default </StyledButton>;
}

Button.defaultProps = {
  disabled: false
}


export default Button;