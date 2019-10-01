import React from 'react';


const recipeEstimate = (prepTime) => {
  if (prepTime < 60) 
    return `${prepTime} mins`;
  else if (prepTime === 60) {
    return `1 hour`;
  } else if (prepTime >= 60) {
    const hours = Math.round(prepTime / 60);
    const minutes = Math.round(prepTime % 60);
    let minuteTextLabel = `minute`;
    if (minutes > 1) {
      minuteTextLabel = `minutes`;
    }
    let hourTextLabel = `hour`;
    if (hours > 1) {
      hourTextLabel = `hours`;
    }
    return `${hours} ${hourTextLabel}, ${minutes} ${minuteTextLabel}`;
  }
}

export const RecipeCard = ({  recipe, 
                              image, 
                              sourceOriginal, 
                              sourceArchive, 
                              healthLabels,
                              ingredients,
                              calories,
                              servings,
                              prepTime
                            }) => 
    
    <div>
      <h3>{recipe}</h3>
      <img src={image} alt={recipe} />

      <h4>Health</h4>
      <p>Calories: {Math.round(calories)}</p>
      <p>Servings: {servings}</p>
      <p>Prep. Time: {prepTime > 0 ? recipeEstimate(prepTime) : 'Not Provided'}</p>
      <ul>
          {healthLabels.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>

      <details>
        <summary>Ingredients</summary>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </details>
      <p>Recipe originally appeared on <a href={sourceArchive}>{sourceOriginal}</a></p>
    </div>

export default RecipeCard;