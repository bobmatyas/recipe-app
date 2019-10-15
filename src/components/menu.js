import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as HomeIcon} from './../images/icon-home.svg';
import {ReactComponent as AboutIcon} from './../images/icon-about.svg';
import {ReactComponent as RandomIcon} from './../images/icon-random.svg';

const NavigationMenuContainer = styled.nav`
  background-color: #000;
  border-top: 2px solid #000;
  bottom: 0;
  -webkit-box-shadow: -3px -6px 7px 1px rgba(71,65,71,0.02);
  -moz-box-shadow: -3px -6px 7px 1px rgba(71,65,71,0.02);
  box-shadow: -3px -6px 7px 1px rgba(71,65,71,0.02);
  color: #eee;
  left: 0;
  position: fixed;
  width: 100%;

  @media (min-width: 550px) {
    height: 75px;
    left: 0;
    top: 0;
  }
`;

const NavigationMenu = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 10px auto;
  padding: 0;
`;

const NavigationMenuItem = styled.li`
  font-size: 1.4rem;
  margin: 0 10px;
  padding: 0;
  text-align: center;
  width: 75px;

  a {
    color: #eee;
    font-variant: small-caps;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:hover {
    color: #fff;
  }
`;

const svgSize = 35;

export const Menu = () => 
  <NavigationMenuContainer>
    <NavigationMenu>
        <NavigationMenuItem>
          <Link to="/">
            <HomeIcon width={svgSize} height={svgSize} />
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/random">
            <RandomIcon width={svgSize} height={svgSize} />
            Random
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/about">
            <AboutIcon width={svgSize} height={svgSize} />
            About
          </Link>
        </NavigationMenuItem>
    </NavigationMenu>
  </NavigationMenuContainer>

export default Menu;