import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as HomeIcon} from './../images/icon-home.svg';
import {ReactComponent as AboutIcon} from './../images/icon-about.svg';
import {ReactComponent as RandomIcon} from './../images/icon-random.svg';

const NavigationMenuContainer = styled.nav`
  background-color: #fff;
  border-top: 2px solid #000;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
`;

const NavigationMenu = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavigationMenuItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const Menu = () => 
  <NavigationMenuContainer>
    <NavigationMenu>
        <NavigationMenuItem>
          <Link to="/">
            <HomeIcon />
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/random">
            <RandomIcon />
            Random
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/about">
            <AboutIcon />
            About
          </Link>
        </NavigationMenuItem>
    </NavigationMenu>
  </NavigationMenuContainer>

export default Menu;