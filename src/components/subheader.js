import React from 'react';
import styled from 'styled-components';
import {ReactComponent as CookingIcon} from './../images/icon-cooking.svg';

const SubHeadingHolder = styled.div`
  background-image: linear-gradient(to left bottom, #ebd06a, #f1d171, #f6d378, #fbd480, #ffd687);
  padding: 25px 5%;
`;

const SubHeading = styled.h2`
  color: #212320;
  font-size: 2.4rem;
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  color: #212320;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 15px 0 0 0;
  padding: 0 5%;
`;

const imageStyles = {
  'float': 'right', 
  'marginRight': 35+'px', 
  'marginLeft': 'auto', 
  'marginTop': '0', 
  'marginBottom': '0'
}

export const SubHeader = ({title, description}) => 
  <SubHeadingHolder>
    {description ? <CookingIcon fill="#212320" style={imageStyles} /> : ''}
    <SubHeading>{title}</SubHeading>
    {description ? <Description>{description}</Description> : ''}
  </SubHeadingHolder>

export default SubHeader;