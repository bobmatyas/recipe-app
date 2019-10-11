import React from 'react';
import styled from 'styled-components';
import SubHeader from './subheader';
import RandomDisplay from './random-display';

const StyledDiv = styled.div`
  background-color: #f9f9fb;
`;


function Random() { 
  return(
    <StyledDiv>
      <SubHeader title="Random" />
      <RandomDisplay />
    </StyledDiv>
  );

}

export default Random;