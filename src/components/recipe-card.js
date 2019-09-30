import React from 'react';

export const RecipeCard = ({recipe, image, sourceOriginal, sourceArchive}) => 
    
    <div>
      <h3>{recipe}</h3>
      <img src={image} alt={recipe} />

      <p>Recipe originally appeared on <a href={sourceArchive}>{sourceOriginal}</a></p>
    </div>

export default RecipeCard;