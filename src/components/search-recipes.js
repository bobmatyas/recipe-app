import React, { Component } from 'react';
import Button from './button';
import styled from 'styled-components';
import SearchBgImage from './../images/search-bg-01.jpg';
import SearchBgImage2 from './../images/search-bg-02.jpg';
import SearchBgImage3 from './../images/search-bg-03.jpg';
import SearchBgImage4 from './../images/search-bg-04.jpg';

const backgrounds = [SearchBgImage, SearchBgImage2, SearchBgImage3, SearchBgImage4];

const getRandomBackground = (backgrounds) => {
  return backgrounds[Math.floor(Math.random()*backgrounds.length)];
}

const SearchContainer = styled.div`
  background-image: url(${getRandomBackground(backgrounds)});
  display: flex;
  height: 200px;
  justify-content: center;
  text-align: center;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
`;

const Input = styled.input`
  color: #666666;
  font-size: 16px;
  height: 40px;
  margin: 0;
  padding: 5px 10px;
`;

const Label = styled.label`
  display: none;
  font-size: 1.8rem;
`;

class SearchRecipes extends Component {

    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({
            searchText: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    }

    render() {
      return(
        <SearchContainer>
          <Form onSubmit={this.handleSubmit}>
            <Label htmlFor="search">Search: </Label>
            <Input 
              type="search"
              onChange={this.onSearchChange}
              name="search"
              ref={(input) => this.query = input}
              placeholder="What are you hungry for?" 
            />
              
            <Button type="submit" id="submit" text="Go" />
          
          </Form>
        </SearchContainer>
      );
    }
}

export default SearchRecipes;