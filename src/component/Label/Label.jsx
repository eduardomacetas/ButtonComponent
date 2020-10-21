import React from 'react';
import styled from 'styled-components'
import { SIZES, COLORS, FONT_WEIGHTS } from '../../shared/constants';

const StyledText = styled.div`{
  color: ${({color}) => (color ? COLORS[color] : '#333333')};
  font-size: ${({size}) => (size ? SIZES[size] : '12px')};
  font-style: normal;
  font-weight: ${({weight}) => (weight ? FONT_WEIGHTS[weight] : 'normal')};
  };
`

function Label(props) {
  return <StyledText {...props}> {props.children} </StyledText>
}

Text.defaultProps = {
  size: 'medium',
  color: '#333333',
  weight: 'normal'
}

export default Label;