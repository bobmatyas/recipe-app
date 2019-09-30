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
          />
        )
      )}
    </div>
  );

}

export default RandomDisplay;