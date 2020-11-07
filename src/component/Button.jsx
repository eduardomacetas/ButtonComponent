import React from 'react';
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { HEIGHT_SIZES, WIDTH_SIZES, COLORS, HOVER_COLOR } from '../shared/constants';
import ShoppingCart from '../component/Icon/Icon';

const heightSize = ({size}) => {
  return size === "sm"
    ? HEIGHT_SIZES[size]
    : size === "lg"
    ? HEIGHT_SIZES[size]
    : HEIGHT_SIZES["md"]
}

const widthSize = ({size}) => {
  return size === "sm"
    ? WIDTH_SIZES[size]
    : size === "lg"
    ? WIDTH_SIZES[size]
    : WIDTH_SIZES["md"]
}

const buttonBackgroundColor = ({color}) => {
  if(color) return COLORS[color]
  return COLORS.primary
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
    display: flex;
    align-items: center;
    background: ${buttonBackgroundColor};
    border-radius: 6px;
    color: ${buttonColor}; 
    font-size: 14px;
    height: ${heightSize};
    width: ${widthSize};
    justify-content: center;
    line-height: 35px;  

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

export const Button = ({
  // Use it like any other component.
  color,
  disabled,
  disableShadow,
  size,
  startIcon,
  endIcon,
  }) => {
  return ( 
    <StyledButton
      color={color}
      disabled={disabled}
      disableShadow={disableShadow}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {startIcon === "local_grocery_store" && <ShoppingCart />}
      Default
      {endIcon === "local_grocery_store" && <ShoppingCart />}
    </StyledButton>
    );
}
  
Button.defaultProps = {
  disabled: false,
  disableShadow: false,
  size: "md",
  color: "default",
};

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Button;