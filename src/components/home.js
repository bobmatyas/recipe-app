import React from 'react';
import RandomDisplay from './random-display';
import FoodTrivia from './food-trivia';
import Search from './search';
import SubHeader from './subheader';

export const Home = () => 
  <div>

    <Search />

    <FoodTrivia />

    <SubHeader title="Recipes to Try" description="Random recipes from the collection." />
      
      <RandomDisplay />

  </div>

export default Home;