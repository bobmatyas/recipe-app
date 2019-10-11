import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  border: 2px solid #eee;
  border-radius: 3px;
  margin: 0;
  width: 225px;

  @media (min-width: 550px) {
    width: 200px;
  }
`;

function Image(props) {
  return(
    <StyledImage src={props.source} alt={props.altText} />
  );
}

export default Image;