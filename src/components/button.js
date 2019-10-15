import React from 'react';
import styled from 'styled-components';
import {ReactComponent as SearchIcon} from './../images/search.svg';

const StyledButton = styled.button`
  background-color: #404a3b;
  border: 1px solid #404a3b;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  -webkit-box-shadow: 5px 4px 35px -1px rgba(0,0,0,0.24);
  -moz-box-shadow: 5px 4px 35px -1px rgba(0,0,0,0.24);
  box-shadow: 5px 4px 35px -1px rgba(0,0,0,0.24);
  color: #fff;
  font-size: 1.6rem;
  height: 40px;
  margin: 0;
  padding: 7px 5px 5px 5px;
  width: 50px;

  :hover {
    background-color: #212320;
    border: 1px solid #212320;
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
      <SearchIcon width="25" height="25" />
    </StyledButton>
  );
}

export default Button;