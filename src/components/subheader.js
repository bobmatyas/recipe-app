import React from 'react';
import styled from 'styled-components';
import {ReactComponent as CookingIcon} from './../images/icon-cooking.svg';

const SubHeadingHolder = styled.div`
  background-image: linear-gradient(to left bottom, #ebd06a, #f1d171, #f6d378, #fbd480, #ffd687);
  padding: 5%;
`;

const SubHeading = styled.h2`
  font-size: 2.2rem;
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  font-size: 1.8rem;
  margin: 15px 0 0 0;
  padding: 0 5%;
`;

const styles = {'float': 'right', 'marginRight': 35+'px'}

export const SubHeader = ({title, description}) => 
  <SubHeadingHolder>
    {description ? <CookingIcon fill="#666666" style={styles} /> : ''}
    <SubHeading>{title}</SubHeading>
    {description ? <Description>{description}</Description> : ''}
  </SubHeadingHolder>

export default SubHeader;