import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 125px;

  @media only screen and (min-width: 600px) {
    width: 300px;
  }
`;


function Image(props) {

  return(
    <StyledImage src={props.source} alt={props.altText} />
  );

}

export default Image;