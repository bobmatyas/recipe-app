import React from 'react';
import jsonData from '../data/random.json';
import RecipeCard from './recipe-card';

console.log(jsonData);

function RandomDisplay() { 

  return(
    <div>
      
      {jsonData.hits.map((item, index) => (
          <RecipeCard
            key={index}
            recipe={item.recipe.label} 
            image={item.recipe.image}
            sourceOriginal={item.recipe.source}
            sourceArchive={item.recipe.shareAs}
            healthLabels={item.recipe.healthLabels}
            ingredients={item.recipe.ingredientLines}
            calories={item.recipe.calories}
            servings={item.recipe.yield}
            prepTime={item.recipe.totalTime}
          />
        )
      )}
    </div>
  );

}

export default RandomDisplay;