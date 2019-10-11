import React from 'react';
import styled from 'styled-components';
import {ReactComponent as LogoImage} from './../images/logo-vegan.svg';

const StyledHeader = styled.header`
  background-color: #404a3b;
  color: #fff;
  padding: 25px 0;
`;

const SiteName = styled.h1`
  color: #fff;
  font-size: 5.2rem;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
`;

const LogoHolder = styled.div`
  margin: 0 auto;
  width: 105px;
`;


export const Header = () => 
  <StyledHeader>
    <LogoHolder>
      <LogoImage fill="white" width="100" height="100" />
    </LogoHolder>
    <SiteName>Food Fight</SiteName>
  </StyledHeader>

export default Header;