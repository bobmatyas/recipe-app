import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Search from './search';
import RecipeCard from './recipe-card';

function Breakfast() { 

  const [data, setData] = useState([]);

  const recipeSearchBase = 'https://api.edamam.com/search?app_id=413bfa1c&app_key=a3b6b06160224886fc0b6e8a1a5b822a&health=vegan&q=pancake';

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

  return(
    <div>
      <h2>Breakfast</h2>
      <Search />
      
      <p>{JSON.stringify(data)}</p>
  

    </div>
  );

}

export default Breakfast;