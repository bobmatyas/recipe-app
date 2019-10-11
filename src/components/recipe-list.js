import React from 'react';
import styled from 'styled-components';
import RecipeCard from './recipe-card';

const SearchResults = styled.div`
  background-color #f9f9fb;
`;

const RecipeList = props =>
  <SearchResults>
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
  </SearchResults>

export default RecipeList;