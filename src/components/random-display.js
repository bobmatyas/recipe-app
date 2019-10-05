import React from 'react';
import soupData from '../data/soup.json';
import cakeData from '../data/cake.json';
import tofuData from '../data/tofu.json';
import RecipeCard from './recipe-card';

function RandomDisplay() { 

  const getRandomRecipe = (dataSource) => {
    return dataSource.hits[Math.floor(Math.random()*dataSource.hits.length-1)];
  }

  const soup = getRandomRecipe(soupData);
  const cake = getRandomRecipe(cakeData);
  const tofu = getRandomRecipe(tofuData);

  return(
    <div>
      
      <RecipeCard
        recipe={soup.recipe.label} 
        image={soup.recipe.image}
        sourceOriginal={soup.recipe.source}
        sourceArchive={soup.recipe.shareAs}
        healthLabels={soup.recipe.healthLabels}
        ingredients={soup.recipe.ingredientLines}
        calories={soup.recipe.calories}
        servings={soup.recipe.yield}
        prepTime={soup.recipe.totalTime}          
      />



      <RecipeCard
        recipe={tofu.recipe.label} 
        image={tofu.recipe.image}
        sourceOriginal={tofu.recipe.source}
        sourceArchive={tofu.recipe.shareAs}
        healthLabels={tofu.recipe.healthLabels}
        ingredients={tofu.recipe.ingredientLines}
        calories={tofu.recipe.calories}
        servings={tofu.recipe.yield}
        prepTime={tofu.recipe.totalTime}          
      />

      <RecipeCard
        recipe={cake.recipe.label} 
        image={cake.recipe.image}
        sourceOriginal={cake.recipe.source}
        sourceArchive={cake.recipe.shareAs}
        healthLabels={cake.recipe.healthLabels}
        ingredients={cake.recipe.ingredientLines}
        calories={cake.recipe.calories}
        servings={cake.recipe.yield}
        prepTime={cake.recipe.totalTime}          
      />  

    </div>
  );

}

export default RandomDisplay;