import React from 'react';
import Random from './random';
import FoodTrivia from './food-trivia';
import Search from './search';

export const Home = () => 
  <div>

    <Search />

    <FoodTrivia />

    <h2>Recipes to Try</h2>
      
      <Random />

  </div>

export default Home;