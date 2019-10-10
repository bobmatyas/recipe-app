import React from 'react';
import styled from 'styled-components';
import {ReactComponent as SearchIcon} from './../images/search.svg';

const StyledButton = styled.button`
  font-size: 1.6rem;
  height: 40px;
  margin: 0 0 0 0;
  padding: 7px 5px 5px 5px;
  width: 50px;

  :hover {
    cursor: pointer;
  }

  svg {
    margin: 0;
  }
`;

export const Button = (props) => {
  return (
    <StyledButton
      type={props.type}
      id={props.id}
    >
      <SearchIcon fill="#000000" width="25" height="25" />
    </StyledButton>
  );
}

export default Button;