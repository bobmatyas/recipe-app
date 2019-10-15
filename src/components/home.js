import React from 'react';
import styled from 'styled-components';
import RandomDisplay from './random-display';
import FoodTrivia from './food-trivia';
import Search from './search';
import SubHeader from './subheader';

const HomeHolder = styled.div`
  background-color: #f9f9fb;
  padding-bottom: 100px;
`;

export const Home = () => 
  <HomeHolder>

    <Search />

    <FoodTrivia />

    <SubHeader title="Recipes to Try" description="Random recipes from the collection." />
      
    <RandomDisplay />

  </HomeHolder>

export default Home;