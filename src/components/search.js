import React, { Component } from 'react';
import Axios from 'axios';
import SearchRecipes from './search-recipes';
import RecipeList from './recipe-list';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      results: [],
      loading: true,
      error: false
    };
  }



  performSearch = async (query='vegan') => {
    console.log(query);
    const recipeSearchBase = 'https://api.edamam.com/search?app_id=413bfa1c&app_key=a3b6b06160224886fc0b6e8a1a5b822a&health=vegan';
    
    const recipeSearchString = `${recipeSearchBase}&q=${query}`
    console.log(recipeSearchString);    
    
    Axios.get(recipeSearchString)
      .then((response) => {
        this.setState({
          results: response.data,
          loading: false
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true
        })
      }
      )
  }


  render() {

    return ( 
      <div>
        <SearchRecipes onSearch = {this.performSearch} /> 
        <div> 
          {
            (this.state.loading) ? '' : <RecipeList results={this.state.results} /> 
          } 
          { this.state.error ? <div>Error</div> : '' }
        </div> 
      </div>
    );
  }
}

export default Search;