import React from 'react';
import styled from 'styled-components';
import {ReactComponent as LogoImage} from './../images/logo-vegan.svg';

const StyledHeader = styled.header`
  background-color: #404a3b;
  color: #fff;
`;

const SiteName = styled.h1`
  color: #fff;
  margin: 0 auto;
  padding: 5px;
  text-align: center;
  text-transform: uppercase;
`;


export const Header = () => 
  <StyledHeader>
    <LogoImage fill="white" width="125" />
    <SiteName>Food Fight</SiteName>
  </StyledHeader>

export default Header;