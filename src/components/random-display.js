import React from 'react';
import jsonData from '../data/random.json';
import RecipeCard from './recipe-card';

function RandomDisplay() { 

  return(
    <div>
      
      {jsonData.hits.map((item, index) => (
          <RecipeCard
            key={index}
            recipe={item.recipe.label} 
          />
        )
      )}
    </div>
  );

}

export default RandomDisplay;