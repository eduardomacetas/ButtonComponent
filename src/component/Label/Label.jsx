import React from 'react';
import styled from 'styled-components'
import { SIZES, COLORS, FONT_WEIGHTS } from '../../shared/constants';

const StyledText = styled.div`{
  color: ${({color}) => (color ? COLORS[color] : COLORS['gray1'])};
  font-size: ${({size}) => (size ? SIZES[size] : '12px')};
  font-style: normal;
  font-weight: ${({weight}) => (weight ? FONT_WEIGHTS[weight] : 'normal')};
  };
`

function Label(props) {
  return <StyledText {...props}> {props.text} </StyledText>
}

Text.defaultProps = {
  size: 'medium',
  color: COLORS['gray1'],
  weight: 'normal'
}

export default Label;