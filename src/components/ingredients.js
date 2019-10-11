import React from 'react';
import styled from 'styled-components';
import {ReactComponent as IngredientsIcon} from './../images/ingredients.svg';
import CheckIcon from './../images/icon-check.svg';

const IngredientsHeader = styled.summary`
  align-items: center;
  border-bottom: 4px solid #eee;
  color: #0091C3;
  display: flex;
  font-size: 2.2rem;
  padding: 10px 0 10px 0;

  :hover {
    cursor: pointer;
    border-bottom: 4px solid #ccc;
  }
`;

const IngredientsHeaderInner = styled.h4`
  font-size: 2.2rem;
  margin: 0;
  width: 90%;
`;

const IngredientsListing = styled.ul`
  list-style-type: circle;
  list-style-image: url(${CheckIcon});
`;

const IngredientsListingItem = styled.li`
  color: #404a3b;
  font-size: 1.8rem;
  line-height: 1.6;
  margin: 25px 0;
  padding: 0 15px;
`;

export const Ingredients = ({ingredientsList}) => 
  <details>
    <IngredientsHeader>
      <IngredientsHeaderInner>Ingredients</IngredientsHeaderInner> 
      <IngredientsIcon width="25" height="25" />
    </IngredientsHeader>

    <IngredientsListing>
      {ingredientsList.map((item, index) => (
        <IngredientsListingItem key={index}>{item}</IngredientsListingItem>
      ))}
    </IngredientsListing>
  </details>

export default Ingredients;