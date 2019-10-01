import React, {useState, useEffect} from 'react';
import Axios from 'axios';


function FoodTrivia() {

  const [data, setData] = useState([]);

  const recipeSearchBase = 'https://api.spoonacular.com/food/trivia/random?apiKey=8d2615b430984211811dbd95836622cd';

  const getRecipes = async () => {
    const result = await Axios(
      recipeSearchBase,
    );
    setData(result.data);
    //console.log(result.data);
  }

  useEffect( () => {  
    getRecipes();
  }, []);

  console.log(data);

  let foodTrivia = data.text;

  return(
    <div>
      <h2>Food Trivia</h2>
      {foodTrivia}
    </div>
  );

}

export default FoodTrivia;