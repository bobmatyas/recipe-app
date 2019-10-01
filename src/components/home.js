import React from 'react';
import RandomDisplay from './random-display';
import FoodTrivia from './food-trivia';
import Search from './search';

export const Home = () => 

  <div>
    <h2>Home</h2>

    <FoodTrivia />
    
    <Search />

    <h2>Recipes to Try</h2>
      
      <RandomDisplay />

  </div>

export default Home;