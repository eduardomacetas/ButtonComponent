import { render } from '@testing-library/react';
import React from 'react';
import styled, { css } from 'styled-components'

import { HEIGHT_SIZES, WIDTH_SIZES, COLORS, HOVER_COLOR } from '../shared/constants';


const heightSize = ({size}) => {
  if(size) return HEIGHT_SIZES[size]
}

const widthSize = ({size}) => {
  if(size) return WIDTH_SIZES[size]
}

const buttonBackgroundColor = ({color}) => {
  if(color) return COLORS[color]
}

const buttonHoverBackgroundColor = ({color}) => {
  if(color) return HOVER_COLOR[color]
}

const buttonColor = ({color}) => {
  if (color === 'default') return COLORS.darkGray
  return COLORS.white
}


const variantOption = {
  outline: {
    border: "1px solid #3D5AFE"
  },
  text: {
    border: "1px solid #fff"
  }
}

// Styled component named StyledButton
const StyledButton = styled.div` {
    background: ${buttonBackgroundColor};
    border-radius: 6px;
    color: ${buttonColor}; 
    font-size: 14px;
    height: ${heightSize};
    text-align: center;
    line-height: 35px;
    width: ${widthSize};

    :hover {
    background: ${buttonHoverBackgroundColor};
    }

    :focus {
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

    ${({ variant }) =>
      variant &&
      variantOption[variant] &&
      css`
        background: white;
        color: blue;
        border: ${variantOption[variant].border}
        :hover{
          background: rgba(41, 98, 255, 0.1);
        } 
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
  color: "default"
}


export default Button;