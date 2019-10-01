import React from 'react';
import RecipeCard from './recipe-card';

const RecipeList = props =>
    <div>
      {props.results.hits.map((item, index) => (
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
        ))}
    </div>

export default RecipeList;