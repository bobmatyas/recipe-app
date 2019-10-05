import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1.6rem;
  padding: 1px 5px;

  :hover {
    cursor: pointer;
  }
`;

export const Button = (props) => {
  return (
    <StyledButton
      type={props.type}
      id={props.id}
    >
      {props.text}
    </StyledButton>
  );
}

export default Button;