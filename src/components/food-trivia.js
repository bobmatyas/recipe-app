import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: green;
  color: #fff;
  padding: 10px;
`;


function FoodTrivia() {

  const [data, setData] = useState([]);

  const recipeSearchBase = 'https://api.spoonacular.com/food/trivia/random?apiKey=8d2615b430984211811dbd95836622cd';

  const getRecipes = async () => {
    const result = await Axios(
      recipeSearchBase,
    );
    setData(result.data);
  }

  useEffect( () => {  
    getRecipes();
  }, []);

  let foodTrivia = data.text;

  return(
    <StyledDiv>
      <h2>Food Trivia</h2>
      {foodTrivia}
    </StyledDiv>
  );

}

export default FoodTrivia;