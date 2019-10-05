import React from 'react';
import styled from 'styled-components';
import RandomDisplay from './random-display';

const StyledDiv = styled.div`
  background-color #f9f9fb;
`;


function Random() { 
  return(
    <StyledDiv>
      <RandomDisplay />
    </StyledDiv>
  );

}

export default Random;