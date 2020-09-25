import { render } from '@testing-library/react';
import React from 'react';
import styled, { css } from 'styled-components'

const HEIGHT_SIZES = {
  sm: '32px',
  md: '36px',
  lg: '42px'
}

const WIDTH_SIZES = {
  sm: '73px',
  md: '81px',
  lg: '91px'
}

const heightSize = ({size}) => {
  if(size) return HEIGHT_SIZES[size]
}

const widthSize = ({size}) => {
  if(size) return WIDTH_SIZES[size]
}

// Styled component named StyledButton
const StyledButton = styled.div`
  && {
    background: #E0E0E0;
    border-radius: 6px;
    color: #3f3f3f; 
    font-size: 14px;
    height: ${heightSize};
    text-align: center;
    line-height: 30px;
    width: ${widthSize};

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

    ${({ disableShadow }) =>
      disableShadow &&
      css`
        background: #3D5AFE;
        color: white;
      `
    }
  };
`

function Button(props) {
  // Use it like any other component.
  return <StyledButton {...props}> Default </StyledButton>;
}

Button.defaultProps = {
  disabled: false,
  disableShadow: false,
  size: "md",
}


export default Button;