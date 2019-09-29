import React from 'react';
import MealType from './meal-type';

export const Home = () => 

  <div>
    <h2>Home</h2>

    <MealType 
          styleName="breakfast" 
          mealType="Breakfast"
        />

        <MealType 
          styleName="lunch" 
          mealType="Lunch"
        />

        <MealType 
          styleName="dinner" 
          mealType="Dinner"
        />

        <MealType 
          styleName="snack" 
          mealType="Snack"
        />
    </div>

export default Home;