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
  return color === "primary"
      ? COLORS[color]
      : color === "secondary"
      ? COLORS[color]
      : color === "danger"
      ? COLORS[color]
      : COLORS['default']
}

const buttonHoverBackgroundColor = ({color}) => {
  return color === "primary"
      ? HOVER_COLOR[color]
      : color === "secondary"
      ? HOVER_COLOR[color]
      : color === "danger"
      ? HOVER_COLOR[color]
      : HOVER_COLOR['default']
}

const buttonColor = ({color}) => {  
  return color === "default"
    ? COLORS['darkGray']
    : color === "disabled"
    ? COLORS['mediumgray']  
    : color === "text"
    ? '#3D5AFE'
    : COLORS['white']
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
        :hover { 
          pointer-events: none;
        }
      `
    }

    ${({ disableShadow }) =>
      disableShadow &&
      css`
        background: #3D5AFE;
        color: white;
        :hover {
          pointer-events: none;
        }
      `
    }

    ${({ variant }) =>
      variant &&
      variantOption[variant] &&
      css`
        background: transparent;
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
  variant,
  }) => {
  return ( 
    <StyledButton
      color={color}
      disabled={disabled}
      disableShadow={disableShadow}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      variant={variant}
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
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
  disabled: PropTypes.bool,
  disableShadow: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  startIcon: PropTypes.oneOf(['local_grocery_store']),
  endIcon: PropTypes.oneOf(['local_grocery_store']),
  variant: PropTypes.oneOf(['outline', 'text']),
};

export default Button;