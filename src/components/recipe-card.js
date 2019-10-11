import React from 'react';
import styled from 'styled-components';
import Image from './image';
import Ingredients from './ingredients';
import HealthList from './healthlist';

const RecipeCardDisplay = styled.div`
  background-color #fff;
  border-radius: 5px;
  box-shadow: rgb(209, 209, 213) 0px 0px 4px;
  margin: 25px;
  padding: 25px;
  text-align: center;

  @media (min-width: 550px) {
    display: grid;
    grid-template-columns: 210px 1fr;
    grid-template-rows: 275px;
    text-align: left;
  }

  @media (min-width: 800px) {
    margin: 25px auto;
    max-width: 800px;
  }
`;

const RecipeCardImage = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

const RecipeCardTopRight = styled.div`

  @media (min-width: 550px) {
    grid-column: 2;
    grid-row: 1;
    padding: 0 0 0 25px;
  }

`;

const RecipeTitle = styled.h3`
  color: #00679c;
  font-size: 2.8rem;
  line-height: 1.2;
  margin: 25px 0 15px 0;
  padding: 0;
  text-transform: capitalize;

  @media (min-width: 550px) {
    font-size: 2.2rem;
    line-height: 1.4;
    margin: 0;
  }
`;

const RecipeCardHealth = styled.div`

`;

const HealthInfo = styled.p`
  color: #404a3b;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 30px 0;
`;

const RecipeCardBottom = styled.div`
  grid-column: 1/3;
  grid-row: 2;
`;

const PrepEstimate = styled.p`
  color: #666666;
  font-size: 1.4rem;
  text-align: center;
`;

const Attribution = styled.p`
  border-top: 2px solid #eee;
  color: #404a3b;
  font-size: 1.6rem;
  line-height: 1.3;
  margin-top: 50px;
  padding-top: 10px;
  text-align: left;

  a {
    color: #00bfff;
  }
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
      <RecipeCardImage>
        <Image source={image} altText={recipe} />
        <PrepEstimate>Prep. Time: {prepTime > 0 ? recipeEstimate(prepTime) : 'Not Provided'}</PrepEstimate>
      </RecipeCardImage>
        
      <RecipeCardTopRight>
          <RecipeTitle>{recipe}</RecipeTitle>
          <RecipeCardHealth>
            <HealthInfo>Calories: {Math.round(calories)} / Servings: {servings} </HealthInfo>
            <HealthList healthLabels={healthLabels} />
          </RecipeCardHealth>
        </RecipeCardTopRight>
      
        <RecipeCardBottom>
        
          <Ingredients ingredientsList={ingredients} />
          
          <Attribution>
            Recipe originally appeared on <a href={sourceArchive}>{sourceOriginal}</a>. Vist the source for directions.
          </Attribution>
        
        </RecipeCardBottom>
    </RecipeCardDisplay>

export default RecipeCard;