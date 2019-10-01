import React, { Component } from 'react';
import Axios from 'axios';
import SearchRecipes from './search-recipes';
import RecipeList from './recipe-list';

class Breakfast extends Component {

  constructor() {
    super();
    this.state = {
      results: [],
      loading: true
    };
  }



  performSearch = async (query='vegan') => {
    console.log(query);
    const recipeSearchBase = 'https://api.edamam.com/search?app_id=413bfa1c&app_key=a3b6b06160224886fc0b6e8a1a5b822a&health=vegan';
    
    const recipeSearchString = `${recipeSearchBase}&q=${query}`

    console.log(recipeSearchString);
    const result = await Axios(
      recipeSearchString,
    );
    console.log(result.data);
    this.setState({
      results: result.data,
      loading: false
    });
  }


  render() {

    return ( 
      <div className = "App">
        <SearchRecipes onSearch = {this.performSearch} /> 
        <div> 
          {
            (this.state.loading) ? <p>Loading</p> : <RecipeList results={this.state.results} /> 
          } 
        </div> 
      </div>
    );
  }
}

export default Breakfast;