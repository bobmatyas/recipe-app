import React from 'react';
import styled from 'styled-components';
import Image from './image';


const RecipeCardDisplay = styled.div`
  background-color #fff;
  border-radius: 5px;
  box-shadow: rgb(209, 209, 213) 0px 0px 4px;
  margin: 25px;
  padding: 25px;
`;

const RecipeTitle = styled.h3`
  color: #0091C3;
  font-size: 2.2rem;
  line-height: 1.4;
  text-align: center;
  text-transform: capitalize;
`;

const IngredientsHeading = styled.h4`
  margin-left: 10px;
  margin-top: -10px;
`;

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
    
    <RecipeCardDisplay>
      <RecipeTitle>{recipe}</RecipeTitle>
      <Image source={image} altText={recipe} />

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
        <summary><IngredientsHeading>Ingredients</IngredientsHeading></summary>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </details>
      <p>Recipe originally appeared on <a href={sourceArchive}>{sourceOriginal}</a></p>
    </RecipeCardDisplay>

export default RecipeCard;