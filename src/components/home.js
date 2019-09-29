import React from 'react';
import MealType from './meal-type';

export const Home = () => 

  <div>
    <h2>Home</h2>

    <MealType 
          styleName="breakfast" 
          mealType="breakfast"
        />

        <MealType 
          styleName="lunch" 
          mealType="lunch"
        />

        <MealType 
          styleName="dinner" 
          mealType="dinner"
        />

        <MealType 
          styleName="snack" 
          mealType="snack"
        />
    </div>

export default Home;