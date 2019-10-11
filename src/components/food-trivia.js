import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import {ReactComponent as FactImage} from './../images/fact.svg';


const FactHolder = styled.div`
  background-image: linear-gradient(to right bottom, #05658c, #2b78a0, #438bb4, #599fc9, #6fb3de);
  color: #fff;
  padding: 5%;

  @media only screen and (min-width: 600px) {
    background-color: red;
  }
`;

const FactHeader = styled.h2`
  font-size: 2.2rem;
  padding: 0;
`;

const Fact = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.4;
  padding: 0 5%;
`;

const styles = {'float': 'right', 'marginTop': 55+'px'}

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
    <FactHolder>
      <FactImage fill="#eeeeee" style={styles} width="125" height="125" />
      <FactHeader>Did You Know?</FactHeader>
      <Fact>{foodTrivia}
        {foodTrivia ? foodTrivia : 'The average American cholesterol level is 210 milligrams per deciliter (mg/dL), which is higher than the medically acceptable range of 150-200 mg/dL. The average cholesterol of a vegan in the US is 146 mg/dL.'}
      </Fact>
      
    </FactHolder>
  );

}

export default FoodTrivia;